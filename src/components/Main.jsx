import Marker from '../assets/marker.png'
import './Main.css'

export default function Main() {
    return (
        <div id="out-wrapper">
            <div class="in-wrapper">
                <img class="image" src="https://scrimba.com/links/travel-journal-japan-image-url" />

                <div class="infos">
                    <p> <img class="marker" src={Marker} /> JAPAN <a class="maps-link" target="_blank" href="https://www.google.com/maps/place/Japan" >View on Google Maps</a></p>
                    <h1>Mount Fuji</h1>
                    <br/>
                    <strong class="date" >12 Jan, 2021 - 24 Jan, 2021</strong>
                    <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>

            </div>

            <hr></hr>

            <div class="in-wrapper">
                <img class="image" src="https://scrimba.com/links/travel-journal-australia-image-url" />

                <div class="infos">
                    <p> <img class="marker" src={Marker} /> JAPAN <a class="maps-link" target="_blank" href="https://www.google.com/maps/place/Australia" >View on Google Maps</a></p>
                    <h1>Mount Fuji</h1>
                    <br/>
                    <strong class="date" >12 Jan, 2021 - 24 Jan, 2021</strong>
                    <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>

            </div>

            <hr></hr>

            <div class="in-wrapper">
                <img class="image" src="https://scrimba.com/links/travel-journal-norway-image-url" />

                <div class="infos">
                    <p> <img class="marker" src={Marker} /> JAPAN <a class="maps-link" target="_blank" href="https://www.google.com/maps/place/Norway" >View on Google Maps</a></p>
                    <h1>Mount Fuji</h1>
                    <br/>
                    <strong class="date" >12 Jan, 2021 - 24 Jan, 2021</strong>
                    <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>

            </div>
        </div>
    )
}