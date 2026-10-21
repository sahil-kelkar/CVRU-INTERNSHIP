# Week 4 - Day 4: Tailwind Interactive UI & Custom Palette

**Student:** Sahil Kelkar  
**Institution:** Dr. C. V. Raman University (CVRU), Khandwa (M.P.) / AISECT Infotech  

---

## 📌 Core Concepts (Very Simple)

- **Hover States (`hover:`)**: Jab user mouse card ya button par le jata hai (jaise `hover:scale-[1.02]`, `hover:shadow-xl`).
- **Focus States (`focus:`)**: Jab user input field me click karke type karta hai (jaise `focus:ring-2 focus:ring-blue-400`).
- **Transitions (`transition-all duration-300`)**: State change ko smooth animation deta hai.
- **Custom Color Palette**: Tailwind ke `theme.extend.colors` me apne manpasand colors add karna (Primary, Secondary, Accent, Background).

---

## 🛠️ Main Tasks & Code

### Task 1: Interactive Card + Button + Input (`InteractiveCard.js`)

```jsx
function InteractiveCard() {
  return (
    <div className="max-w-sm p-4 rounded-xl shadow-md bg-white hover:shadow-xl hover:scale-[1.02] transition-all duration-300 mx-auto text-left">
      <h3 className="text-xl font-semibold">React Training</h3>

      <p className="text-gray-600 mt-2">
        Learn React with hands-on examples and real projects.
      </p>

      {/* Input with focus ring and transition */}
      <input
        type="email"
        placeholder="Enter your email"
        className="mt-3 border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 transition w-full outline-none"
      />

      {/* Button with hover transition */}
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-full">
        Read More
      </button>
    </div>
  );
}

export default InteractiveCard;
```

---

### Task 2: Custom Color Palette Configuration (`tailwind.config.js`)

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4B7BEC",
        secondary: "#A55EEA",
        accent: "#20BF6B",
        background: "#F4F6F7",
      },
    },
  },
  plugins: [],
};
```

#### Using Custom Colors in `App.js`:
```jsx
import InteractiveCard from "./components/InteractiveCard";

function App() {
  return (
    <div className="bg-background min-h-screen p-6 text-center">
      <h1 className="text-primary text-3xl font-bold mb-4">Welcome</h1>
      <button className="bg-secondary text-white px-4 py-2 rounded-lg mb-8">
        Explore
      </button>

      <InteractiveCard />
    </div>
  );
}

export default App;
```

---

## 🚀 How to Run
- **Terminal:** Run `npm start` inside `myapp` (`http://localhost:3000`).
- **Browser:** Open `week-4-day-4/index.html` directly in your browser. Hover over the card and click inside the email input to see the smooth interactive effects!
