# Project Maintenance & QA Scripts

โฟลเดอร์นี้รวบรวม Script สำหรับการดูแล บำรุงรักษา และตรวจสอบคุณภาพอัตโนมัติ (Automated QA)

## หมวดหมู่สคริปต์ (Directory Structure)

```
scripts/
├── qa/
│   └── test-visual-qa.mjs      # รันการทดสอบ Visual QA อัตโนมัติด้วย Chrome/Edge แคปภาพ 100%
├── setup/
│   └── setup-clean-portfolio.mjs # สคริปต์สำรองสำหรับ Scaffold โครงสร้างโปรเจกต์
└── README.md                   # เอกสารคำอธิบายนี้
```

---

## คำสั่งเรียกใช้งาน (NPM Scripts)

คุณสามารถสั่งรันได้ง่ายๆ ผ่าน `npm run`:

```bash
# รันการทดสอบ Visual QA อัตโนมัติ (ครอบคลุมทั้ง Desktop, Mobile, English Toggle, Architecture, Lightbox)
npm run test:qa
```

หรือรันตรงผ่าน Node.js จากรูทของโปรเจกต์:
```bash
node scripts/qa/test-visual-qa.mjs
```
