import randomName from './data'
import Marker from '../assets/marker.png'
import './Main.css'


const newArray = randomName.map(function(element) {
    function Card()
    {
        
    }

    return (
        <Card
            id={element.id}
            img={{
                src : element.img.src,
                alt : element.img.alt
            }}
            title={element.title}
            country={element.country}
            googleMapsLink={element.googleMapsLink}
            dates={element.dates}
            text={element.text}
        />
    )
})

export default function Main() {
    return (
        <div id="out-wrapper">
            <div className="in-wrapper">
                <img className="image" src={randomName[0].img.src} alt={randomName[0].img.alt} />

                <div className="infos">
                    <p> <img className="marker" src={Marker} /> {randomName[0].country} <a className="maps-link" target="_blank" href={randomName[0].googleMapsLink} >View on Google Maps</a></p>
                    <h1>{randomName[0].title}</h1>
                    <br/>
                    <strong className="date" >{randomName[0].dates}</strong>
                    <p>{randomName[0].text}</p>
                </div>

            </div>

            <hr></hr>
        </div>
    )
}