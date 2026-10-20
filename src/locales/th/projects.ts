import { ProjectsSectionTranslations } from '../types';
import { ProjectItem } from '@/types/portfolio.types';
import projectsThJson from '@/data/json/th/projects.json';

export const projectsDataTh: ProjectItem[] = projectsThJson as ProjectItem[];

export const projectsTh: ProjectsSectionTranslations = {
  badge: 'กรณีศึกษาเชิงวิศวกรรมซอฟต์แวร์',
  title: 'ผลงานระบบระดับ Production ที่โดดเด่น',
  subtitle:
    'ระบบงานจริงที่พัฒนาด้วยหลักการแยกส่วนหน้าที่อย่างเป็นระเบียบ ความถูกต้องของข้อมูลในฐานข้อมูล และการนำขึ้นใช้งานจริงบนเซิร์ฟเวอร์',
  viewAllBtn: 'ดูผลงานทั้งหมด',
  catalogBadge: 'รวมผลงานทั้งหมด',
  catalogTitle: 'ผลงานและกรณีศึกษาเชิงวิศวกรรมทั้งหมด',
  catalogSubtitle:
    'เจาะลึกรายละเอียดโจทย์ทางธุรกิจ การตัดสินใจเชิงสถาปัตยกรรมระบบ และผลลัพธ์จากการใช้งานจริง',
  problemLabel: 'ปัญหาและโจทย์ทางธุรกิจ (Business Problem)',
  architectureLabel: 'สถาปัตยกรรมระบบและการนำไปปฏิบัติ (System Architecture)',
  outcomeLabel: 'ผลลัพธ์และผลกระทบทางธุรกิจ (Key Outcome & Impact)',
  metricsLabel: 'ตัวชี้วัดประสิทธิภาพเชิงวิศวกรรม (Engineering & Performance Metrics)',
  credentialsLabel: 'ข้อมูลเข้าสู่ระบบสำหรับทดลองใช้งาน',
  specsLabels: {
    systemType: 'รูปแบบระบบ',
    role: 'หน้าที่',
    targetUsers: 'กลุ่มผู้ใช้',
    highlight: 'จุดเด่น',
  },
  deepDiveLabels: {
    overviewTitle: 'ภาพรวมระบบและบริบททางธุรกิจ',
    architectureTitle: 'การตัดสินใจเชิงสถาปัตยกรรมหลัก',
    databaseTitle: 'โครงสร้างฐานข้อมูลและความถูกต้องของข้อมูล',
    securityTitle: 'มาตรฐานความปลอดภัยและการนำระบบขึ้นใช้งาน',
    envStatus: 'สถานะสภาพแวดล้อม:',
    envReady: 'พร้อมใช้งานจริง (Production Ready)',
    sourceCode: 'ซอร์สโค้ด:',
    quickLinks: 'ลิงก์ด่วน',
  },
  items: projectsDataTh,
};
