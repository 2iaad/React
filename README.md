# What is React?

**React is a JavaScript library that supports composability, which means you can create small, reusable pieces of code called components and combine them to build large, scalable, and maintainable web applications.**
- Each component can manage its own state and UI logic.
- Components can be nested, meaning small components can be combined into bigger ones.
- This approach makes your code modular, reusable, and easier to maintain.

# What is a Component?

A component is simply:
➡️ A function that returns a React elements (HTML-like code).
➡️ It represents one part of your UI.
Examples of components: A button, A navigation bar.
    -> React components must start with a capital letter.
# What is State?

its what makes components alive, React components can have state, which is data that can change.
When state changes → React re-renders the component without refreshing the intire webpage.

# What do we mean by *composable*?

In React, “composable” basically means something can be built by combining smaller pieces (components) together.
-   You can build large apps from small, testable, and reusable components.
-   Makes your code cleaner, easier to maintain, and scalable.

---

# Difference between vanilla JS and React

-> *vanilla JS (imperative)* -> you explicitly instruct how to find the element, what to change, and how.
```
const root = document.getElementById("root");

const element = document.createElement("h1");
element.innerText = "Created using Vanilla JS";
element.className = "header";

root.appendChild(element);
```

-> *React (Declarative)* -> You tell the computer what you want, and it figures out how to do it.
```
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <h1 className="header">Created using React</h1>
);
```

- Vanilla JS: You manually create and update DOM elements.
- React: You describe the UI with JSX, and React updates the DOM for you.

---
# Creating a React app using Vite (step-by-step)
`npm create vite@latest my-react --template react`

-> npm:                 node package manager - it runs commands and installs packages.

-> create:              create project.

-> vite@latest:         use Vite project generator +  use the latest version.

-> my-react:            name of the project folder that Vite will create.

-> --template react:    Vite supports many frameworks: vanilla JS, Vue, React, Svelte, Lit, Preact. this flag tells Vite to create a project using the React template.



# When we create a Vite + React project, the directory structure looks like this:

```
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
```
# Difference between live server & Vite server:

```
| Feature                      | Live Server | Vite Dev Server |
| ------------------------------------------------------------ |
| Serves static files           | ✅          | ✅               |
| JSX transpilation            | ❌          | ✅               | => convert code to JavaScript that browsers understand.
| npm package imports          | ❌          | ✅               |
| Hot Module Replacement (HMR) | ❌          | ✅               | => Updates only the changed components not the intire page.
----------------------------------------------------------------
```

# Difference between a Library and a Framework

Library is just a collection of predefined functions, tools, or modules that you can call without recoding them, React is technically a library, because you import and use the pieces you need from the library.


Framework is like a predefined skeleton for an application (Template / Structure), It tells  where to put folders, files, routing, components, etc.
Example:
```
    pages/
        |__ index.jsx
        |__ about.jsx
    components/
        |__ Header.jsx
        |__ Footer.jsx
```
-> You fill in the “logic and content” inside the structure/framework & theframework calls your code at the right time.

# Full Tree With DOM + Components

```
html
└── body
    └── div#root
        └── App (React Fragment)
            ├── Header
            │    └── (whatever elements you put inside)
            │
            ├── MainContent
            │    └── (content elements here)
            │
            └── Footer
                 └── (footer elements here)
```


# ✅ React fundamentals i have learned:

✔ Project setup: Setting up React projects using Vite efficiently.

✔ Root rendering: Rendering components into the DOM root element.

✔ Components: Building reusable UI pieces as functional components.

✔ JSX: Writing HTML-like JavaScript syntax for component structures.

✔ Fragments: Grouping elements without adding extra DOM nodes.

✔ Composability: Combining small components to create larger interfaces.

✔ Declarative UI: Describing desired UI results instead of steps.

✔ Basic styling: Applying CSS rules directly to React components.

✔ Asset importing: Importing images or files for React component usage.

✔ Project structure: Organizing files inside clean, scalable project architecture.

✔ Footer layout & page layout: Using flexbox to position footer at bottom.