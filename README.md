# Tushar Sharma — Executive Portfolio & Analytics Platform

<div align="center">

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6.4.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Three.js](https://img.shields.io/badge/Three.js-0.178.0-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org)
[![License](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)](LICENSE)

<p align="center">
  <strong>System Executive | CRM Operations | Operational Data Analyst | MIS & Management Reporting</strong>
</p>

<p align="center">
  <em>"Translating complex operational and admissions datasets into structured reporting logic, analytical dashboards, and executive scorecards."</em>
</p>

[Explore Projects](#-featured-case-studies) • [Executive Resume](#-dual-mode-executive-resume--ats-print) • [Tech Stack](#-tech-stack) • [Quick Start](#-quick-start) • [Contact](#-contact--connect)

</div>

---

## 📌 Executive Overview

This repository houses the personal executive portfolio and web platform of **Tushar Sharma**. Built with **React 19**, **Three.js / WebGL**, **Tailwind CSS v4**, and **TypeScript**, the platform showcases data intelligence architecture, CRM pipelines, high-volume data cleansing mechanisms, and executive MIS scorecards developed across 5+ years of professional operations (including 3+ years at **Parul University**).

### 🏆 Key Career Highlights
* **Tenure at Parul University:** 3+ Years as System Executive (Central Contact Center & Admissions).
* **Overall Professional Experience:** 5+ Years (Specializing in CRM, MIS, Analytics, and Government Portals).
* **Operational Volume Managed:** **150K+** Applicant and CRM records cleansed, deduplicated, and reconciled.
* **Reporting Accuracy:** **99.8%** verified under rigorous SOP and audit standards.
* **Reporting Efficiency:** **85% faster turnaround** achieved by eliminating manual spreadsheet collation with centralized visualization logic.

---

## ✨ Core Features

### 1. 🌌 Interactive Holographic Data Core
* Real-time WebGL interactive canvas built with **Three.js**, `@react-three/fiber`, and `@react-three/drei`.
* Features a dynamic floating distorted sphere, rotating wireframe matrix, orbiting tech nodes, star dust particle field, and smooth mouse-controlled orbit physics.

### 2. 📄 Interactive Executive Resume Modal
* On-screen A4 virtual document viewer allowing recruiters and hiring managers to review Tushar's resume directly on the website without opening a separate tab or PDF viewer.
* **Controls:** Zoom (75% to 130%), view selection (Both Pages / Page 1 / Page 2), and 1-click **"Print / Save PDF"** trigger.

### 3. 🖨️ Calibrated 2-Page ATS-Optimized Print Layout
* Dedicated print stylesheet (`custom.css`) engineered for automated Applicant Tracking Systems (ATS) and clean physical/PDF printing.
* **Page 1:** Executive Profile, 4-Card Metrics Ribbon, Core Competencies Matrix (2x2 grid), and Parul University tenure with high-impact achievement bullets.
* **Page 2:** Sofcon India operations governance, 4 key project architectures, verified academic degrees, and professional certifications.
* **Print Features:** Clean A4 portrait pagination (`break-after: page`), suppression of screen navigation/canvas, and strict color-contrast rendering.

### 4. 📊 Detailed Project Case Studies
* Dynamic interactive cards with modal drilldowns highlighting problem statements, engineering solutions, quantifiable metrics, and tech stacks.

---

## 📂 Featured Case Studies

| Project | Category | Key Metric | Tech Stack |
| :--- | :---: | :---: | :--- |
| **Admissions & Enrollment Intelligence** | Web Platform | `85% Faster Turnaround` | React, Three.js, REST APIs, Data Modeling |
| **Enterprise CRM & Contact Center Pipeline** | CRM Operations | `100% Deduplication` | CRM Systems, Data Cleansing, SOP Automation |
| **Executive MIS & Strategic Scorecards** | MIS & Reporting | `50+ Monthly Scorecards` | Advanced Excel, Trend Analysis, KPI Matrices |
| **National Skill Development Operations** | Analytics & Compliance | `100% Audit Cleared` | DDU-GKY MPR Portal, Government SOPs |

---

## 🛠️ Tech Stack

### Core Frontend & Visualizations
* **Framework:** [React 19](https://react.dev)
* **Language:** [TypeScript 5.8](https://www.typescriptlang.org)
* **Build System:** [Vite 6](https://vitejs.dev)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
* **Visualizations & WebGL:** [Three.js](https://threejs.org), [`@react-three/fiber`](https://github.com/pmndrs/react-three-fiber), [`@react-three/drei`](https://github.com/pmndrs/drei)
* **Animations:** [Framer Motion](https://www.framer.com/motion)
* **Icons:** [Lucide React](https://lucide.dev)

### Local Server Engine
* **Python SPA Server (`serve.py`):** Standalone zero-dependency HTTP server with SPA route fallback and standard MIME type mappings.

---

## 📁 Repository Structure

```
Tushar-Sharma-Portfolio/
├── dist/                          # Production-optimized SPA bundle
│   ├── assets/                    # Compiled CSS and minified JS bundles
│   └── index.html
├── src/
│   ├── components/
│   │   ├── canvas/
│   │   │   └── Hero3DScene.tsx    # Three.js holographic data core
│   │   ├── print/
│   │   │   ├── PrintResume.tsx    # 2-Page ATS printable executive resume
│   │   │   └── ResumeModal.tsx    # Interactive on-screen resume previewer
│   │   ├── sections/
│   │   │   ├── Navbar.tsx         # Floating header with resume trigger
│   │   │   ├── HeroSection.tsx    # Value headline, metric badges & 3D canvas
│   │   │   ├── ProjectsSection.tsx# Interactive case studies
│   │   │   ├── ProjectModal.tsx   # Detailed project drilldown modal
│   │   │   ├── ExperienceSection.tsx # Career history timeline
│   │   │   ├── SkillsSection.tsx  # Categorized competencies grid
│   │   │   ├── CredentialsSection.tsx # Certifications & education
│   │   │   ├── ContactSection.tsx # Direct reach-out form & details
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       └── Card3D.tsx         # 3D interactive card tilt wrapper
│   ├── data/
│   │   └── portfolioData.ts       # Central source of truth for resume & content
│   ├── App.tsx                    # Top-level layout & print/modal state
│   ├── main.tsx                   # Entry point
│   ├── index.css                  # Tailwind v4 base styles
│   └── custom.css                 # Custom utilities & @media print styles
├── serve.py                       # Lightweight Python SPA server
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Quick Start

### Prerequisites
* **Node.js** (v18+ recommended) & **npm**
* *OR* **Python 3** (if running the pre-built distribution locally)

### Option 1: Development Server (Vite)
```bash
# 1. Clone the repository
git clone https://github.com/sharmatushar0703-lgtm/Portfolio.git
cd Portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```
Open your browser at `http://localhost:5174`.

### Option 2: Production Build & Preview
```bash
# Build production bundle
npm run build

# Preview production build
npm run preview
```

### Option 3: Instant Standalone Local Server (Python)
If you just want to run the compiled production site without node tooling:
```bash
python3 serve.py
```
Visit **[http://localhost:5174](http://localhost:5174)** in your browser.

---

## 🖨️ Exporting the ATS Resume as PDF

1. Launch the application and click **"Resume"** in the top navigation or **"View & Print Resume"** in the Hero section.
2. In the interactive preview modal, click **"Print / Save PDF"** (or press `Cmd + P` / `Ctrl + P`).
3. In the browser print dialog:
   * **Destination:** `Save as PDF`
   * **Pages:** `All`
   * **Paper Size:** `A4`
   * **Options:** Check **"Background graphics"** (to preserve executive badge styling and accent lines).
4. Click **Save** to generate a clean, ATS-compliant 2-page executive PDF resume.

---

## 📬 Contact & Connect

* **Full Name:** Tushar Sharma
* **Role:** System Executive | CRM Operations | Data Analyst
* **Location:** Vadodara, Gujarat, India
* **Email:** [sharma.tushar0703@gmail.com](mailto:sharma.tushar0703@gmail.com)
* **Phone:** [+91 88140 50806](tel:+918814050806)
* **LinkedIn:** [linkedin.com/in/sharmatushar0703](https://linkedin.com)
* **GitHub:** [@sharmatushar0703-lgtm](https://github.com/sharmatushar0703-lgtm)

---

<div align="center">
  <sub>Designed & engineered with ❤️ by Tushar Sharma. All rights reserved.</sub>
</div>
