import fs from 'fs';
import path from 'path';

const activitiesDir = 'C:/disk_c/Dev/portfolio-dev/my-app-portfolio/public/images/activities';

function createSvgPlaceholder({ title, subtitle, category, badge, iconColor, bgColor1, bgColor2, accentColor }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgColor1}" />
      <stop offset="100%" stop-color="${bgColor2}" />
    </linearGradient>
    <linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.8" />
      <stop offset="50%" stop-color="#ffffff" stop-opacity="0.3" />
      <stop offset="100%" stop-color="${accentColor}" stop-opacity="0.8" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" stroke-width="0.5" stroke-opacity="0.05" />
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="800" height="500" rx="16" fill="url(#bgGrad)" />
  <rect width="800" height="500" rx="16" fill="url(#grid)" />
  <rect x="12" y="12" width="776" height="476" rx="12" fill="none" stroke="url(#goldBorder)" stroke-width="2" stroke-dasharray="6,4" />

  <!-- Badge / Category -->
  <g transform="translate(40, 50)">
    <rect width="220" height="32" rx="16" fill="${accentColor}" fill-opacity="0.15" stroke="${accentColor}" stroke-opacity="0.4" stroke-width="1"/>
    <text x="110" y="21" fill="${accentColor}" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" letter-spacing="1.5">${category.toUpperCase()}</text>
  </g>

  <!-- Center Graphic Element -->
  <g transform="translate(400, 190)">
    <circle r="56" fill="${iconColor}" fill-opacity="0.12" stroke="${iconColor}" stroke-opacity="0.3" stroke-width="2" />
    <circle r="44" fill="${iconColor}" fill-opacity="0.2" />
    <path d="M -16 -8 L 0 -24 L 16 -8 L 10 16 L -10 16 Z" fill="${iconColor}" />
  </g>

  <!-- Content text -->
  <text x="400" y="300" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="bold" text-anchor="middle">${title}</text>
  <text x="400" y="335" fill="#94a3b8" font-family="system-ui, -apple-system, sans-serif" font-size="14" text-anchor="middle">${subtitle}</text>

  <!-- Bottom notice -->
  <g transform="translate(400, 420)">
    <rect x="-180" y="-18" width="360" height="36" rx="8" fill="#0f172a" fill-opacity="0.9" stroke="#334155" stroke-width="1" />
    <text x="0" y="5" fill="#38bdf8" font-family="monospace" font-size="12" text-anchor="middle">${badge}</text>
  </g>
