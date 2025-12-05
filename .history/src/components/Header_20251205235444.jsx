export default function Header()
{
    const headerName = "Tenzies"
    const intro = "Roll untill all dice are the same. Click each die to freeze it at its current value between rolls."
    
    return (
        <header>
            
            <h1>{headerName}</h1>
            <p>{intro}</p>
        </header>
    )
}