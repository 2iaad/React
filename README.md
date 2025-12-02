# 👨‍🍳 Chef Claude — AI Recipe Generator

Chef Claude is a simple web application that generates a cooking recipe based on the ingredients the user has.
You type your ingredients → the app sends them to the Gemini AI API → the AI generates a full recipe → the app displays it beautifully in Markdown.

This project was built using **React + Vite**, **Google Gemini API**, and clean **JavaScript**.

## 📌 Overview


This project helped me practice React fundamentals, working with API calls, environment variables, form handling, and AI prompt engineering.

![App Screenshot](./public/Screenshot%202025-12-03%20at%2000.10.22.png)

---

## 📦 Project Structure (Vite + React)

```
my-react/
│   index.html
│   vite.config.js
│   package.json
│
└───src/
     Ai.js
     App.jsx
     App-Header.jsx
     App-Main.jsx
     Main-Intro.jsx
     Main-Form.jsx
     Main-ClaudeRecipe.jsx
     Main-ReqRecommendation.jsx
     index.css
     index.jsx
     images/
```

---

### ✅ Clean component structure

The UI is split into small reusable components:

* `App-Header.jsx`
* `Main-Intro.jsx`
* `Main-Form.jsx`
* `Main-ReqRecommendation.jsx`
* `Main-ClaudeRecipe.jsx`
* `Ai.js` (API logic)

---

### Features

Add ingredients dynamically

Generate recipe using Google Gemini API

Markdown rendering for clean and readable recipes

Clean UI with React components

Completely client-side (no backend)


### **🧩 JavaScript Concepts**

* Arrow functions
* Spread syntax (`...prevIngredients`)
* JSON.stringify()
* Template literals
* Destructuring props
* Async/await for API calls

---

## 🔧 Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Create `.env` file

```
VITE_API_KEY=your_gemini_key_here
VITE_AI_PROMPT=your_system_prompt_here
```

### 3. Run the app

```bash
npm run dev
```

---

## 🍽️ Example Ingredients

You can test the app with:

```
tomatoes, potatoes, salt, garlic, milk
```

---

## 📄 License

Free to use for learning and personal projects.

---
