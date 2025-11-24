import './main.css'

import Header from './components/Header'
import Main from './components/Main'

import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById("root"));

function App()
{
    return (
        <>
            <Header/>
            <Main/>
        </>
    )
}

root.render(
    <App/>
)