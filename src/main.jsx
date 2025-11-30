import { createRoot } from 'react-dom/client'
import { App1 } from './App.jsx'
import { App2 } from './App.jsx'
import { App3 } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App1 />
    <hr/>
    <App2 />
    <hr/>
    <App3/>
  </>
)
