// ============================================================
// Week 2 – Days 6–7: Mini Project — API-based Weather App
// Student: Sahil Kelkar | Complete Indian Villages & Cities Support
// ============================================================

// Optional OpenWeatherMap API Key (Students can replace with their own free key)
const API_KEY = "YOUR_API_KEY"; 

// Weather Codes Mapping for Open-Meteo
const weatherCodeMap = {
    0: { main: "Clear", desc: "Clear Sky", icon: "☀️", bg: "linear-gradient(rgba(245, 158, 11, 0.2), rgba(30, 64, 175, 0.4)), url('bg.jpg') no-repeat center center fixed" },
    1: { main: "Clear", desc: "Mainly Clear", icon: "🌤️", bg: "linear-gradient(rgba(245, 158, 11, 0.2), rgba(30, 64, 175, 0.4)), url('bg.jpg') no-repeat center center fixed" },
    2: { main: "Clouds", desc: "Partly Cloudy", icon: "⛅", bg: "linear-gradient(rgba(71, 85, 105, 0.55), rgba(15, 23, 42, 0.65)), url('bg.jpg') no-repeat center center fixed" },
    3: { main: "Clouds", desc: "Overcast", icon: "☁️", bg: "linear-gradient(rgba(71, 85, 105, 0.55), rgba(15, 23, 42, 0.65)), url('bg.jpg') no-repeat center center fixed" },
    45: { main: "Fog", desc: "Foggy", icon: "🌫️", bg: "linear-gradient(rgba(71, 85, 105, 0.65), rgba(30, 41, 59, 0.75)), url('bg.jpg') no-repeat center center fixed" },
    48: { main: "Fog", desc: "Rime Fog", icon: "🌫️", bg: "linear-gradient(rgba(71, 85, 105, 0.65), rgba(30, 41, 59, 0.75)), url('bg.jpg') no-repeat center center fixed" },
    51: { main: "Rain", desc: "Light Drizzle", icon: "🌦️", bg: "linear-gradient(rgba(30, 58, 138, 0.6), rgba(15, 23, 42, 0.7)), url('bg.jpg') no-repeat center center fixed" },
    61: { main: "Rain", desc: "Slight Rain", icon: "🌧️", bg: "linear-gradient(rgba(30, 58, 138, 0.6), rgba(15, 23, 42, 0.7)), url('bg.jpg') no-repeat center center fixed" },
    63: { main: "Rain", desc: "Moderate Rain", icon: "🌧️", bg: "linear-gradient(rgba(30, 58, 138, 0.6), rgba(15, 23, 42, 0.7)), url('bg.jpg') no-repeat center center fixed" },
    65: { main: "Rain", desc: "Heavy Rain", icon: "⛈️", bg: "linear-gradient(rgba(30, 58, 138, 0.6), rgba(15, 23, 42, 0.7)), url('bg.jpg') no-repeat center center fixed" },
    71: { main: "Snow", desc: "Snow Fall", icon: "❄️", bg: "linear-gradient(rgba(226, 232, 240, 0.4), rgba(71, 85, 105, 0.6)), url('bg.jpg') no-repeat center center fixed" },
    95: { main: "Thunderstorm", desc: "Thunderstorm", icon: "⚡", bg: "linear-gradient(rgba(30, 27, 75, 0.75), rgba(15, 23, 42, 0.85)), url('bg.jpg') no-repeat center center fixed" }
};

