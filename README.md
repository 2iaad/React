# What is React?

React is a JavaScript library used to build user interfaces (UI) — web pages made of small reusable parts called components.
React is all about "UI = components + state".

# What is a Component?

A component is simply:
➡️ A function that returns JSX (HTML-like code).
➡️ It represents one part of your UI.
Examples of components: A button, A navigation bar.

# What is State

its what makes components alive, React components can have state, which is data that can change.
When state changes → React re-renders the component without refreshing the intire webpage.

---

# Creating a React app using Vite (step-by-step)
`npm create vite@latest my-react --template react`

-> npm:                 node package manager - it runs commands and installs packages.
-> create:              create project.
-> vite@latest:         use Vite project generator +  use the latest version.
-> my-react:            name of the project folder that Vite will create.
-> --template react:    Vite supports many frameworks: vanilla JS, Vue, React, Svelte, Lit, Preact. this flag tells Vite to create a project using the React template.


# When we create a Vite + React project, the directory structure looks like this:

my-react/          ← your project root
├─ node_modules/   ← installed dependencies
├─ public/         ← static assets like favicon, vite.svg
├─ src/            ← your source code (React components live here)
│    ├─ assets/    ← images, logos, etc.
│    ├─ App.jsx    ← main App component
│    ├─ main.jsx   ← entry point (renders App)
│    ├─ App.css    ← CSS for App
├─ index.html      ← HTML template
├─ package.json
└─ vite.config.js  ← Vite config file

# Difference between live server & Vite server:

| Feature                      | Live Server | Vite Dev Server |
| ------------------------------------------------------------ |
| Serves static files           | ✅          | ✅               |
| JSX transpilation            | ❌          | ✅               | => convert code to JavaScript that browsers understand.
| npm package imports          | ❌          | ✅               |
| Hot Module Replacement (HMR) | ❌          | ✅               | => Updates only the changed components not the intire page.
----------------------------------------------------------------

# Difference between a Library and a Framework

Library is just a collection of predefined functions, tools, or modules that you can call without recoding them, React is technically a library, because you import and use the pieces you need from the library.


Framework is like a predefined skeleton for an application (Template / Structure), It tells  where to put folders, files, routing, components, etc.
Example:
    pages/
        |__ index.jsx
        |__ about.jsx
    components/
        |__ Header.jsx
        |__ Footer.jsx
-> You fill in the “logic and content” inside the structure/framework & theframework calls your code at the right time.