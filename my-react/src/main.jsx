import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Imports CSS file, Vite automatically injects it into the page.
// import App from './App.jsx'

const root = createRoot(document.getElementById("root")); // setting React mount point

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );

root.render(<h1>salam</h1>) // Render JSX inside the root element.