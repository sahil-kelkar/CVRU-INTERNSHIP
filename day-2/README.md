# Day 2: CSS Styling - "About Me" Portfolio

**Student:** Sahil Kelkar  
**Course / Internship:** AISECT Infotech / CVRU  
**Topic:** Introduction to CSS, Box Model, External Stylesheet & Google Fonts  

---

## 📌 Task Summary
In this task, we took the raw HTML "About Me" webpage from Day 1 and styled it using an external CSS stylesheet (`style.css`), a clean **Light Theme**, custom Google Fonts, and the CSS Box Model.

---

## 🛠️ Requirements Implemented

1. **External CSS (`style.css`)**:
   - Linked to `index.html` via `<link rel="stylesheet" href="style.css">`.
   - Complete separation of concerns: HTML handles page structure, CSS handles styling.

2. **Consistent Colors, Padding & Margins**:
   - Clean, professional light theme palette:
     - Background: `#f4f6f9` (soft light gray)
     - Cards & Header: `#ffffff` (pure white)
     - Primary Brand Color: `#2563eb` (royal blue)
     - Body Text: `#334155` / `#475569` (readable dark slate)
   - Consistent padding inside sections (`25px`) and standard margins (`25px auto`) between sections.

3. **Custom Google Font**:
   - Imported and applied `'Poppins', sans-serif` from Google Fonts for clean typography.

4. **CSS Box Model Applied**:
   - `box-sizing: border-box;` applied to all elements so padding and border are included in total dimensions.
   - Distinct **margins** (spacing outside elements), **borders** (outlines and dividers), and **padding** (inner breathing space inside cards and inputs).

---

## 💬 Discussion Points

### 1. Why External CSS is Preferred in Real-World Projects
- **Separation of Concerns:** Keeps HTML clean and focused only on structure and content, while CSS handles all presentation.
- **Maintainability & Scalability:** In large projects, changing the theme or a button color only requires editing one `style.css` file instead of editing dozens of HTML files.
- **Browser Caching & Faster Page Loads:** Browsers cache `.css` files after the first load. On subsequent page visits, the browser reuses the cached file, saving bandwidth and speeding up the site.

### 2. How CSS Makes UI Consistent Across Multiple Pages
- By linking the same external stylesheet (`style.css`) to multiple HTML files (e.g., `about.html`, `projects.html`, `contact.html`), every page inherits the exact same colors, typography, buttons, and layout styles.
- Ensures a cohesive user experience and branding without duplicating code.

### 3. How Google Fonts Improve Typography Aesthetics
- Default system fonts (Times New Roman, Arial) can look outdated and vary widely across different operating systems (Windows, Mac, Linux, Android).
- Google Fonts provides modern, web-safe, cross-platform typefaces (like `Poppins` or `Inter`) that render consistently across all devices and elevate readability and visual appeal.

### 4. Brief Look at Responsive Design (Teaser for Day 3)
- Real-world users access websites on mobile phones, tablets, and desktops.
- Using simple CSS media queries (e.g., `@media (max-width: 768px)`), we can change layouts on smaller screens—such as stacking horizontal columns vertically, shrinking image sizes, or wrapping navigation links so nothing overflows or breaks.
