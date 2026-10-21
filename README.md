# Prince Kumar — Personal Portfolio

A premium, modern dark-themed personal portfolio website built with pure semantic HTML5, CSS3, and vanilla JavaScript. No external frameworks, zero bundlers, zero runtime dependencies.

---

## 👨‍💻 Personal Information

- **Name:** Prince Kumar
- **Role:** B.Tech Computer Science & Engineering (Batch of 2027)
- **Institution:** Gurukula Kangri (Deemed to be University), Haridwar, Uttarakhand
- **Academic Scores:** Overall CGPA: 7.84 | 6th Semester CGPA: 8.28 | Class XII (CBSE PCM): 77.4% | Class X (CBSE): 85.6%
- **Target Roles:** SDE Placements, Software Engineering Internships, Web Development
- **Email:** [prinsep97@gmail.com](mailto:prinsep97@gmail.com)
- **Phone:** +91 7905725590
- **LinkedIn:** [linkedin.com/in/princekumar-cse](https://linkedin.com/in/princekumar-cse)
- **GitHub:** [github.com/SynapticCoder111](https://github.com/SynapticCoder111)

---

## 📁 File & Folder Structure

```
prince-portfolio/
├── index.html        ← Semantic single-page structure across all 10 sections
├── style.css         ← Charcoal/dark design system, responsive layout, animations
├── script.js         ← Typewriter effect, scroll-spy, fade-in animations, mailto contact
├── README.md         ← Project documentation & setup instructions
└── assets/           ← Local assets folder
    └── resume.pdf    ← (Copy your resume PDF here as resume.pdf)
```

---

## 📄 Adding Your Resume PDF

1. Locate your latest resume file (e.g. `Prince_Kumar_Resume_v2(2).pdf`).
2. Copy it into the `assets/` directory inside this workspace:
   `d:\Documents\prince-portfolio\assets\`
3. Rename the copied file to `resume.pdf`.
4. All resume download buttons across the navigation bar, hero section, and resume banner are pre-configured to download this file with the suggested filename `Prince_Kumar_Resume.pdf`.

---

## 🚀 Local Development & Preview

### Option 1 — Open directly in browser
Double-click `index.html` or run in PowerShell:
```powershell
Start-Process "d:\Documents\prince-portfolio\index.html"
```

### Option 2 — Local HTTP server (recommended)
```powershell
python -m http.server 3000 --directory "d:\Documents\prince-portfolio"
```
Then navigate to: [http://localhost:3000](http://localhost:3000)

---

## 🧭 Page Sections

1. **Navigation Bar** — Glassmorphism background, active section highlighting with `IntersectionObserver`, and mobile drawer menu.
2. **Hero** — Animated gradient background orbs, dynamic typewriter effect cycling relevant roles, primary call to action, and resume download.
3. **About** — Authentic introduction highlighting CS foundations, DSA focus, and target roles (SDE, Internships, Web Dev).
4. **Skills** — Categorized into Programming Languages (C++, Python, JS), Web Technologies (HTML, CSS), Developer Tools (Git, GitHub, VS Code), Core CS Fundamentals, Strengths, and an exploratory project section.
5. **Projects** —
   - **Job Application Tracker (CareerFlow):** Completed and ready to deploy (Node.js, Express, MongoDB, JavaScript ES modules). Full-stack workspace for managing applications, pipelines, 30-day interview calendar, and analytics. Repository: [github.com/SynapticCoder111/careerflow-job-tracker](https://github.com/SynapticCoder111/careerflow-job-tracker)
   - **AI Placement Preparation & Skill Gap Analyzer:** Academic minor project (team of 2, in development) focusing on role requirement mapping and preparation path recommendations.
6. **Experience** — BeeSkilled Full Stack Web Development Intern (6-week online internship/training program).
7. **DSA & Problem Solving** — Structured topic roadmap and competitive programming platforms (LeetCode, Codeforces, GeeksforGeeks, HackerRank).
8. **Education** — Full academic timeline with verified institutions, graduation year (2027), CGPA metrics (7.84 overall, 8.28 6th sem), and Class XII/X scores.
9. **Certifications & Training** — OCI 2025 AI Foundations Associate, NPTEL Python (Elite 65%), and Sofcon AI & ML workshop.
10. **Resume** — Dedicated download CTA banner.
11. **Contact & Footer** — Direct verified contact links (Email, LinkedIn, GitHub, Phone) and interactive mailto contact form.

---

## 🎨 Design Tokens

The site uses a charcoal dark theme defined with CSS custom properties in `style.css`:
- Background Deepest: `#0d0d0f`
- Surface Elevated: `#141418` / `#1a1a20`
- Border Subtle: `#2a2a35`
- Primary Accent: Blue (`#4f8ef7`) & Violet (`#a78bfa`)
- Font Family: `Space Grotesk` (headings) & `Inter` (body)
