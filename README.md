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
