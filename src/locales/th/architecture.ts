import { ArchitectureSectionTranslations } from '../types';
import { ArchitecturePillar } from '@/types/portfolio.types';
import architectureThJson from '@/data/json/th/architecture.json';

export const architecturePillarsDataTh: ArchitecturePillar[] = architectureThJson as ArchitecturePillar[];

export const architectureTh: ArchitectureSectionTranslations = {
  badge: 'แนวคิดการออกแบบระบบ',
  title: 'หลักการออกแบบและพัฒนาซอฟต์แวร์ของผม',
  subtitle:
    'ให้ความสำคัญกับการแยกหน้าที่ของโค้ดอย่างเป็นระบบ ความถูกต้องสมบูรณ์ของฐานข้อมูล และความเสถียรในการทำงานจริงที่มากกว่าแค่ระบบ CRUD พื้นฐาน',
  viewCodeLabel: 'ดูตัวอย่างโค้ด Production',
  hideCodeLabel: 'ซ่อนโค้ดตัวอย่าง',
  items: architecturePillarsDataTh,
};
