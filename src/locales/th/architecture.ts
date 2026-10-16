import { ArchitectureSectionTranslations } from '../types';
import { ArchitecturePillar } from '@/types/portfolio.types';

const architecturePillarsDataTh: ArchitecturePillar[] = [
  {
    id: 'clean-backend',
    title: 'การออกแบบ Backend แบบแยกเลเยอร์ (Clean Backend)',
    subtitle: 'Business Logic ที่ดูแลรักษาง่าย',
    description:
      'แยกส่วนรับส่งข้อมูล HTTP (Controllers), กฎเกณฑ์ทางธุรกิจ (Services) และการเข้าถึงฐานข้อมูล (Repositories) ออกจากกันอย่างเป็นระเบียบ ทำให้โค้ดอ่านง่าย ทดสอบสะดวก และต่อขยายได้รวดเร็ว',
    tools: ['ASP.NET Core Web API', 'Dependency Injection', 'DTO Pattern', 'Global Error Handling']
  },
  {
    id: 'database-integrity',
    title: 'การออกแบบฐานข้อมูลเชิงสัมพันธ์และปรับแต่งประสิทธิภาพ',
    subtitle: 'คุณสมบัติ ACID และการจูนคิวรี',
    description:
      'ออกแบบสกีมาแบบ Normalized บน SQL Server มี Foreign Key, Indexing และ Transaction ที่รัดกุม เพื่อรับประกันความถูกต้องแม่นยำของข้อมูลทางบัญชีและการตัดสต็อก',
    tools: ['SQL Server', 'ER-Diagram Modeling', 'Index Tuning', 'ACID Transactions']
  },
  {
    id: 'frontend-architecture',
    title: 'Frontend แบบโมดูลาร์และปลอดภัยด้วย Type-Safety',
    subtitle: 'UI และ State ที่คาดเดาได้แม่นยำ',
    description:
      'จัดโครงสร้าง React และ Next.js ให้เป็นคอมโพเนนต์ย่อยที่มีหน้าที่เดียวอย่างชัดเจน (Single Responsibility) ควบคุมด้วย TypeScript และ Redux Toolkit',
    tools: ['React / Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS']
  },
  {
    id: 'production-deployment',
    title: 'การนำระบบขึ้นใช้งานจริง (Production Deployment)',
    subtitle: 'ความพร้อมด้านเซิร์ฟเวอร์และการดำเนินงาน',
    description:
      'เตรียมความพร้อมบน Windows VPS ด้วย IIS Reverse Proxy, ติดตั้งใบรับรอง SSL/HTTPS, จัดการค่า Secrets ผ่านสภาพแวดล้อมเซิร์ฟเวอร์ และตั้งค่า Docker Container',
    tools: ['Windows Server / IIS', 'Docker', 'JWT / RBAC', 'HTTPS / SSL']
  }
];

export const architectureTh: ArchitectureSectionTranslations = {
  badge: 'แนวคิดการออกแบบระบบ',
  title: 'หลักการออกแบบและพัฒนาซอฟต์แวร์ของผม',
  subtitle:
    'ให้ความสำคัญกับการแยกหน้าที่ของโค้ดอย่างเป็นระบบ ความถูกต้องสมบูรณ์ของฐานข้อมูล และความเสถียรในการทำงานจริงที่มากกว่าแค่ระบบ CRUD พื้นฐาน',
  items: architecturePillarsDataTh,
};
