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
            onClick={props.toggleFreeze}
        >
            <p>{props.value}</p>
        </div>
    )
}