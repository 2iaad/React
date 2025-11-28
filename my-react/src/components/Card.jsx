import Marker from './../assets/marker.png'

export default function Card(props)
{
    return (
        <>
            <div className="in-wrapper">
                <img className="image" src={props.img.src} alt={props.img.alt} />

                <div className="infos">
                    <p> <img className="marker" src={Marker} /> {props.country} <a className="maps-link" target="_blank" href={props.googleMapsLink} >View on Google Maps</a></p>
                    <h1>{props.title}</h1>
                    <br/>
                    <strong className="date" >{props.dates}</strong>
                    <p>{props.text}</p>
                </div>

            </div>

            <hr></hr>
        </>
    )
}
