import globe from '../assets/globe.png'
import './Header.css'

export default function Header()
{
    return (
        <div id="header">
            <img src={globe} alt='globe photo'/>
            <p>my travel journal.</p>
        </div>
    )
}