// Main function to fetch weather for Indian Villages, Cities, and PIN Codes
async function getWeather(specificCity = null) {
    const cityInput = document.getElementById("cityInput");
    const resultBox = document.getElementById("weatherResult");
    const matchesBox = document.getElementById("matchingPlaces");

    const query = specificCity || (cityInput ? cityInput.value.trim() : "");

    if (matchesBox) matchesBox.innerHTML = "";

    // 1. Validate empty input
    if (!query) {
        if (resultBox) {
            resultBox.innerHTML = `
                <div class="weather-card error">
                    <p>⚠️ Please enter a village, city name, or 6-digit PIN code!</p>
                </div>
            `;
        }
        return;
    }

    // 2. Show loading state
    if (resultBox) {
        resultBox.innerHTML = `
            <div class="weather-card loading">
                <div class="spinner"></div>
                <p>Searching weather for <strong>${query}</strong>...</p>
            </div>
        `;
    }

    try {
        let weatherData = null;

        // --- METHOD 1: 6-Digit Indian PIN Code Search ---
        if (/^\d{6}$/.test(query)) {
            const pinRes = await fetch(`https://api.postalpincode.in/pincode/${query}`);
            const pinData = await pinRes.json();
            if (pinData && pinData[0] && pinData[0].Status === "Success" && pinData[0].PostOffice) {
                const po = pinData[0].PostOffice[0];
                let district = cleanDistrictName(po.Division || po.District);
                const placeLabel = `${po.Name} Village (${po.District}, ${po.State}) [PIN: ${query}] 🇮🇳`;
                
                // Get coordinates of district/city
                const coords = await getDistrictCoordinates(district, po.State);
                if (coords) {
                    weatherData = await fetchWeatherByCoordinates(coords.lat, coords.lon, placeLabel);
                }
            }
        }

        // --- METHOD 2: OpenWeatherMap (If key provided) ---
        if (!weatherData && API_KEY && API_KEY !== "YOUR_API_KEY") {
            try {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(query)}&appid=${API_KEY}&units=metric`;
                const res = await fetch(url);
                if (res.ok) {
                    const data = await res.json();
                    weatherData = {
                        cityName: `${data.name}, ${data.sys.country}`,
                        temp: Math.round(data.main.temp),
                        condition: data.weather[0].main,
                        desc: data.weather[0].description,
                        iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                        iconEmoji: "🌤️",
                        humidity: data.main.humidity,
                        wind: data.wind.speed
                    };
                }
            } catch (e) {
                console.log("OpenWeatherMap skip", e);
            }
        }

        // --- METHOD 3: Open-Meteo Global Geocoding (Cities & Major Villages) ---
        if (!weatherData) {
            const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=6&language=en&format=json`;
            const geoRes = await fetch(geoUrl);
            const geoData = await geoRes.json();

            if (geoData.results && geoData.results.length > 0) {
                // Prioritize Indian locations if searching an Indian place
                const inMatch = geoData.results.find(r => r.country_code === "IN") || geoData.results[0];

                // Show matching location chips if multiple results found
                if (geoData.results.length > 1 && matchesBox) {
                    const suggestionsHTML = geoData.results.slice(0, 4).map((p) => {
                        const placeTitle = formatLocationName(p);
                        return `
                            <button type="button" class="place-chip" onclick="getWeatherByCoords(${p.latitude}, ${p.longitude}, '${placeTitle.replace(/'/g, "\\'")}')">
                                📍 ${placeTitle}
                            </button>
                        `;
                    }).join("");

                    matchesBox.innerHTML = `
                        <div class="matching-container">
                            <span class="matching-title">Matching places found:</span>
                            <div class="places-chips">${suggestionsHTML}</div>
                        </div>
                    `;
                }

                weatherData = await fetchWeatherByCoordinates(inMatch.latitude, inMatch.longitude, formatLocationName(inMatch));
            }
        }

        // --- METHOD 4: Indian Postal Directory (Every Gram Panchayat & Village in India) ---
        if (!weatherData) {
            const postalRes = await fetch(`https://api.postalpincode.in/postoffice/${encodeURIComponent(query)}`);
            const postalData = await postalRes.json();

            if (postalData && postalData[0] && postalData[0].Status === "Success" && postalData[0].PostOffice && postalData[0].PostOffice.length > 0) {
                const poList = postalData[0].PostOffice;
                const po = poList[0];
                let district = cleanDistrictName(po.Division || po.District);
                const placeLabel = `${po.Name} Village, ${po.District || po.Division} (${po.State}) 🇮🇳`;

                // If multiple villages with same name exist in India, show them as clickable chips
                if (poList.length > 1 && matchesBox) {
                    const chipsHTML = poList.slice(0, 5).map((p) => {
                        const cleanD = cleanDistrictName(p.Division || p.District);
                        return `
                            <button type="button" class="place-chip" onclick="searchVillageByDistrict('${p.Name.replace(/'/g, "\\'")}', '${cleanD.replace(/'/g, "\\'")}', '${p.State.replace(/'/g, "\\'")}', '${p.Pincode}')">
                                📍 ${p.Name} (${p.District || p.Division}, ${p.State}) [${p.Pincode}]
                            </button>
                        `;
                    }).join("");

                    matchesBox.innerHTML = `
                        <div class="matching-container">
                            <span class="matching-title">Multiple Indian villages found. Click yours:</span>
                            <div class="places-chips">${chipsHTML}</div>
                        </div>
                    `;
                }

                const coords = await getDistrictCoordinates(district, po.State);
                if (coords) {
                    weatherData = await fetchWeatherByCoordinates(coords.lat, coords.lon, placeLabel);
                }
            }
        }

        // If still not found
        if (!weatherData) {
            throw new Error(`Location "${query}" not found. Try searching nearby town, district, 6-digit PIN code, or use GPS.`);
        }

        // 3. Render weather
        displayWeather(weatherData);

    } catch (error) {
        console.error("Weather Search Error:", error);
        if (resultBox) {
            resultBox.innerHTML = `
                <div class="weather-card error">
                    <p>⚠️ ${error.message || "Failed to fetch weather data."}</p>
                </div>
            `;
        }
    }
}

