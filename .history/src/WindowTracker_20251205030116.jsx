import React from "react"

export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
    React.useEffect(() => {

        function doWhenREsize()
        {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", doWhenREsize())
        return function() {
            console.log("Cleaned Up")
            window.removeEventListener("resize", doWhenREsize())
            }
        
    }, [])
    
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
