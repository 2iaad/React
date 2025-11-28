import Data from './components/data'
import Header from './components/Header'
import Card from './components/Card'
import './App.css'

/*
    Card() = “When you show ONE card, show it like this.”
    Data.map() = “Create one <Card /> for every element in the Data array + pass the appriopriate props"
*/

export default function App()
{
    const cards = Data.map(element => { // For each element in Data, we create <Card/> component.
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