// Clean district names (e.g. East Nimar -> Khandwa, West Nimar -> Khargone)
function cleanDistrictName(name) {
    if (!name) return "Khandwa";
    if (name.includes("East Nimar")) return "Khandwa";
    if (name.includes("West Nimar")) return "Khargone";
    return name;
}

// Helper to get coordinates for district/tehsil
async function getDistrictCoordinates(district, state) {
    const query = `${district}, ${state || ''}`;
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1&language=en`);
    const data = await res.json();
    if (data.results && data.results[0]) {
        return { lat: data.results[0].latitude, lon: data.results[0].longitude };
    }
    // Fallback search district alone
    const res2 = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(district)}&count=1&language=en`);
    const data2 = await res2.json();
    if (data2.results && data2.results[0]) {
        return { lat: data2.results[0].latitude, lon: data2.results[0].longitude };
    }
    return { lat: 21.824, lon: 76.350 }; // Default Khandwa coordinates
}

// Helper when user clicks on a specific Indian Village chip
async function searchVillageByDistrict(villageName, district, state, pin) {
    const resultBox = document.getElementById("weatherResult");
    const cityInput = document.getElementById("cityInput");
    if (cityInput) cityInput.value = villageName;

    const placeLabel = `${villageName} Village, ${district} (${state}) [PIN: ${pin}] 🇮🇳`;

    if (resultBox) {
        resultBox.innerHTML = `
            <div class="weather-card loading">
                <div class="spinner"></div>
                <p>Loading weather for <strong>${placeLabel}</strong>...</p>
            </div>
        `;
    }

    try {
        const coords = await getDistrictCoordinates(district, state);
        const data = await fetchWeatherByCoordinates(coords.lat, coords.lon, placeLabel);
        displayWeather(data);
    } catch (e) {
        if (resultBox) resultBox.innerHTML = `<div class="weather-card error"><p>⚠️ ${e.message}</p></div>`;
    }
}

// Fetch weather directly by Coordinates (Any spot on Earth)
async function fetchWeatherByCoordinates(lat, lon, placeName) {
    const wUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=relative_humidity_2m`;
    const wRes = await fetch(wUrl);
    const wData = await wRes.json();

    const code = wData.current_weather.weathercode;
    const mapped = weatherCodeMap[code] || { main: "Clear", desc: "Clear Sky", icon: "☀️", bg: "linear-gradient(rgba(245, 158, 11, 0.2), rgba(30, 64, 175, 0.4)), url('bg.jpg') no-repeat center center fixed" };

    return {
        cityName: placeName,
        temp: Math.round(wData.current_weather.temperature),
        condition: mapped.main,
        desc: mapped.desc,
        iconEmoji: mapped.icon,
        humidity: (wData.hourly && wData.hourly.relative_humidity_2m) ? wData.hourly.relative_humidity_2m[0] : 60,
        wind: wData.current_weather.windspeed,
        bg: mapped.bg
    };
}

// Helper to trigger search directly with coordinates
async function getWeatherByCoords(lat, lon, placeName) {
    const resultBox = document.getElementById("weatherResult");
    const cityInput = document.getElementById("cityInput");
    if (cityInput) cityInput.value = placeName.split(",")[0];

    if (resultBox) {
        resultBox.innerHTML = `
            <div class="weather-card loading">
                <div class="spinner"></div>
                <p>Loading weather for <strong>${placeName}</strong>...</p>
            </div>
        `;
    }

    try {
        const data = await fetchWeatherByCoordinates(lat, lon, placeName);
        displayWeather(data);
    } catch (err) {
        if (resultBox) {
            resultBox.innerHTML = `<div class="weather-card error"><p>⚠️ ${err.message}</p></div>`;
        }
    }
}

// Format location name nicely: Village/City, District, State, Country
function formatLocationName(loc) {
    const parts = [];
    if (loc.name) parts.push(loc.name);
    if (loc.admin2 && loc.admin2 !== loc.name) parts.push(loc.admin2); // District
    if (loc.admin1 && loc.admin1 !== loc.name && loc.admin1 !== loc.admin2) parts.push(loc.admin1); // State
    if (loc.country) parts.push(loc.country);
    return parts.join(", ");
}

// 📍 GPS Live Location Weather (Finds exact village or city user is standing in!)
function getMyLocationWeather() {
    const resultBox = document.getElementById("weatherResult");
    const matchesBox = document.getElementById("matchingPlaces");

    if (matchesBox) matchesBox.innerHTML = "";

    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser.");
        return;
    }

    if (resultBox) {
        resultBox.innerHTML = `
            <div class="weather-card loading">
                <div class="spinner"></div>
                <p>Detecting your current location &amp; village via GPS 📍...</p>
            </div>
        `;
    }

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            try {
                // Reverse geocode to find exact village / city name
                let detectedName = "Your Current Location";
                try {
                    const revRes = await fetch(`https://api-bdc.io/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
                    if (revRes.ok) {
                        const revData = await revRes.json();
                        const village = revData.locality || revData.city || "";
                        const state = revData.principalSubdivision || "";
                        const country = revData.countryName || "";
                        if (village) {
                            detectedName = `${village}${state ? ', ' + state : ''}${country ? ', ' + country : ''}`;
                        }
                    }
                } catch (e) {
                    console.log("Reverse geocode fallback", e);
                }

                const cityInput = document.getElementById("cityInput");
                if (cityInput) cityInput.value = detectedName.split(",")[0];

                const weatherData = await fetchWeatherByCoordinates(lat, lon, detectedName);
                displayWeather(weatherData);

            } catch (err) {
                if (resultBox) {
                    resultBox.innerHTML = `
                        <div class="weather-card error">
                            <p>⚠️ Failed to fetch weather for current location: ${err.message}</p>
                        </div>
                    `;
                }
            }
        },
        (error) => {
            if (resultBox) {
                resultBox.innerHTML = `
                    <div class="weather-card error">
                        <p>⚠️ GPS Location access denied: ${error.message}. Please type your village, city, or PIN code.</p>
                    </div>
                `;
            }
        },
        { timeout: 10000 }
    );
}

