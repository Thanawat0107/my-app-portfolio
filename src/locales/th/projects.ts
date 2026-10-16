import { ProjectsSectionTranslations } from '../types';
import { ProjectItem } from '@/types/portfolio.types';

const projectsDataTh: ProjectItem[] = [
  {
    slug: 'champ-noodle-pos-system',
    title: 'ระบบเว็บแอปพลิเคชันบริหารจัดการร้านอาหารและจุดขาย (POS)',
    category: 'ระบบงาน Full-Stack ระดับ Production',
    featured: true,
    thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    problemStatement:
      'การจดออเดอร์ด้วยกระดาษและการตรวจนับสต็อกแบบเดิม ทำให้เกิดคอขวดในการคิดเงินช่วงเวลาเร่งด่วน และมีความคลาดเคลื่อนในการกระทบยอดรายได้ประจำวัน',
    architectureHighlights: [
      'ออกแบบ Backend API แบบแยกส่วน (Decoupled RESTful API) ด้วย ASP.NET Core แยก Controllers, Services และ Repositories ชัดเจน',
      'พัฒนาหน้าบ้านระบบ POS ด้วย React, TypeScript และ Redux Toolkit เพื่อซิงค์สถานะตะกร้าและคำสั่งซื้อแบบ Reactive เรียลไทม์',
      'ออกแบบฐานข้อมูลเชิงสัมพันธ์ SQL Server แบบ Normalized พร้อม Transaction ระดับ ACID เพื่อตัดสต็อกและบันทึกยอดขายพร้อมกันอย่างถูกต้อง',
      'จัดตั้งระบบ Production บน Windows VPS โดยใช้ IIS Reverse Proxy, ติดตั้ง SSL/HTTPS และตั้งเวลา Backup ฐานข้อมูลอัตโนมัติ'
    ],
    businessImpact:
      'ขจัดความผิดพลาดในการคำนวณบิลด้วยมือ ลดระยะเวลาการเคลียร์โต๊ะ และช่วยให้ตรวจสอบยอดขายและสต็อกคงเหลือได้แบบเรียลไทม์',
    techStack: ['C#', 'ASP.NET Core', 'React', 'TypeScript', 'Redux Toolkit', 'SQL Server', 'IIS / Windows VPS'],
    liveDemoUrl: 'https://demo-pos.example.com',
    githubUrl: 'https://github.com/yourusername/restaurant-pos-management',
    demoCredentials: {
      role: 'บัญชีทดสอบระบบ (Admin / Cashier)',
      username: 'demo_admin',
      password: 'Password123!'
    },
    deepDive: {
      overview:
        'แพลตฟอร์มบริหารจัดการร้านอาหารและจุดขายแบบครบวงจร ออกแบบมาเพื่อรองรับการสั่งอาหารตามโต๊ะแบบเรียลไทม์, คิวในครัว, การตัดสต็อกสินค้า และรายงานทางบัญชีการเงิน',
      databaseDesign: [
        'ออกแบบสกีมาแบบ Normalized แยกชัดเจนระหว่าง Orders, OrderDetails, MenuItems, Categories, InventoryTransactions และ Users',
        'สร้าง Composite Index บนคอลัมน์ OrderDate และ Status เพื่อเร่งความเร็วการสรุปยอดรายได้ประจำวันและประจำเดือน',
        'ควบคุมกระบวนการชำระเงินด้วย Database Transaction เพื่อให้แน่ใจว่าสต็อกสินค้าและใบเสร็จตรงกัน 100%'
      ],
      securityPractices: [
        'ใช้ระบบยืนยันตัวตนด้วย JWT พร้อมการกำหนดสิทธิ์ตามบทบาท (RBAC) แยกสิทธิ์ผู้จัดการและพนักงานออกจากกัน',
        'กำหนดพารามิเตอร์ของ Query ทั้งหมดผ่าน Entity Framework Core ป้องกันช่องโหว่ SQL Injection',
        'แยก Connection String และ Secrets ออกจากซอร์สโค้ด โดยจัดการผ่าน Server Environment Variables'
      ]
    }
  },
  {
    slug: 'go-react-inventory-service',
    title: 'ระบบ API จัดการสต็อกสินค้าและคำสั่งซื้อความเร็วสูง (High-Concurrency)',
    category: 'วิศวกรรมระบบ Backend & API',
    featured: true,
    thumbnailUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    problemStatement:
      'การอัปเดตสต็อกที่มีความถี่สูงต้องการ Endpoint ที่ตอบสนองรวดเร็วเป็นพิเศษ และมีการควบคุมการทำงานพร้อมกัน (Concurrency Control) ที่เข้มงวดเพื่อป้องกันสินค้าถูกขายเกินจำนวน (Race Condition)',
    architectureHighlights: [
      'พัฒนา RESTful API น้ำหนักเบาด้วยภาษา Go (Golang) เชื่อมต่อกับคอนโซลควบคุมของแอดมินที่สร้างด้วย React + TypeScript',
      'วางโครงสร้าง Middleware สำหรับตรวจสอบ JWT, บันทึก Request Logging และจัดรูปแบบ Error Response ให้เป็นมาตรฐานเดียวกัน',
      'แปลงสภาพแวดล้อมระบบและฐานข้อมูลให้ทำงานในรูปแบบ Container ด้วย Docker Compose เพื่อให้ติดตั้งทดสอบได้ง่ายด้วยคำสั่งเดียว'
    ],
    businessImpact:
      'ทำเวลาเฉลี่ยในการตอบสนองของ API ต่ำกว่า 30ms ภายใต้การทดสอบโหลดพร้อมกัน และไม่มีปัญหาข้อผิดพลาดด้านสต็อกจากการประมวลผลพร้อมกัน',
    techStack: ['Go (Golang)', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'JWT Auth', 'Tailwind CSS'],
    liveDemoUrl: 'https://demo-inventory.example.com',
    githubUrl: 'https://github.com/yourusername/go-react-inventory',
    deepDive: {
      overview:
        'เซอร์วิสฝั่ง Backend ที่เน้นประสิทธิภาพการประมวลผลสูง เขียนด้วยภาษา Go ทำงานคู่กับแดชบอร์ด React สำหรับจัดการและจองสต็อกสินค้าแบบเรียลไทม์',
      databaseDesign: [
        'ประยุกต์ใช้ Row-level locking และ Optimistic concurrency control ในช่วงขั้นตอนการตัดยอดสต็อก',
        'ปรับแต่ง Database Connection Pool เพื่อรองรับคำขอใช้งานพร้อมกันจำนวนมากได้อย่างต่อเนื่อง'
      ],
      securityPractices: [
        'ระบบตรวจสอบสิทธิ์ไร้สถานะ (Stateless) ด้วย JWT พร้อม Access Token ที่มีอายุจำกัด',
        'ตั้งค่า CORS อย่างรัดกุม พร้อมทั้งตรวจสอบความถูกต้องของโครงสร้าง Payload ขาเข้าในทุก Endpoint'
      ]
    }
  }
];

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
  problemLabel: '1. ปัญหาและโจทย์ทางธุรกิจ (Business Problem)',
  architectureLabel: '2. สถาปัตยกรรมระบบและการนำไปปฏิบัติ (System Architecture)',
  outcomeLabel: '3. ผลลัพธ์และผลกระทบทางวิศวกรรม (Key Outcome)',
  credentialsLabel: 'ข้อมูลเข้าสู่ระบบสำหรับทดลองใช้งาน',
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
