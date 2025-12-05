import React from "react"

export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
    React.useEffect(() => {

        function doWhenRsize()
        {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", doWhenRsize())
        return function() {
            console.log("Cleaned Up")
            window.
            }
        
    }, [])
    
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
