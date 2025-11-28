import './components/Card.css'
import './main.css'

import Header from './components/Header'
import Card from './components/Card'
import data from './components/data.js'

import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById("root"));

/*
    Card() = “When you show ONE card, show it like this.”
    Data.map() = “Create one <Card /> for every element in the Data array + pass the appriopriate props"
*/


function App()
{
    const cards = data.map(element => { // For each element in Data, we create <Card/> component.
        return (
            <Card
                key={element.id} // keys is how react identify each element
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