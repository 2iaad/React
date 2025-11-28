import './components/Card.css'
import './main.css'

import Header from './components/Header'
import Card from './components/Card'
import data from './components/data.js'

import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById("root"));

function App()
{
    const cards = data.map(element => {
        return (
            <Card
                key={element.id}
                img={element.img}
                title={element.title}
                country={element.country}
                googleMapsLink={element.googleMapsLink}
                dates={element.dates}
                text={element.text}
            />
        )
    })

    return (
        <>
            <Header/>
            <div id="out-wrapper">
                {cards}
            </div>
        </>
    )
}

root.render(
    <App/>
)