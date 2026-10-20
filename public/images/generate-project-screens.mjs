import fs from 'fs';
import path from 'path';

const baseDir = 'C:/disk_c/Dev/portfolio-dev/my-app-portfolio/public/images/projects';

function createScreenSvg({ title, subtitle, badge, screenType, accentColor, bgColor1, bgColor2 }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgColor1}" />
      <stop offset="100%" stop-color="${bgColor2}" />
    </linearGradient>
    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#ffffff" stroke-width="0.5" stroke-opacity="0.05" />
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="960" height="540" fill="url(#bgGrad)" />
  <rect width="960" height="540" fill="url(#grid)" />

  <!-- App Window Frame -->
  <rect x="24" y="24" width="912" height="492" rx="16" fill="#0f172a" fill-opacity="0.9" stroke="#334155" stroke-width="1.5" />
  
  <!-- Window Topbar -->
  <rect x="24" y="24" width="912" height="48" rx="16" fill="#1e293b" />
  <rect x="24" y="56" width="912" height="16" fill="#1e293b" />
  <line x1="24" y1="72" x2="936" y2="72" stroke="#334155" stroke-width="1" />

  <!-- Window Dots -->
  <circle cx="56" cy="48" r="6" fill="#ef4444" />
  <circle cx="76" cy="48" r="6" fill="#f59e0b" />
  <circle cx="96" cy="48" r="6" fill="#10b981" />

  <!-- Topbar Search/Address Bar -->
  <rect x="130" y="36" width="360" height="24" rx="6" fill="#0f172a" stroke="#334155" stroke-width="1" />
  <text x="145" y="52" fill="#94a3b8" font-family="monospace" font-size="11">https://app.demo/${screenType.toLowerCase().replace(/\\s+/g, '-')}</text>

  <!-- Window Screen Type Badge -->
  <rect x="760" y="36" width="150" height="24" rx="6" fill="${accentColor}" fill-opacity="0.2" stroke="${accentColor}" stroke-opacity="0.5" stroke-width="1" />
  <text x="835" y="52" fill="${accentColor}" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">${screenType}</text>

  <!-- Screen Content Graphic Elements -->
  <!-- Left Sidebar Mock -->
  <rect x="48" y="96" width="180" height="396" rx="10" fill="#1e293b" fill-opacity="0.6" stroke="#334155" stroke-width="1" />
  <rect x="68" y="120" width="140" height="18" rx="4" fill="${accentColor}" fill-opacity="0.4" />
  <rect x="68" y="156" width="110" height="12" rx="4" fill="#475569" fill-opacity="0.6" />
  <rect x="68" y="180" width="130" height="12" rx="4" fill="#475569" fill-opacity="0.6" />
  <rect x="68" y="204" width="90" height="12" rx="4" fill="#475569" fill-opacity="0.6" />
  <rect x="68" y="228" width="120" height="12" rx="4" fill="#475569" fill-opacity="0.6" />

  <!-- Main Screen Showcase Area -->
  <rect x="252" y="96" width="660" height="396" rx="12" fill="#020617" fill-opacity="0.8" stroke="#334155" stroke-width="1" />

  <!-- Center Presentation -->
  <g transform="translate(582, 250)">
    <circle r="44" fill="${accentColor}" fill-opacity="0.12" stroke="${accentColor}" stroke-opacity="0.4" stroke-width="2" />
    <path d="M -12 -12 L 12 -12 L 12 12 L -12 12 Z" fill="none" stroke="${accentColor}" stroke-width="3" rx="2" />
    <circle cx="0" cy="0" r="5" fill="${accentColor}" />
  </g>

  <text x="582" y="330" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="bold" text-anchor="middle">${title}</text>
  <text x="582" y="360" fill="#94a3b8" font-family="system-ui, -apple-system, sans-serif" font-size="14" text-anchor="middle">${subtitle}</text>

  <!-- Replace Image Notice Badge -->
  <g transform="translate(582, 430)">
    <rect x="-180" y="-16" width="360" height="32" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1" />
    <text x="0" y="5" fill="#38bdf8" font-family="monospace" font-size="12" text-anchor="middle">${badge}</text>
  </g>
