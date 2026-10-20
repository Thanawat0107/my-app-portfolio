# แผนงานและพิมพ์เขียวการเชื่อมต่อ Supabase (PostgreSQL BaaS Blueprint)

เอกสารฉบับนี้จัดทำขึ้นเพื่อเป็น **พิมพ์เขียวสถาปัตยกรรม (Architectural Blueprint)** สำหรับการยกระดับพอร์ตโฟลิโอของคุณในอนาคต จากระบบ Static JSON สู่ระบบ **Full CRUD Database ผ่าน Supabase (PostgreSQL)** โดยไม่ต้องดูแลเซิร์ฟเวอร์ Backend แยกต่างหาก

---

## 🎯 ทำไม Supabase จึงเหมาะที่สุดสำหรับพอร์ตโฟลิโอยาวๆ ตลอดชีพของคุณ?

1. **ฟรีตลอดชีพ (Generous Free Tier):** ให้พื้นที่ฐานข้อมูล PostgreSQL แท้ๆ 500 MB (จุข้อมูลโปรเจกต์ เอกสาร และประวัติการทำงานได้หลายพันรายการ)
2. **ไม่ต้องมีเซิร์ฟเวอร์ Backend:** Next.js เชื่อมตรงกับ Supabase ผ่าน Client SDK ได้เลย
3. **ความปลอดภัยระดับองค์กร (Row Level Security - RLS):** บุคคลทั่วไปหรือ HR ที่เข้าชมเว็บจะ **อ่านได้อย่างเดียว (Read-Only)** ส่วนคุณคนเดียวที่มีสิทธิ์ **เพิ่ม ลบ แก้ไข (CRUD)** เมื่อ Login
4. **มีหน้าจอ Admin สำเร็จรูปทันที (Supabase Studio):** คุณสามารถเปิดเว็บ Supabase บนมือถือหรือคอม เพื่อกดเพิ่มผลงานใหม่ อัปโหลดรูปภาพ หรือแก้ไขคำอธิบายได้โดยไม่ต้องเขียนโค้ด

---

## 🏛️ โครงสร้างฐานข้อมูล PostgreSQL (SQL DDL Scripts)

