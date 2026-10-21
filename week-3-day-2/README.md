# Week 3 - Day 2: React Components & Props (Beginner Friendly)

**Student:** Sahil Kelkar  
**Institution:** Dr. C. V. Raman University (CVRU), Khandwa (M.P.) / AISECT Infotech  
**Program:** 3-Month MERN Full Stack Internship Program  

---

## 📌 Core Concepts (Bahut Simple Shabdon Me)

React me UI ko chhote-chhote reusable pieces me banaya jata hai jise **Components** kehte hain.

| Concept | Kya hota hai? | Simple Analogy (Udaharan) |
| :--- | :--- | :--- |
| **Component** | Ek JavaScript function jo UI (JSX) return karta hai | Lego Block — jise jod kar poori building banti hai |
| **JSX** | JavaScript ke andar HTML likhne ka syntax | HTML jaisa dikhta hai, par JavaScript ki power ke saath |
| **Props (Properties)** | Parent component se child component ko data bhejna | Function ke arguments jaise jo customize karte hain |
| **`.map()`** | Array ke har item ke liye component render karna | Loop chalakar har user ke liye card banana |

---

## 🛠️ Tasks & Step-by-Step Code

### Task 1: Create Custom Components (`Header` & `Footer`)

Folder structure: `src/components/`

#### 1. `Header.js`
```jsx
function Header() {
  return (
    <header style={{ backgroundColor: "#007bff", color: "white", padding: "10px", textAlign: "center" }}>
      <h1> My Portfolio</h1>
    </header>
  );
}

export default Header;
```

#### 2. `Footer.js`
```jsx
function Footer() {
  return (
    <footer style={{ backgroundColor: "#f1f1f1", padding: "10px", textAlign: "center" }}>
      <p>© 2025 My Portfolio | Built with ❤️ in React</p>
    </footer>
  );
}

export default Footer;
```

#### 3. Using in `App.js` (Modular Layout)
```jsx
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to My React App!</h2>
        <p>This is my first modular React layout.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

---

### Task 2: Pass Data as Props (`Greeting.js`)

**Concept:** `props` ek object hota hai jo Parent se Child component ko values pass karne ke kaam aata hai.

#### `Greeting.js`
```jsx
function Greeting(props) {
  return (
    <div>
      <h3>Hello, {props.name}!</h3>
      <p>You are learning {props.topic} today.</p>
    </div>
  );
}

export default Greeting;
```

#### Calling inside `App.js`:
```jsx
<Greeting name="Priya" topic="React Components" />
<Greeting name="Rohan" topic="JSX & Props" />
```

---

### Task 3: Build a Profile Card Component (`ProfileCard.js`)

#### `ProfileCard.js`
```jsx
function ProfileCard(props) {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    width: "220px",
    textAlign: "center",
    margin: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  };

  return (
    <div style={cardStyle}>
      <img
        src={props.image}
        alt={props.name}
        style={{ width: "80px", borderRadius: "50%" }}
      />
      <h3>{props.name}</h3>
      <p>{props.role}</p>
    </div>
  );
}

export default ProfileCard;
```

---

### 🏆 Bonus Challenge: Render with `.map()`

Bar-bar hardcode karne ki jagah array data banakar `.map()` se dynamic cards render karna:

```jsx
const users = [
  {
    id: 1,
    name: "Arjun Kumar",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Sneha Verma",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Rahul Sharma",
    role: "Backend Engineer",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    id: 4,
    name: "Pooja Patel",
    role: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

// Rendering dynamically:
<div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
  {users.map((user) => (
    <ProfileCard
      key={user.id}
      name={user.name}
      role={user.role}
      image={user.image}
    />
  ))}
</div>
```

---

## 🚀 How to Run the App

### Option 1: In your React App (`npm start`)
```bash
cd "week-3-day-1/myapp"   # or simply `cd myapp`
npm start
```
Browser automatically opens: `http://localhost:3000`

### Option 2: Direct Browser Preview (Instant)
Directly open [week-3-day-2/index.html](file:///Users/sahilkelkar/sahil%20internship/week-3-day-2/index.html) in any web browser to see the live rendered React components without starting a server!

---

## 🎯 Learning Outcomes
- JSX and Component-Based Architecture samajhna.
- Functional Components banana aur reuse karna (`Header`, `Footer`, `Greeting`, `ProfileCard`).
- Props ke through parent se child ko dynamically data pass karna.
- JavaScript `.map()` method se dynamic, responsive UI create karna.
