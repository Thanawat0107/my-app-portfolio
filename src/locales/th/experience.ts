import { ExperienceSectionTranslations } from '../types';
import { ExperienceItem } from '@/types/portfolio.types';

const experienceDataTh: ExperienceItem[] = [
  {
    id: 'exp-fullstack-dev',
    period: '2568 - ปัจจุบัน (2025 - Present)',
    role: 'Full-Stack Software Developer (Project-Based)',
    organization: 'ระบบจริงสำหรับผู้ประกอบการ & ระบบงานทางวิชาการ',
    type: 'work',
    highlights: [
      'ออกแบบ พัฒนา และ Deploy เว็บแอปพลิเคชันจัดการร้านอาหารและจุดขาย (POS) แบบครบวงจรด้วย ASP.NET Core, React, TypeScript และ SQL Server',
      'ดูแลวงจรชีวิตการพัฒนาซอฟต์แวร์เต็มรูปแบบ ตั้งแต่การวิเคราะห์ Requirement, ออกแบบ ER-Diagram ไปจนถึงการขึ้นระบบ Production บน Windows VPS (IIS)',
      'เขียนบทความวิจัยนำเสนอสถาปัตยกรรมระบบและประสิทธิภาพในการดำเนินงานจริง ซึ่งได้รับการตีพิมพ์ในวารสารวิชาการ'
    ],
    technologies: ['C#', 'ASP.NET Core', 'React', 'TypeScript', 'Redux Toolkit', 'SQL Server', 'IIS']
  },
  {
    id: 'exp-computer-science',
    period: '2565 - 2569 (2022 - 2026)',
    role: 'วิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์',
    organization: 'มหาวิทยาลัยราชภัฏกาญจนบุรี',
    type: 'education',
    highlights: [
      'เน้นศึกษาด้านวิศวกรรมซอฟต์แวร์ (Software Engineering), ระบบจัดการฐานข้อมูลเชิงสัมพันธ์, การเขียนโปรแกรมเชิงวัตถุ (OOP) และการวิเคราะห์ออกแบบระบบ',
      'ทำโปรเจกต์วิจัยจบการศึกษาและจัดทำบทความวิจัยระดับปริญญาตรีเพื่อตีพิมพ์ในวารสารวิชาการ'
    ],
    technologies: ['Computer Science', 'Software Engineering', 'Database Systems', 'OOP']
  }
];

export const experienceTh: ExperienceSectionTranslations = {
  badge: 'ประวัติและผลงานสำคัญ',
  title: 'ประสบการณ์ทำงาน, ผลงานวิจัย และประวัติการศึกษา',
  subtitle:
    'ผลงานส่งมอบระบบวิศวกรรมซอฟต์แวร์ การตีพิมพ์บทความวิจัยทางวิชาการ และพื้นฐานความรู้ด้านวิทยาการคอมพิวเตอร์',
  items: experienceDataTh,
};
