# Weather App (Week 2 – Days 6–7 Mini Project)

**Student:** Sahil Kelkar  
**Institution:** Dr. C. V. Raman University (CVRU), Khandwa (M.P.) / AISECT Infotech  
**Program:** 3-Month MERN Full Stack Internship Program  

---

## 🌤️ Project Overview
A responsive and beginner-friendly **Live Weather Web Application** built with HTML5, CSS3, and JavaScript (Fetch API & Async/Await). It allows users to search for any city in the world to get real-time weather information with dynamic background gradient changes.

---

## 🚀 Features
1. **Live City Weather Search:** Enter any city name to retrieve live weather conditions.
2. **Key Weather Metrics Displayed:**
   - City & Country name
   - Current Date
   - Temperature in °C
   - Weather condition & icon / emoji (Sunny, Rain, Clouds, Snow, etc.)
   - Humidity percentage (%)
   - Wind speed (km/h)
3. **Dynamic Background Themes:** Page background gradient automatically changes based on weather (Clear sky, Rain, Clouds, Fog, etc.).
4. **Loading Spinner Animation:** Smooth CSS loading spinner while data is being fetched.
5. **Error Handling:** Handles misspelled, unknown, or empty city searches gracefully.
6. **Responsive Design:** Optimized for mobile phones, tablets, and desktop browsers.
7. **Quick Search Buttons:** Preset buttons for Delhi, Mumbai, Bhopal, London, and New York.

---

## 🛠️ Technologies Used
- **HTML5:** Semantic layout, input form, and container structure.
- **CSS3:** Custom styles, Flexbox, CSS Grid, linear gradients, keyframe animations, and media queries.
- **JavaScript (ES6+):** Fetch API, `async/await`, DOM manipulation, and error handling.
- **APIs:** 
  - [OpenWeatherMap API](https://openweathermap.org/api) (`api.openweathermap.org/data/2.5/weather`)
  - Seamless free fallback support with [Open-Meteo API](https://open-meteo.com) for instant testing without mandatory key signup.

---

## 💻 How to Run Locally

### 1. In Browser:
Open [index.html](file:///Users/sahilkelkar/sahil%20internship/weather-app/index.html) directly in Google Chrome or any web browser:
```bash
open weather-app/index.html
```

### 2. In Terminal (Node.js):
```bash
node weather-app/script.js
```

---

## 🐙 Git & GitHub Workflow

```bash
# 1. Initialize repo
git init

# 2. Stage files
git add .

# 3. Commit
git commit -m "Weather App Initial Commit"

# 4. Push to GitHub
git remote add origin https://github.com/sahil-kelkar/weather-app.git
git branch -M main
git push -u origin main
```