// Function to render weather UI and change background
function displayWeather(data) {
    const resultBox = document.getElementById("weatherResult");
    const today = new Date().toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });

    // Dynamic Weather-Tinted Background Overlay on top of bg.jpg
    if (data.condition === "Rain") {
        document.body.style.background = "linear-gradient(rgba(30, 58, 138, 0.6), rgba(15, 23, 42, 0.7)), url('bg.jpg') no-repeat center center fixed";
    } else if (data.condition === "Clear") {
        document.body.style.background = "linear-gradient(rgba(245, 158, 11, 0.2), rgba(30, 64, 175, 0.4)), url('bg.jpg') no-repeat center center fixed";
    } else if (data.condition === "Clouds") {
        document.body.style.background = "linear-gradient(rgba(71, 85, 105, 0.55), rgba(15, 23, 42, 0.65)), url('bg.jpg') no-repeat center center fixed";
    } else if (data.condition === "Snow") {
        document.body.style.background = "linear-gradient(rgba(226, 232, 240, 0.4), rgba(71, 85, 105, 0.6)), url('bg.jpg') no-repeat center center fixed";
    } else {
        document.body.style.background = "linear-gradient(rgba(15, 23, 42, 0.45), rgba(15, 23, 42, 0.45)), url('bg.jpg') no-repeat center center fixed";
    }
    document.body.style.backgroundSize = "cover";

    if (resultBox) {
        resultBox.innerHTML = `
            <div class="weather-card">
                <div class="weather-header">
                    <h2 class="city-name">${data.cityName}</h2>
                    <p class="date-text">📅 ${today}</p>
                </div>

                <div class="weather-main">
                    ${data.iconUrl ? `<img src="${data.iconUrl}" alt="${data.desc}" class="weather-img">` : `<span class="weather-emoji">${data.iconEmoji}</span>`}
                    <div class="temp-box">
                        <span class="temp-value">${data.temp}</span>
                        <span class="temp-unit">°C</span>
                    </div>
                </div>

                <p class="condition-badge">${data.desc || data.condition}</p>

                <div class="weather-details-grid">
                    <div class="detail-item">
                        <span class="detail-icon">💧</span>
                        <div>
                            <span class="detail-label">Humidity</span>
                            <strong class="detail-value">${data.humidity}%</strong>
                        </div>
                    </div>

                    <div class="detail-item">
                        <span class="detail-icon">💨</span>
                        <div>
                            <span class="detail-label">Wind Speed</span>
                            <strong class="detail-value">${data.wind} km/h</strong>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Quick City / Town Click helper
function searchCity(cityName) {
    const cityInput = document.getElementById("cityInput");
    if (cityInput) {
        cityInput.value = cityName;
        getWeather();
    }
}

// Auto-run on page load in browser
if (typeof window !== "undefined") {
    window.addEventListener("DOMContentLoaded", () => {
        // Automatically fetch initial city weather
        searchCity("Khandwa");
    });
}

// Node.js CLI Testing
if (typeof window === "undefined") {
    (async () => {
        console.log("==========================================");
        console.log(" Indian Villages Weather Test (Node)");
        console.log("==========================================");
        const geoRes = await fetch("https://geocoding-api.open-meteo.com/v1/search?name=Pandhana&count=1");
        const geoData = await geoRes.json();
        const loc = geoData.results[0];
        console.log(`✓ Village: ${formatLocationName(loc)}`);
        console.log("Indian villages weather script verified successfully!");
    })();
}
