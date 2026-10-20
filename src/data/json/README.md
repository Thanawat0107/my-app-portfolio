# Portfolio Content Data (JSON Layer)

โฟลเดอร์นี้รวบรวมข้อมูลเนื้อหาทั้งหมดของพอร์ตโฟลิโอในรูปแบบ **Pure JSON** แยกหมวดหมู่และภาษาไว้อย่างเป็นระเบียบ เพื่อให้สะดวกต่อการปรับปรุง แก้ไข เพิ่มเติมผลงาน หรือเชื่อมต่อไปยัง External CMS / Database ในอนาคต โดยไม่ต้องแตะต้องโค้ด TypeScript

---

## โครงสร้างหมวดหมู่ข้อมูล (Directory Structure)

```
src/data/json/
├── th/                         # ข้อมูลภาษาไทยทั้งหมด
│   ├── projects.json           # รายละเอียดผลงานทั้ง 3 โปรเจกต์ (Specs, Problem, Architecture, Metrics, Flow Steps)
│   ├── skills.json             # ทักษะและเครื่องมือทางวิศวกรรม 4 หมวดหมู่
│   ├── experience.json         # ประวัติการศึกษา, รางวัลชนะเลิศ และกิจกรรมสร้างสรรค์
│   ├── architecture.json       # เสาหลักสถาปัตยกรรมทั้ง 4 ด้าน และตัวอย่างโค้ด Production
│   └── site.json               # ข้อมูลโปรไฟล์ส่วนตัว (ชื่อ, ช่องทางติดต่อ, ลิงก์ Resume, โซเชียล)
│
├── en/                         # ข้อมูลภาษาอังกฤษทั้งหมด (Full English Mode)
│   ├── projects.json
│   ├── skills.json
│   ├── experience.json
│   ├── architecture.json
│   └── site.json
│
└── README.md                   # เอกสารอธิบายนี้
```

---

## วิธีการปรับปรุงข้อมูล (How to Update)

### 1. เพิ่ม/แก้ไข ผลงานโปรเจกต์ (`projects.json`)
เพียงเปิดไฟล์ [projects.json](file:///c:/disk_c/Dev/portfolio-dev/my-app-portfolio/src/data/json/th/projects.json) แล้วแก้ไขข้อความ หรือก๊อบปี้ Object เพื่อเพิ่มโปรเจกต์ใหม่ได้ทันที

### 2. แก้ไขข้อมูลส่วนตัว เช่น เบอร์โทร / Email / Resume (`site.json`)
เปิดไฟล์ [site.json](file:///c:/disk_c/Dev/portfolio-dev/my-app-portfolio/src/data/json/th/site.json) แก้ไขค่า `email`, `phone`, `resumeUrl`, `socials` ได้โดยตรง

### 3. เพิ่มทักษะภาษาใหม่ (`skills.json`)
เปิดไฟล์ [skills.json](file:///c:/disk_c/Dev/portfolio-dev/my-app-portfolio/src/data/json/th/skills.json) เพิ่มชื่อภาษาหรือเครื่องมือในอาร์เรย์ `skills` ระบบจะนำ Vector Brand Icon ของภาษานั้นมาแสดงผลให้ทันทีอัตโนมัติ
