export default function Header()
{
    const headerName = "Tenzies"
    const intro = "Roll untill all die are the same. Click each dice to freeze it at its current value between rolls."
    
    return (
        <header>
            <h1>{headerName}</h1>
            <p>{intro}</p>
        </header>
    )
}