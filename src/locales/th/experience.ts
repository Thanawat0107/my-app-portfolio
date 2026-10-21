import { ExperienceSectionTranslations } from '../types';
import { ExperienceItem } from '@/types/portfolio.types';
import experienceThJson from '@/data/json/th/experience.json';

export const experienceDataTh: ExperienceItem[] = experienceThJson as ExperienceItem[];

export const experienceTh: ExperienceSectionTranslations = {
  badge: 'ประวัติและผลงานวิชาการ',
  title: 'ประวัติและประสบการณ์การทำงาน',
  subtitle:
    'ประวัติการศึกษาด้านวิทยาการคอมพิวเตอร์, รางวัลชนะเลิศการแข่งขันทักษะวิชาการ, โอกาสการร่วมงาน และกิจกรรมเสริมสร้างภาวะผู้นำ',
  evidenceLabel: 'ภาพประกอบหลักฐาน / เกียรติบัตร / เอกสาร',
  items: experienceDataTh,
};
