# Day 5: DOM & Event Handling

**Student:** Sahil Kelkar  
**Course / Internship:** AISECT Infotech / CVRU Khandwa (M.P.)  
**Topic:** Hands-on Tasks (DOM Manipulation, Form Validation, Calculator & Events)  

---

## 🛠️ Tasks Completed

### Task 1: Interactive Buttons & Styling Controls
1. **Text Color:** Click RED, GREEN, or BLUE buttons to dynamically alter `element.style.color`.
2. **Font Family:** Select dropdown updates `element.style.fontFamily`.
3. **Font Size:** Click **A+** to increase or **A-** to decrease font size (`element.style.fontSize`).
4. **Mouseover Font Style:** Hovering over **Bold**, **Italic**, or **Underline** applies formatting via `onmouseover` and resets on `onmouseout`.

### Task 2: Simple Form Validation
- Checks that neither **Name** nor **Email** are submitted blank.
- Displays an inline red error alert directly below the empty field (`nameError.innerText = ...`).
- Displays a green success message when both fields are valid.

### Task 3: Simple Calculator
- Validates that both input numbers are provided before calculation.
- Performs **Add (+)**, **Subtract (-)**, **Multiply (×)**, and **Divide (÷)** on button click.
- Prevents division by zero with an alert.

### Bonus Challenge: Theme Switcher
- Includes **☀️ Light** and **🌙 Dark** buttons that toggle `body.classList.add("dark-mode")` to switch background and text colors.

---

## 💬 Discussion & Recap Points

| Concept | Description |
| :--- | :--- |
| **DOM Tree** | Hierarchical object representation of the HTML document created by the browser. |
| **Selection Methods** | `document.getElementById()`, `document.querySelector()` used to target elements in JS. |
| **Style Manipulation** | Modifying CSS properties dynamically using `element.style.property`. |
| **Event Handling** | Responding to user interactions (`onclick`, `onchange`, `onmouseover`, `onmouseout`, `onsubmit`). |
| **Form Validation** | Inspecting input values before processing or submitting data to prevent errors. |
| **Debugging** | Using `console.log()` and Developer Tools (F12) to trace execution and fix bugs. |
