import RandomData from './RandomData.jsx'

function Card(props) {
  return (
    <div>
      <h3 id={props.id} >{props.firstKey}</h3>
      <p id={props.id} >{props.secondKey}</p>
    </div>
  )
}


export default function App()
{
    const newRandomData = RandomData.map((element, index) => {
        return  (
          <Card key={index}
                id={index}
                firstKey={element.firstKey}
                secondKey={element.secondKey}/>
                )
    })
    return (
        <main>
            {newRandomData}
        </main>
    )
}