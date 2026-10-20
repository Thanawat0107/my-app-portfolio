import { SkillsSectionTranslations } from '../types';
import { SkillCategory } from '@/types/portfolio.types';
import skillsThJson from '@/data/json/th/skills.json';

export const skillsDataTh: SkillCategory[] = skillsThJson as SkillCategory[];

export const skillsTh: SkillsSectionTranslations = {
  badge: 'ความเชี่ยวชาญทางเทคนิค',
  title: 'ทักษะทางเทคนิคและเครื่องมือพัฒนา (Technical Skills & Tools)',
  subtitle:
    'จำแนกตามโครงสร้างสายงานวิศวกรรมซอฟต์แวร์ ทั้งสถาปัตยกรรมหลังบ้าน, เทคโนโลยีหน้าบ้าน, ระบบจัดการฐานข้อมูล และเครื่องมือควบคุมคุณภาพโค้ด',
  items: skillsDataTh,
};
