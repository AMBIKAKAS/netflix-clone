# 📺 Netflix Clone 🎥

A **Netflix-inspired web app** built with **React.js**, **JavaScript**, and **Firebase**, replicating the core UI/UX of Netflix — including user authentication, movie cards, trailer playback, and protected routes. This project was developed to enhance modern web development skills through real-world implementation.

---

## 📸 Screenshots
<p align="center">
  <img src="./SCREENSHOTS/Landing.png" width="700" />
  <img src="./screenshots/library.png" width="700" />
  <img src="./screenshots/library2.png" width="700" />
  <img src="./screenshots/Signup.png" width="700" />
</p>


## 🛠️ Tech Stack

| Technology        | Purpose                                       |
|-------------------|-----------------------------------------------|
| **React.js**       | Component-based architecture, routing         |
| **JavaScript (ES6)**| Core scripting and interactivity             |
| **Firebase**       | Authentication and Firestore database         |
| **OMDB API**       | Movie and trailer data fetching               |
| **React Router**   | Navigation and protected routes               |
| **React Toastify** | User feedback via toast notifications         |

---

## 🔑 Key Features

- ✅ **Firebase Authentication** (Sign Up / Login / Logout)
- 🎞️ **Browse Movies** by categories (e.g., Comedy, Avengers, etc.)
- 🎬 **Play Trailers** using YouTube embed via OMDB
- 🔐 **Protected Routes** — Access trailers only after login
- 🗃️ **Firestore Integration** for storing user data
- 📱 **Fully Responsive Design** (mobile-first approach)
- 🧩 **Modular Components** for clean, reusable code
- 🔔 **Toast Notifications** for success/error feedback

---

## 📚 Learning Outcomes

- Mastered **React Router**, dynamic rendering & conditional UI
- Integrated **Firebase Auth & Firestore** in a real-world setup
- Fetched data using **OMDB API + YouTube trailers**
- Built a responsive layout using **CSS media queries**
- Deepened knowledge of **React Hooks** (`useEffect`, `useState`)
- Gained experience in **modularizing React components**

---

## 🗂️ Folder Structure

/src
│
├── components/
│ ├── Navbar.js
│ ├── TitleCards.js
│ └── Player.js
│
├── pages/
│ ├── Home.js
│ ├── Login.js
│ └── Signup.js
│
├── assets/
│ └── back_arrow_icon.png
│
├── App.js
├── firebaseConfig.js
└── index.js

yaml
Copy
Edit

---

## 🔐 Firebase Configuration (Sample)

```js
const firebaseConfig = {
  apiKey: "AIzaSyB6iqq6xMKrjGx6oL5_DdIqqwA2gSJI1zw",
  authDomain: "netflix-clone-143.firebaseapp.com",
  projectId: "netflix-clone-143",
  storageBucket: "netflix-clone-143.appspot.com",
  messagingSenderId: "544922035529",
  appId: "1:544922035529:web:912a74c9be534ed352a698",
  measurementId: "G-SS79VPD048"
};
⚠️ Note: Store credentials securely in .env for production environments.

🚀 How to Run Locally
bash
Copy
Edit
# 1. Clone the repository
git clone https://github.com/AMBIKAKAS/netflix-clone.git

# 2. Navigate to the project directory
cd netflix-clone

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
🌐 APIs Used
🎬 OMDB API — For fetching movie and trailer data

🔐 Firebase Auth — For secure user login/signup

🔄 Firestore DB — For storing user profile data

✨ Author
Made with ❤️ by Ambika Kashyap
GitHub: @AMBIKAKAS
