import fs from 'fs';
import path from 'path';

const baseDir = 'C:/disk_c/Dev/portfolio-dev/my-app-portfolio/public/images';

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
    <rect width="180" height="32" rx="16" fill="${accentColor}" fill-opacity="0.15" stroke="${accentColor}" stroke-opacity="0.4" stroke-width="1"/>
    <text x="90" y="21" fill="${accentColor}" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" letter-spacing="1.5">${category.toUpperCase()}</text>
  </g>

  <!-- Center Graphic Element -->
  <g transform="translate(400, 190)">
    <circle r="56" fill="${iconColor}" fill-opacity="0.12" stroke="${iconColor}" stroke-opacity="0.3" stroke-width="2" />
    <circle r="44" fill="${iconColor}" fill-opacity="0.2" />
    <path d="M -16 -8 L 0 -24 L 16 -8 L 10 16 L -10 16 Z" fill="${iconColor}" />
  </g>

  <!-- Content text -->
  <text x="400" y="300" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="bold" text-anchor="middle">${title}</text>
  <text x="400" y="335" fill="#94a3b8" font-family="system-ui, -apple-system, sans-serif" font-size="15" text-anchor="middle">${subtitle}</text>

  <!-- Bottom notice -->
  <g transform="translate(400, 420)">
    <rect x="-160" y="-18" width="320" height="36" rx="8" fill="#0f172a" fill-opacity="0.9" stroke="#334155" stroke-width="1" />
    <text x="0" y="5" fill="#38bdf8" font-family="monospace" font-size="12" text-anchor="middle">${badge}</text>
  </g>
</svg>`;
}

const placeholders = [
  {
    filePath: path.join(baseDir, 'certificates', 'certificate-network.svg'),
    data: {
      category: 'Official Award',
      title: 'เกียรติบัตรรางวัลชนะเลิศ การบริหารเครือข่าย',
      subtitle: 'การแข่งขันทักษะวิชาการ พ.จ.น.ก. สัมพันธ์ ครั้งที่ 46 (ราชพฤกษ์เกมส์)',
      badge: '📸 [วางภาพเกียรติบัตรจริงแทนที่ไฟล์นี้]',
      iconColor: '#f59e0b',
      bgColor1: '#0f172a',
      bgColor2: '#1e1b4b',
      accentColor: '#fbbf24'
    }
  },
  {
    filePath: path.join(baseDir, 'certificates', 'award-podium.svg'),
    data: {
      category: 'Award Ceremony',
      title: 'ภาพถ่ายพิธีมอบรางวัลชนะเลิศ & เหรียญทอง',
      subtitle: 'ณ มหาวิทยาลัยราชภัฏหมู่บ้านจอมบึง (22 ธ.ค. 2568)',
      badge: '📸 [วางภาพถ่ายวันรับรางวัลแทนที่ไฟล์นี้]',
      iconColor: '#f59e0b',
      bgColor1: '#0f172a',
      bgColor2: '#172554',
      accentColor: '#f59e0b'
    }
  },
  {
    filePath: path.join(baseDir, 'education', 'transcript-kru.svg'),
    data: {
      category: 'Official Transcript',
      title: 'ใบแสดงผลการเรียน วท.บ. วิทยาการคอมพิวเตอร์',
      subtitle: 'มหาวิทยาลัยราชภัฏกาญจนบุรี (108 หน่วยกิต, GPAX 2.60)',
      badge: '📄 [วางภาพใบแสดงผลการเรียนแทนที่ไฟล์นี้]',
      iconColor: '#10b981',
      bgColor1: '#064e3b',
      bgColor2: '#0f172a',
      accentColor: '#34d399'
    }
  },
  {
    filePath: path.join(baseDir, 'activities', 'activity-meditation.svg'),
    data: {
      category: 'Leadership & Mindset',
      title: 'หลักสูตรครูสมาธิ รุ่น 52 & พี่เลี้ยง IT รุ่น 53',
      subtitle: 'สถาบันพลังจิตตานุภาพ หลวงพ่อวิริยังค์ สิรินธโร',
      badge: '📸 [วางภาพกิจกรรมครูสมาธิแทนที่ไฟล์นี้]',
      iconColor: '#06b6d4',
      bgColor1: '#082f49',
      bgColor2: '#0f172a',
      accentColor: '#38bdf8'
    }
  },
  {
    filePath: path.join(baseDir, 'activities', 'activity-student-council.svg'),
    data: {
      category: 'Student Activity',
      title: 'สโมสรนักศึกษา ประจำปีการศึกษา 2567',
      subtitle: 'คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยราชภัฏกาญจนบุรี',
      badge: '📸 [วางภาพกิจกรรมสโมสรนักศึกษาแทนที่ไฟล์นี้]',
      iconColor: '#8b5cf6',
      bgColor1: '#2e1065',
      bgColor2: '#0f172a',
      accentColor: '#a78bfa'
    }
  },
  {
    filePath: path.join(baseDir, 'activities', 'activity-rov-esports.svg'),
    data: {
      category: 'Event Organizer',
      title: 'ฝ่ายจัดการแข่งขัน RoV E-Sports Tournament',
      subtitle: 'จัดโดยสาขาวิทยาการคอมพิวเตอร์ มรภ.กาญจนบุรี',
      badge: '📸 [วางภาพกิจกรรมการแข่งขัน RoV แทนที่ไฟล์นี้]',
      iconColor: '#ec4899',
      bgColor1: '#500724',
      bgColor2: '#0f172a',
      accentColor: '#f472b6'
    }
  }
];

placeholders.forEach(p => {
  const content = createSvgPlaceholder(p.data);
  fs.writeFileSync(p.filePath, content, 'utf8');
  console.log('Created placeholder:', p.filePath);
});
