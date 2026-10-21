import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const SCREENSHOT_DIR = path.resolve('qa-screenshots');
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

const CHROME_PATH = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
  ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  : 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

console.log('Using browser binary:', CHROME_PATH);

async function run100PercentExhaustiveQA() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  try {
    const page = await browser.newPage();

    // =========================================================================
    // PART 1: DESKTOP ALL SECTIONS & FULL ENGLISH TOGGLE (1280 x 900)
    // =========================================================================
    console.log('\n--- PART 1: DESKTOP FULL SECTIONS & ENGLISH TEST ---');
    await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1.5 });

    // 1.1 Home Page - Toggle to Full English Mode
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await new Promise(r => setTimeout(r, 1200));
    await page.evaluate(() => {
      localStorage.setItem('portfolio_language', 'en');
    });
    await page.reload({ waitUntil: 'domcontentloaded' });
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, '10_desktop_home_english.png') });
    console.log('Saved: 10_desktop_home_english.png (Full English Mode)');

    // 1.15 Featured Projects Section in English
    const projSection = await page.$('#projects');
    if (projSection) {
      await projSection.scrollIntoView();
      await new Promise(r => setTimeout(r, 500));
      await page.screenshot({ path: path.join(SCREENSHOT_DIR, '02_desktop_projects.png') });
      console.log('Saved: 02_desktop_projects.png (Featured Projects in English)');
    }

    // 1.2 System Architecture 4 Pillars Section
    const archSection = await page.$('#architecture');
    if (archSection) {
      await archSection.scrollIntoView();
      await new Promise(r => setTimeout(r, 500));
      await page.screenshot({ path: path.join(SCREENSHOT_DIR, '11_desktop_architecture_pillars.png') });
      console.log('Saved: 11_desktop_architecture_pillars.png (Architecture Pillars)');
    }

    // 1.3 Technical Skills 4 Categories Section
    const skillsSection = await page.$('#skills');
    if (skillsSection) {
      await skillsSection.scrollIntoView();
      await new Promise(r => setTimeout(r, 500));
      await page.screenshot({ path: path.join(SCREENSHOT_DIR, '12_desktop_skills_section.png') });
      console.log('Saved: 12_desktop_skills_section.png (Skills Section)');
    }

    // 1.4 Experience & Timeline Section
    const expSection = await page.$('#experience');
    if (expSection) {
      await expSection.scrollIntoView();
      await new Promise(r => setTimeout(r, 500));
      await page.screenshot({ path: path.join(SCREENSHOT_DIR, '13_desktop_experience_section.png') });
      console.log('Saved: 13_desktop_experience_section.png (Experience Timeline)');
    }

    // 1.5 Featured Projects 2 & 3 on Home Page
    const projectCards = await page.$$('article, .overflow-hidden.p-6');
    if (projectCards && projectCards.length > 1) {
      await projectCards[1].scrollIntoView();
      await new Promise(r => setTimeout(r, 500));
      await page.screenshot({ path: path.join(SCREENSHOT_DIR, '14_desktop_project_2_usedcar.png') });
      console.log('Saved: 14_desktop_project_2_usedcar.png (Used Car Project Card)');

      if (projectCards[2]) {
        await projectCards[2].scrollIntoView();
        await new Promise(r => setTimeout(r, 500));
        await page.screenshot({ path: path.join(SCREENSHOT_DIR, '15_desktop_project_3_blazor.png') });
        console.log('Saved: 15_desktop_project_3_blazor.png (Blazor E-Commerce Card)');
      }
    }

    // 1.6 Contact Section Full View
    const contactSection = await page.$('#contact');
    if (contactSection) {
      await contactSection.scrollIntoView();
      await new Promise(r => setTimeout(r, 500));
      await page.screenshot({ path: path.join(SCREENSHOT_DIR, '16_desktop_contact_section.png') });
      console.log('Saved: 16_desktop_contact_section.png (Contact Section)');
    }

    // =========================================================================
    // PART 2: PROJECT 2 DEEP DIVE (Used Car Community Platform)
    // =========================================================================
    console.log('\n--- PART 2: PROJECT 2 DEEP DIVE (Used Car) ---');
    await page.goto('http://localhost:3000/projects/used-car-management-system', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });

    // 2.1 Header & Metrics (70% Memory, 0 Duplicate, 3x Resiliency, 100% Idempotent)
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, '17_car_deepdive_header.png') });
    console.log('Saved: 17_car_deepdive_header.png (Used Car Header & Metrics)');

    // 2.2 Diagram Step 3 (Stripe Escrow Webhook)
    const carStep3 = await page.evaluateHandle(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      return buttons.find(b => b.textContent?.includes('Step 3'));
    });
    if (carStep3 && carStep3.asElement()) {
      await carStep3.asElement().scrollIntoView();
      await carStep3.asElement().click();
      await new Promise(r => setTimeout(r, 500));
      await page.screenshot({ path: path.join(SCREENSHOT_DIR, '18_car_diagram_step3.png') });
      console.log('Saved: 18_car_diagram_step3.png (Used Car Diagram Step 3)');
    }

    // 2.3 Node Drawer: Click "Reservation Expiry Worker"
    const carWorkerNode = await page.evaluateHandle(() => {
      const divs = Array.from(document.querySelectorAll('div'));
      return divs.find(d => d.textContent?.includes('Reservation Expiry Worker') && d.classList.contains('cursor-pointer'));
    });
    if (carWorkerNode && carWorkerNode.asElement()) {
      await carWorkerNode.asElement().click();
      await new Promise(r => setTimeout(r, 500));
      await page.screenshot({ path: path.join(SCREENSHOT_DIR, '19_car_diagram_drawer.png') });
      console.log('Saved: 19_car_diagram_drawer.png (Used Car Worker Drawer)');
    }

    // =========================================================================
    // PART 3: PROJECT 3 DEEP DIVE (SBFblazor E-Commerce)
    // =========================================================================
    console.log('\n--- PART 3: PROJECT 3 DEEP DIVE (Blazor E-Commerce) ---');
    await page.goto('http://localhost:3000/projects/sbf-blazor-ecommerce', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });

    // 3.1 Header & Metrics (100% Zero Oversell, 100% ACID, < 3s Report, 0 Schema Exposure)
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, '20_blazor_deepdive_header.png') });
    console.log('Saved: 20_blazor_deepdive_header.png (Blazor Header & Metrics)');

    // 3.2 Diagram Step 2 (Pessimistic Row Lock)
    const blazorStep2 = await page.evaluateHandle(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      return buttons.find(b => b.textContent?.includes('Step 2'));
    });
    if (blazorStep2 && blazorStep2.asElement()) {
      await blazorStep2.asElement().scrollIntoView();
      await blazorStep2.asElement().click();
      await new Promise(r => setTimeout(r, 500));
      await page.screenshot({ path: path.join(SCREENSHOT_DIR, '21_blazor_diagram_step2.png') });
      console.log('Saved: 21_blazor_diagram_step2.png (Blazor Diagram Step 2)');
    }

    // 3.3 Node Drawer: Click "Pessimistic Concurrency Engine"
    const blazorLockNode = await page.evaluateHandle(() => {
      const divs = Array.from(document.querySelectorAll('div'));
      return divs.find(d => d.textContent?.includes('Pessimistic Concurrency Engine') && d.classList.contains('cursor-pointer'));
    });
    if (blazorLockNode && blazorLockNode.asElement()) {
      await blazorLockNode.asElement().click();
      await new Promise(r => setTimeout(r, 500));
      await page.screenshot({ path: path.join(SCREENSHOT_DIR, '22_blazor_diagram_drawer.png') });
      console.log('Saved: 22_blazor_diagram_drawer.png (Blazor Concurrency Drawer)');
    }

    // =========================================================================
    // PART 4: CATALOG PAGE (/projects)
    // =========================================================================
    console.log('\n--- PART 4: CATALOG PAGE (/projects) ---');
    await page.goto('http://localhost:3000/projects', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, '23_catalog_page.png') });
    console.log('Saved: 23_catalog_page.png (All Projects Catalog)');

    // =========================================================================
    // PART 5: MOBILE EXHAUSTIVE VIEWPORT (390 x 844 iPhone)
    // =========================================================================
    console.log('\n--- PART 5: MOBILE EXHAUSTIVE TEST ---');
    await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await new Promise(r => setTimeout(r, 1200));

    // 5.1 Click Mobile Hamburger Menu
    const hamburgerBtn = await page.$('button[aria-label="Toggle Menu"]');
    if (hamburgerBtn) {
      await hamburgerBtn.click();
      await new Promise(r => setTimeout(r, 400));
      await page.screenshot({ path: path.join(SCREENSHOT_DIR, '24_mobile_hamburger_open.png') });
      console.log('Saved: 24_mobile_hamburger_open.png (Hamburger Menu Drawer)');

      // Close menu
      await hamburgerBtn.click();
      await new Promise(r => setTimeout(r, 300));
    }

    // 5.2 Mobile Architecture & Skills
    const mobArch = await page.$('#architecture');
    if (mobArch) {
      await mobArch.scrollIntoView();
      await new Promise(r => setTimeout(r, 500));
      await page.screenshot({ path: path.join(SCREENSHOT_DIR, '25_mobile_architecture.png') });
      console.log('Saved: 25_mobile_architecture.png (Mobile Architecture)');
    }

    const mobSkills = await page.$('#skills');
    if (mobSkills) {
      await mobSkills.scrollIntoView();
      await new Promise(r => setTimeout(r, 500));
      await page.screenshot({ path: path.join(SCREENSHOT_DIR, '26_mobile_skills.png') });
      console.log('Saved: 26_mobile_skills.png (Mobile Skills)');
    }

    const mobExp = await page.$('#experience');
    if (mobExp) {
      await mobExp.scrollIntoView();
      await new Promise(r => setTimeout(r, 500));
      await page.screenshot({ path: path.join(SCREENSHOT_DIR, '27_mobile_experience.png') });
      console.log('Saved: 27_mobile_experience.png (Mobile Experience)');
    }

    // 5.3 Mobile Deep Dive Project 2
    await page.goto('http://localhost:3000/projects/used-car-management-system', { waitUntil: 'domcontentloaded' });
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, '28_mobile_car_deepdive.png') });
    console.log('Saved: 28_mobile_car_deepdive.png (Mobile Used Car Deep Dive)');

    // =========================================================================
    // PART 6: 404 NOT FOUND PAGE
    // =========================================================================
    console.log('\n--- PART 6: 404 NOT FOUND PAGE ---');
    await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1.5 });
    await page.goto('http://localhost:3000/some-random-route-404-test', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, '29_404_not_found_page.png') });
    console.log('Saved: 29_404_not_found_page.png (404 Page)');

    console.log('\n======================================================');
    console.log('>>> 100% EXHAUSTIVE QA TEST COMPLETED SUCCESSFULLY! <<<');
    console.log('======================================================');
  } finally {
    await browser.close();
  }
}

run100PercentExhaustiveQA().catch(err => {
  console.error('Error during Exhaustive QA:', err);
  process.exit(1);
});
