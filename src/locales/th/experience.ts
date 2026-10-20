import { ExperienceSectionTranslations } from '../types';
import { ExperienceItem } from '@/types/portfolio.types';
import experienceThJson from '@/data/json/th/experience.json';

export const experienceDataTh: ExperienceItem[] = experienceThJson as ExperienceItem[];

export const experienceTh: ExperienceSectionTranslations = {
  badge: 'ประวัติและผลงานสำคัญ',
  title: 'ประวัติการศึกษา, รางวัลชนะเลิศ และกิจกรรมสร้างสรรค์',
  subtitle:
    'รากฐานความรู้ทางวิทยาการคอมพิวเตอร์ รางวัลเกียรติยศจากการแข่งขันระดับภูมิภาค และประสบการณ์การเป็นผู้นำกิจกรรม',
  evidenceLabel: 'ภาพประกอบหลักฐาน / เกียรติบัตร / เอกสาร',
  items: experienceDataTh,
};
