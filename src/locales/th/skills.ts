import { SkillsSectionTranslations } from '../types';
import { SkillCategory } from '@/types/portfolio.types';
import skillsThJson from '@/data/json/th/skills.json';

export const skillsDataTh: SkillCategory[] = skillsThJson as SkillCategory[];

export const skillsTh: SkillsSectionTranslations = {
  badge: 'ความสามารถทางเทคนิค',
  title: 'ชุดเทคโนโลยีและเครื่องมือทางวิศวกรรม',
  subtitle: 'จัดกลุ่มตามหมวดหมู่การใช้งาน — เครื่องมือและภาษาโปรแกรมที่ประยุกต์ใช้จริงในโปรเจกต์',
  items: skillsDataTh,
};