</svg>`;
}

const items = [
  // 1. สโมสรนักศึกษา (2 ภาพ)
  {
    fileName: 'activity-student-council-1.svg',
    data: {
      category: 'Student Council #1',
      title: 'คณะกรรมการสโมสรนักศึกษา ประจำปีการศึกษา 2567',
      subtitle: 'คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยราชภัฏกาญจนบุรี',
      badge: '[วางภาพคณะกรรมการสโมสรนักศึกษา]',
      iconColor: '#8b5cf6',
      bgColor1: '#2e1065',
      bgColor2: '#0f172a',
      accentColor: '#a78bfa'
    }
  },
  {
    fileName: 'activity-student-council-2.svg',
    data: {
      category: 'Student Council #2',
      title: 'การประชุมและดำเนินโครงการกิจกรรมนักศึกษา',
      subtitle: 'ภาพการปฏิบัติหน้าที่และการจัดกิจกรรมสานสัมพันธ์',
      badge: '[วางภาพการจัดกิจกรรมสโมสรนักศึกษา]',
      iconColor: '#8b5cf6',
      bgColor1: '#1e1b4b',
      bgColor2: '#0f172a',
      accentColor: '#c084fc'
    }
  },

  // 2. RoV E-Sports Tournament (2 ภาพ)
  {
    fileName: 'activity-rov-esports-1.svg',
    data: {
      category: 'RoV E-Sports #1',
      title: 'ทีมงานฝ่ายจัดการแข่งขัน RoV E-Sports Tournament',
      subtitle: 'สาขาวิชาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยราชภัฏกาญจนบุรี',
      badge: '[วางภาพทีมงานฝ่ายจัดการแข่งขัน RoV]',
      iconColor: '#ec4899',
      bgColor1: '#500724',
      bgColor2: '#0f172a',
      accentColor: '#f472b6'
    }
  },
  {
    fileName: 'activity-rov-esports-2.svg',
    data: {
      category: 'RoV E-Sports #2',
      title: 'บรรยากาศการแข่งขันและการถ่ายทอดสด (Live Broadcast)',
      subtitle: 'ภาพการควบคุมระบบการแข่งขันและถ่ายทอดสดบนเวที',
      badge: '[วางภาพบรรยากาศการแข่งขันและ Live Stream]',
      iconColor: '#ec4899',
      bgColor1: '#4a044e',
      bgColor2: '#0f172a',
      accentColor: '#f43f5e'
    }
  },

  // 3. พี่เลี้ยงฝ่าย IT & ครูสมาธิ (4 ภาพ)
  {
    fileName: 'activity-meditation-cert.svg',
    data: {
      category: 'Meditation Teacher Cert',
      title: 'ใบประกาศนียบัตรสำเร็จหลักสูตรครูสมาธิ รุ่นที่ 52',
      subtitle: 'สถาบันพลังจิตตานุภาพ หลวงพ่อวิริยังค์ สิรินธโร',
      badge: '[วางภาพใบประกาศนียบัตรครูสมาธิ รุ่น 52]',
      iconColor: '#06b6d4',
      bgColor1: '#082f49',
      bgColor2: '#0f172a',
      accentColor: '#38bdf8'
    }
  },
  {
    fileName: 'activity-meditation-ceremony.svg',
    data: {
      category: 'Graduation Ceremony',
      title: 'ภาพถ่ายพิธีมอบประกาศนียบัตรและปัจฉิมนิเทศ รุ่น 52',
      subtitle: 'ความสำเร็จในการฝึกอบรมสมาธิและพัฒนาจิตใจ 6 เดือน',
      badge: '[วางภาพถ่ายพิธีปัจฉิมนิเทศ ครูสมาธิ รุ่น 52]',
      iconColor: '#06b6d4',
      bgColor1: '#0e7490',
      bgColor2: '#0f172a',
      accentColor: '#67e8f9'
    }
  },
  {
    fileName: 'activity-it-mentor-av.svg',
    data: {
      category: 'IT Mentor Role #1',
      title: 'ปฏิบัติหน้าที่พี่เลี้ยงฝ่าย IT ควบคุมโสตทัศนูปกรณ์ รุ่น 53',
      subtitle: 'ดูแลระบบเสียง ไมโครโฟน โปรเจกเตอร์ และคอมพิวเตอร์',
      badge: '[วางภาพการคุมระบบเสียงและคอมพิวเตอร์ รุ่น 53]',
      iconColor: '#10b981',
      bgColor1: '#064e3b',
      bgColor2: '#0f172a',
      accentColor: '#34d399'
    }
  },
  {
    fileName: 'activity-it-mentor-broadcast.svg',
    data: {
      category: 'IT Mentor Role #2',
      title: 'การควบคุมระบบถ่ายทอดสดและซัพพอร์ตระบบเทคนิค',
      subtitle: 'ถ่ายทอดสดการบรรยายธรรมและสนับสนุนผู้เข้าอบรมตลอดหลักสูตร',
      badge: '[วางภาพการคุมระบบถ่ายทอดสดและหน้าจอห้องอบรม]',
      iconColor: '#10b981',
      bgColor1: '#022c22',
      bgColor2: '#0f172a',
      accentColor: '#6ee7b7'
    }
  }
];

items.forEach(item => {
  const targetPath = path.join(activitiesDir, item.fileName);
  const svg = createSvgPlaceholder(item.data);
  fs.writeFileSync(targetPath, svg, 'utf8');
  console.log('Created:', targetPath);
});
