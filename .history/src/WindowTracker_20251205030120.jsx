import React from "react"

export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
    React.useEffect(() => {

        function doWhenResize()
        {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", doWhenResize())
        return function() {
            console.log("Cleaned Up")
            window.removeEventListener("resize", doWhenResize())
            }
        
    }, [])
    
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
