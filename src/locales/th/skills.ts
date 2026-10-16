import { SkillsSectionTranslations } from '../types';
import { SkillCategory } from '@/types/portfolio.types';

const skillsDataTh: SkillCategory[] = [
  {
    id: 'backend',
    categoryName: 'การพัฒนาส่วนหลังบ้าน (Backend Development)',
    description: 'การสร้าง API ที่ขยายขนาดได้, ชั้นประมวลผล Business Logic และระบบยืนยันตัวตน',
    skills: ['C#', 'ASP.NET Core Web API', 'Entity Framework Core', 'Go (Golang)', 'RESTful API Design', 'JWT / RBAC Auth']
  },
  {
    id: 'frontend',
    categoryName: 'การพัฒนาส่วนหน้าบ้าน (Frontend Development)',
    description: 'การสร้างเว็บอินเตอร์เฟซที่ตอบสนองทุกอุปกรณ์ (Responsive), เป็นโมดูล และปลอดภัยด้วย Type-Safe',
    skills: ['React', 'Next.js (App Router)', 'TypeScript', 'JavaScript (ES6+)', 'Redux Toolkit', 'Tailwind CSS']
  },
  {
    id: 'database',
    categoryName: 'ฐานข้อมูลและระบบข้อมูล (Database & Data Systems)',
    description: 'การออกแบบสกีมาเชิงสัมพันธ์, การปรับแต่งคิวรีให้รวดเร็ว และความถูกต้องของข้อมูลตามหลัก Transaction',
    skills: ['Microsoft SQL Server', 'PostgreSQL', 'T-SQL / Stored Procedures', 'Database Indexing', 'ER Modeling']
  },
  {
    id: 'devops-tools',
    categoryName: 'การนำขึ้นเซิร์ฟเวอร์และเครื่องมือสำหรับนักพัฒนา (Deployment & Tools)',
    description: 'การควบคุมเวอร์ชันโค้ด, การตั้งค่าเซิร์ฟเวอร์ และเครื่องมือทดสอบ API',
    skills: ['Git & GitHub', 'Windows VPS & IIS', 'Docker', 'Postman / Swagger', 'Visual Studio / VS Code', 'Linux Basics']
  }
];

export const skillsTh: SkillsSectionTranslations = {
  badge: 'ความสามารถทางเทคนิค',
  title: 'ชุดเทคโนโลยีและเครื่องมือทางวิศวกรรม',
  subtitle: 'จัดกลุ่มตามหมวดหมู่การใช้งาน — เครื่องมือและภาษาโปรแกรมที่ประยุกต์ใช้จริงในโปรเจกต์',
  items: skillsDataTh,
};