</svg>`;
}

const screens = [
  // 1. Champ Noodle POS
  {
    filePath: path.join(baseDir, 'champ-noodle-pos-system', 'screen-1-customer.svg'),
    data: {
      screenType: 'CUSTOMER MENU',
      title: 'หน้าจอสั่งอาหาร & ปรับแต่งเมนูของลูกค้า',
      subtitle: 'เลือกเมนู ปรับแต่งระดับความเผ็ด และสั่งอาหารผ่านมือถือ/แท็บเล็ต',
      badge: '[วางภาพหน้าจอลูกค้าสั่งอาหารแทนที่ไฟล์นี้]',
      accentColor: '#10b981',
      bgColor1: '#064e3b',
      bgColor2: '#022c22'
    }
  },
  {
    filePath: path.join(baseDir, 'champ-noodle-pos-system', 'screen-2-kitchen.svg'),
    data: {
      screenType: 'KITCHEN POS REALTIME',
      title: 'หน้าจอห้องครัวแสดงผลออเดอร์ทันที (SignalR)',
      subtitle: 'ออเดอร์เด้งเข้าครัวแบบ Real-time พร้อมปุ่มอัปเดตสถานะปรุงเสร็จ',
      badge: '[วางภาพหน้าจอห้องครัวแทนที่ไฟล์นี้]',
      accentColor: '#f59e0b',
      bgColor1: '#451a03',
      bgColor2: '#1e1b4b'
    }
  },
  {
    filePath: path.join(baseDir, 'champ-noodle-pos-system', 'screen-3-dashboard.svg'),
    data: {
      screenType: 'ADMIN DASHBOARD',
      title: 'กระดานวิเคราะห์ข้อมูลยอดขายและสถิติสินค้า',
      subtitle: 'กราฟสรุปยอดขายรายวัน/เดือน และรายการเมนูยอดนิยมสำหรับเจ้าของร้าน',
      badge: '[วางภาพหน้าจอแดชบอร์ดสรุปยอดขายแทนที่ไฟล์นี้]',
      accentColor: '#06b6d4',
      bgColor1: '#083344',
      bgColor2: '#0f172a'
    }
  },

  // 2. Used Car Management System
  {
    filePath: path.join(baseDir, 'used-car-management-system', 'screen-1-catalog.svg'),
    data: {
      screenType: 'SMART SEARCH & CATALOG',
      title: 'ระบบค้นหาและเปรียบเทียบรถยนต์มือสอง',
      subtitle: 'กรองตามประเภท รุ่น ราคา และคำนวณค่างวดผ่อนชำระอัตโนมัติ',
      badge: '[วางภาพหน้ารายการค้นหารถยนต์แทนที่ไฟล์นี้]',
      accentColor: '#3b82f6',
      bgColor1: '#172554',
      bgColor2: '#0f172a'
    }
  },
  {
    filePath: path.join(baseDir, 'used-car-management-system', 'screen-2-booking.svg'),
    data: {
      screenType: 'STRIPE BOOKING & DEPOSIT',
      title: 'ระบบการจองรถยนต์และมัดจำผ่าน Stripe',
      subtitle: 'เชื่อมต่อ Payment Gateway มัดจำ พร้อมระบบนับถอยหลังยกเลิกอัตโนมัติ',
      badge: '[วางภาพหน้าจอการจองและตัดเงินแทนที่ไฟล์นี้]',
      accentColor: '#8b5cf6',
      bgColor1: '#2e1065',
      bgColor2: '#0f172a'
    }
  },
  {
    filePath: path.join(baseDir, 'used-car-management-system', 'screen-3-admin.svg'),
    data: {
      screenType: 'ADMIN KYC & INVENTORY',
      title: 'ระบบแดชบอร์ดแอดมิน ยืนยันตัวตนผู้ขาย (KYC)',
      subtitle: 'อนุมัติข้อมูลรถ ตรวจประวัติการซ่อมบำรุง และจัดการสต็อกรถในชุมชน',
      badge: '[วางภาพหน้าจอแอดมินอนุมัติรถแทนที่ไฟล์นี้]',
      accentColor: '#10b981',
      bgColor1: '#064e3b',
      bgColor2: '#0f172a'
    }
  },

  // 3. SBFblazor E-Commerce
  {
    filePath: path.join(baseDir, 'sbf-blazor-ecommerce', 'screen-1-store.svg'),
    data: {
      screenType: 'BLAZOR WASM STOREFRONT',
      title: 'หน้าร้านค้าออนไลน์และตะกร้าสินค้า (Blazor WASM)',
      subtitle: 'เลือกซื้อสินค้า ตะกร้าสินค้าในหน้าเดียว รวดเร็วและตอบสนองทันที',
      badge: '[วางภาพหน้าร้านค้า Blazor แทนที่ไฟล์นี้]',
      accentColor: '#ec4899',
      bgColor1: '#500724',
      bgColor2: '#0f172a'
    }
  },
  {
    filePath: path.join(baseDir, 'sbf-blazor-ecommerce', 'screen-2-checkout.svg'),
    data: {
      screenType: 'CHECKOUT & STOCK LOCK',
      title: 'ระบบชำระเงิน Stripe & ล็อกสต็อกสินค้า Real-time',
      subtitle: 'ป้องกันการซื้อเกินสต็อกด้วย Pessimistic Concurrency และ Transaction',
      badge: '[วางภาพหน้าชำระเงินและตัดสต็อกแทนที่ไฟล์นี้]',
      accentColor: '#f59e0b',
      bgColor1: '#451a03',
      bgColor2: '#0f172a'
    }
  },
  {
    filePath: path.join(baseDir, 'sbf-blazor-ecommerce', 'screen-3-reports.svg'),
    data: {
      screenType: 'REPORTS & EXCEL/PDF EXPORT',
      title: 'รายงานการขาย & ส่งออกไฟล์ PDF และ Excel อัตโนมัติ',
      subtitle: 'แดชบอร์ดแอดมิน Blazor Server เชื่อมต่อ ClosedXML และ iText7',
      badge: '[วางภาพหน้าจอรายงานการขายแทนที่ไฟล์นี้]',
      accentColor: '#38bdf8',
      bgColor1: '#082f49',
      bgColor2: '#0f172a'
    }
  }
];

screens.forEach(s => {
  const content = createScreenSvg(s.data);
  fs.writeFileSync(s.filePath, content, 'utf8');
  console.log('Created project screenshot:', s.filePath);
});
