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

## 🚀 Features

### ✅ Add ingredients

Users can type ingredients one by one. Ingredients are stored using React state.

### ✅ AI-generated recipe

The app sends the list of ingredients to Gemini (`fetch()` + API key from `.env`).
It returns a structured recipe in Markdown.

### ✅ Markdown rendering

AI responses are rendered on screen using `react-markdown` + `remark-gfm` for better formatting.

### ✅ Clean component structure

The UI is split into small reusable components:

* `App-Header.jsx`
* `Main-Intro.jsx`
* `Main-Form.jsx`
* `Main-ReqRecommendation.jsx`
* `Main-ClaudeRecipe.jsx`
* `Ai.js` (API logic)

---

## 🧠 What I Learned (React, JS, API, AI)

### **🌱 React Concepts**

* `useState()` — storing and updating state (ingredients list, recipe text)
* Controlled vs uncontrolled inputs
* Component props
* Conditional rendering (`ingredients.length ? ... : ...`)
* `.map()` to render lists
* Splitting UI into reusable components
* Importing images inside React
* Passing event handlers as props
* Basic CSS for component-scoped UI

### **⚙️ API & AI Concepts**

* How to call an API using `fetch()`
* How to format a proper POST request (method, headers, body)
* Using `.env` to hide the API key (`VITE_API_KEY`)
* Accessing environment variables in Vite:

  ```js
  import.meta.env.VITE_API_KEY
  ```
* Structuring AI prompts (system prompt + user ingredients)
* Understanding AI responses and extracting the text:

  ```js
  data.candidates[0].content.parts[0].text
  ```



---



## 🔑 Environment Variables Setup

Create a file:

```
.env
```

Inside:

```
VITE_API_KEY=your_api_key_here
VITE_AI_PROMPT=Your system prompt here...
```

Vite exposes variables through:

```js
import.meta.env.VITE_API_KEY
```

---

## 🧪 Running the Project

```bash
npm install
npm run dev
```

---

## 🛠 Future Improvements

* Save ingredient list to localStorage
* Add loading states
* Add ability to regenerate recipe
* Add multiple recipes option
* Add voice input for ingredients

---

## 💬 About This Project

This project was built to practice and combine:

* React + components
* Props + state
* Mapping + conditional rendering
* API authentication with `.env`
* Working with Google Gemini API
* Parsing AI responses
* Rendering Markdown inside React

A perfect real-world exercise to practice modern web development with AI.

---
