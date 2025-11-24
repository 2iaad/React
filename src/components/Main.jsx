import randomName from './data'
import Marker from '../assets/marker.png'
import './Main.css'

export default function Main() {
    return (
        <div id="out-wrapper">
            <div class="in-wrapper">
                <img class="image" src={randomName[0].img.src} alt={randomName[0].img.alt} />

                <div class="infos">
                    <p> <img class="marker" src={Marker} /> {randomName[0].country} <a class="maps-link" target="_blank" href={randomName[0].googleMapsLink} >View on Google Maps</a></p>
                    <h1>{randomName[0].title}</h1>
                    <br/>
                    <strong class="date" >{randomName[0].dates}</strong>
                    <p>{randomName[0].text}</p>
                </div>

            </div>

            <hr></hr>

            <div class="in-wrapper">
                <img class="image" src={randomName[1].img.src} alt={randomName[1].img.alt} />

                <div class="infos">
                    <p> <img class="marker" src={Marker} /> {randomName[1].country} <a class="maps-link" target="_blank" href={randomName[1].googleMapsLink} >View on Google Maps</a></p>
                    <h1>{randomName[1].title}</h1>
                    <br/>
                    <strong class="date" >{randomName[1].dates}</strong>
                    <p>{randomName[1].text}</p>
                </div>

            </div>

            <hr></hr>

            <div class="in-wrapper">
                <img class="image" src={randomName[2].img.src} alt={randomName[2].img.alt} />

                <div class="infos">
                    <p> <img class="marker" src={Marker} /> {randomName[2].country} <a class="maps-link" target="_blank" href={randomName[2].googleMapsLink} >View on Google Maps</a></p>
                    <h1>{randomName[2].title}</h1>
                    <br/>
                    <strong class="date" >{randomName[2].dates}</strong>
                    <p>{randomName[2].text}</p>
                </div>

            </div>
        </div>
    )
}