# Week-4 — Day-5: React Performance & Optimization

**Course:** MERN Full Stack Internship Program (3 Months)  
**Institution:** Dr. C. V. Raman University (CVRU), Khandwa (M.P.) / AISECT Infotech  
**Student:** Sahil Kelkar  
**GitHub Profile:** [https://github.com/sahil-kelkar](https://github.com/sahil-kelkar)  

---

## 📖 Overview
Learn how to optimize React applications for speed, smoothness, and efficiency by understanding rendering behavior, memoization (`React.memo`, `useCallback`, `useMemo`), lazy loading (`React.lazy`), and code splitting (`<Suspense>`).

---

## 1. React Rendering Behavior
A React component re-renders when:
- ✔ **State changes**
- ✔ **Props change**
- ✔ **Parent component re-renders**
- ✔ **Context value updates**

### Re-render Visualization
```jsx
function Score({ value }) {
  console.log("Score component rendered!");
  return <h3>Score: {value}</h3>;
}

function Game() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime((prev) => prev + 1);
      console.log("Time updated!");
    }, 2000);

    return () => clearTimeout(timer);
  }, [time]);

  return (
    <>
      <h2>Time: {time}</h2>
      <Score value={100} />
    </>
  );
}
```
**What students observe:**
- Time updates every 2 seconds.
- Parent re-renders $\rightarrow$ Child re-renders.
- Even though `Score`'s `value` never changes, it still re-renders. This demonstrates unnecessary re-renders clearly.

---

## 2. React.memo (Optimization Technique)
`React.memo()` prevents a component from re-rendering unless its props actually change.

### Optimized Version
```jsx
const Score = React.memo(function Score({ value }) {
  console.log("Score rendered!");
  return <h3>Score: {value}</h3>;
});

function Game() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime((prev) => prev + 1);
    }, 2000);

    return () => clearTimeout(timer);
  }, [time]);

  return (
    <>
      <h2>Time: {time}</h2>
      <Score value={100} />
    </>
  );
}
```
**Benefits of React.memo:**
- Avoids unnecessary re-renders
- Improves performance
- Useful for heavy UI components

---

## 3. `useCallback` & `useMemo` (Short Overview)

### `useCallback`
- Memoizes functions.
- Prevents creating new function instances on every render.
- Helps stop re-renders in child components that depend on functions.

### `useMemo`
- Memoizes expensive calculations.
- Prevents re-computation unless dependencies change.

---

## 4. Lazy Loading Using `React.lazy` & `<Suspense>`
Lazy loading means loading a component only when it is required. This improves initial load time and overall app performance.

### Syntax
```jsx
const About = React.lazy(() => import('./About'));

function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <About />
    </Suspense>
  );
}
```

### Better Real-Life Example (Clear & Practical)
Imagine a large "Hotel Menu App" with pages like:
- **Home**
- **About**
- **Menu**
- **Gallery**
- **Offers**
- **Admin Panel**

**If all pages load at once:**
- App becomes slow
- Heavy initial load
- First content appears very late

**Lazy loading solves this:**
- ➡ Load About only when the user navigates to it
- ➡ Load Gallery only when the user needs it
- ➡ Reduce overall bundle size

### How Lazy Loading Helps

| Benefit | Explanation |
| :--- | :--- |
| **Faster initial load** | Only essential components load first |
| **Lower bundle size** | Bundles split into smaller chunks |
| **On-demand loading** | Heavy components load only when needed |
| **Improved FCP** | First visible content loads faster |

---

## 5. Code Splitting
With dynamic imports and lazy loading, React breaks your application into smaller chunks. This reduces initial payload and speeds up load time.

---

## 📊 Summary of the Day

| Concept | Purpose | Result |
| :--- | :--- | :--- |
| **Rendering Behavior** | Understand why components re-render | Debug & optimize better |
| **React.memo** | Prevent unnecessary re-renders | Faster UI |
| **useCallback** | Memoize functions | Avoid child re-renders |
| **useMemo** | Memoize expensive logic | Better performance |
| **Lazy Loading** | Load components on demand | Faster initial load |
| **Code Splitting** | Split bundle into smaller chunks | Smooth app performance |

---

## 🛠️ Hands-on Task for Students
1. **Create a Timer component that updates every second**
2. **Create a child component that uses React.memo**
3. **Lazy load an About page using React.lazy**
4. **Observe console logs to see which components re-render**

---

## 🚀 How to Run

### In Browser
Open [`week-4-day-5/index.html`](./index.html) directly in your browser. Open Developer Tools (`F12` $\rightarrow$ `Console`) to view live render logs.

### In React CRA (`myapp`)
```bash
cd week-3-day-1/myapp
npm start
```
Open `http://localhost:3000` in your browser.
