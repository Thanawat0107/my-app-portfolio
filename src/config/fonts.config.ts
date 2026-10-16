import { Inter, Noto_Sans_Thai, JetBrains_Mono } from 'next/font/google';

/**
 * ==============================================================================
 * Web Typography Configuration
 * ตามข้อกำหนดการเลือกชุดฟอนต์แยกตามหน้าที่:
 * 1. เนื้อหาทั่วไปและหัวข้อ (ไทย - ENG): Inter + Noto Sans Thai (Modern Sans-serif Loopless)
 * 2. Tech Stack Badges & แท็กเทคโนโลยี: JetBrains Mono (text-xs font-mono)
 * 3. หน้าต่างแสดงโค้ดและ Terminal: JetBrains Mono (font-mono)
 * ==============================================================================
 */

// 1.1 ฟอนต์ภาษาอังกฤษสำหรับเนื้อหาทั่วไปและหัวข้อ (Navbar, Hero, Case Studies)
export const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// 1.2 ฟอนต์ภาษาไทยสำหรับเนื้อหาทั่วไปและหัวข้อ (อ่านง่าย สบายตา สัดส่วนกลมกลืนกับ Inter)
export const fontNotoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-sans-thai',
  display: 'swap',
});

// 2 & 3. ฟอนต์ Monospace สำหรับ Badges แท็กเทคโนโลยี, กล่อง Terminal และบล็อกโค้ด
export const fontJetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

/**
 * รวม CSS Variables ทั้งหมดเข้าด้วยกัน เพื่อนำไปใส่ที่ <html> ใน RootLayout
 */
export const fontVariables = `${fontInter.variable} ${fontNotoSansThai.variable} ${fontJetBrainsMono.variable}`;