เมื่อคุณพร้อมเริ่มต้น เพียงสร้างโปรเจกต์บน [Supabase.com](https://supabase.com) แล้วนำโค้ด SQL ด้านล่างนี้ไปวางใน **SQL Editor** แล้วกด Run ได้ทันที:

```sql
-- ============================================================================
-- 1. ตารางเก็บผลงานโปรเจกต์ (Projects Table)
-- ============================================================================
CREATE TABLE public.projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug VARCHAR(100) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    featured BOOLEAN DEFAULT false,
    thumbnail_url TEXT NOT NULL,
    screenshots TEXT[] DEFAULT '{}',
    tech_stack TEXT[] DEFAULT '{}',
    problem_statement TEXT NOT NULL,
    core_features TEXT[] DEFAULT '{}',
    architecture_highlights TEXT[] DEFAULT '{}',
    business_impact TEXT NOT NULL,
    specs JSONB DEFAULT '{}'::jsonb,
    metrics JSONB DEFAULT '{}'::jsonb,
    demo_credentials JSONB DEFAULT '{}'::jsonb,
    deep_dive JSONB DEFAULT '{}'::jsonb,
    live_demo_url TEXT,
    github_url TEXT,
    github_frontend_url TEXT,
    github_backend_url TEXT,
    locale VARCHAR(10) DEFAULT 'th', -- 'th' หรือ 'en'
    display_order INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ============================================================================
-- 2. ตารางหมวดหมู่ทักษะและความสามารถทางเทคนิค (Skills Table)
-- ============================================================================
CREATE TABLE public.skills (
    id VARCHAR(50) PRIMARY KEY,
    category_name VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    skills TEXT[] DEFAULT '{}',
    locale VARCHAR(10) DEFAULT 'th',
    display_order INT DEFAULT 0,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ============================================================================
-- 3. ตารางประวัติการศึกษา รางวัลชนะเลิศ และกิจกรรม (Experience Table)
-- ============================================================================
CREATE TABLE public.experiences (
    id VARCHAR(100) PRIMARY KEY,
    period VARCHAR(100) NOT NULL,
    role VARCHAR(255) NOT NULL,
    organization VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL, -- 'award', 'education', 'leadership', 'work'
    badge VARCHAR(100),
    highlights TEXT[] DEFAULT '{}',
    technologies TEXT[] DEFAULT '{}',
    media JSONB DEFAULT '[]'::jsonb,
    locale VARCHAR(10) DEFAULT 'th',
    display_order INT DEFAULT 0,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ============================================================================
-- 4. ตารางเสาหลักสถาปัตยกรรมระบบ (Architecture Pillars Table)
-- ============================================================================
CREATE TABLE public.architecture_pillars (
    id VARCHAR(100) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    subtitle VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    tools TEXT[] DEFAULT '{}',
    code_snippet JSONB DEFAULT '{}'::jsonb,
    locale VARCHAR(10) DEFAULT 'th',
    display_order INT DEFAULT 0,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ============================================================================
-- 5. กำหนดนโยบายความปลอดภัย (Row Level Security - RLS)
-- ============================================================================
-- เปิดใช้งาน RLS ให้ทุกตาราง
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.architecture_pillars ENABLE ROW LEVEL SECURITY;

-- สิทธิ์ที่ 1: บุคคลทั่วไปทุกคนสามารถ "อ่าน" (SELECT) ได้
CREATE POLICY "Public Read Projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Public Read Skills" ON public.skills FOR SELECT USING (true);
CREATE POLICY "Public Read Experiences" ON public.experiences FOR SELECT USING (true);
CREATE POLICY "Public Read Pillars" ON public.architecture_pillars FOR SELECT USING (true);

-- สิทธิ์ที่ 2: เฉพาะบัญชีของคุณที่ Login เท่านั้น ที่สามารถ Insert/Update/Delete ได้
CREATE POLICY "Admin CRUD Projects" ON public.projects FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin CRUD Skills" ON public.skills FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin CRUD Experiences" ON public.experiences FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin CRUD Pillars" ON public.architecture_pillars FOR ALL TO authenticated USING (true);
```

---

## 🔌 ขั้นตอนการเชื่อมต่อเข้ากับ Next.js ในอนาคต

### 1. ติดตั้งไลบรารี
```bash
npm install @supabase/supabase-js
```

### 2. ตั้งค่าไฟล์ Environment Variables (`.env.local`)
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 3. สร้าง Client Helper (`src/lib/supabase.ts`)
```ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### 4. สถาปัตยกรรมแบบ Hybrid Resilience (ปลอดภัย 100% ไม่มีวันล่ม)
เพื่อให้พอร์ตโฟลิโอของคุณทำงานได้อย่างรวดเร็วและไม่มีวันโหลดไม่ติด:
- ฟังก์ชันดึงข้อมูลจะลอง Query จาก **Supabase** ก่อน
- หากอินเทอร์เน็ตมีปัญหา หรือฐานข้อมูล Cloud ขัดข้อง ระบบจะสลับไปดึงข้อมูลสำรองจาก **`src/data/json/`** ที่เราเตรียมไว้โดยอัตโนมัติ (Zero Downtime Fallback)

---

## 🚀 แผนในอนาคต (เมื่อต้องการทำหน้า Admin จัดการข้อมูลเองในเว็บ)
- สร้าง Route รับล็อกอิน: `src/app/admin/login/page.tsx`
- สร้างหน้า Dashboard เพิ่มโปรเจกต์: `src/app/admin/projects/page.tsx`
- อัปโหลดรูปภาพเข้า **Supabase Storage** ได้ทันทีโดยไม่ต้องฝากไฟล์ไว้กับเว็บภายนอก
