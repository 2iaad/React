export default function Number(props)
{
    return (
        <div className="number-div" id={props.key}>
            <p>{props.value}</p>
        </div>
    )
}