import { ArchitectureSectionTranslations } from '../types';
import { ArchitecturePillar } from '@/types/portfolio.types';
import architectureThJson from '@/data/json/th/architecture.json';

export const architecturePillarsDataTh: ArchitecturePillar[] = architectureThJson as ArchitecturePillar[];

export const architectureTh: ArchitectureSectionTranslations = {
  badge: 'สถาปัตยกรรมและมาตรฐานวิศวกรรม',
  title: 'สถาปัตยกรรมระบบและมาตรฐานการออกแบบโค้ด',
  subtitle:
    'หลักการออกแบบโครงสร้าง Clean Architecture 4 เลเยอร์, การควบคุมความถูกต้องของธุรกรรมฐานข้อมูล (ACID), และงานประมวลผลเบื้องหลังอัตโนมัติ',
  viewCodeLabel: 'ดูตัวอย่างโค้ด Production',
  hideCodeLabel: 'ซ่อนโค้ดตัวอย่าง',
  items: architecturePillarsDataTh,
};
