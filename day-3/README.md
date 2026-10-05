# Day 3: Responsive Layouts with Flexbox & CSS Grid

**Student:** Sahil Kelkar  
**Internship:** AISECT Infotech  
**Topic:** Hands-on Tasks (Flexbox & CSS Grid)  

---

## 🛠️ Tasks Completed

### Task 1: Responsive 3-Section Layout Using Flexbox
- **Desktop:** 3 content boxes (Frontend, Backend, Database) line up horizontally in 1 row using `display: flex; gap: 18px;`. Each box has `flex: 1;`.
- **Mobile:** Media query `@media (max-width: 768px)` sets `flex-direction: column;`, stacking the 3 boxes vertically in 1 column.

### Task 2: Simple Photo Gallery Using Grid
- Built using CSS Grid:
  ```css
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
  ```
- Displays 6 high-quality, aesthetic landscape/nature photos that automatically resize and fluidly wrap across all device widths without breaking.

---

## 💬 Discussion & Recap Points

1. **Flexbox = 1D Layout:** Arranges items along a single axis (either row or column). Perfect for 3-card horizontal rows.
2. **Grid = 2D Layout:** Arranges items across rows and columns simultaneously. Perfect for photo galleries.
3. **`fr` Unit & `gap`:** `fr` allows fluid fractional sizing, and `gap` provides clean spacing without margin workarounds.
4. **Mobile Responsiveness:** Ensures the page looks neat and functions smoothly on mobile, tablet, and desktop screens.
