export default function Number(props)
{
    const styles = {
        backgroundColor: props.isFrozen ? "grey" : "white"
    }
    
    return (
        <div 
            style={styles} 
            className="number-div" 

            id={props.id}
            onClick={() => props.toggleFreeze(props.id)}
            /*
                1. props.toggleFreeze(props.id) -> You are calling the function immediately.
                2. () => props.toggleFreeze(props.id) -> You are giving React a function it can call later when the click happens.
            */
        >
            <p>{props.value}</p>
        </div>
    )
}