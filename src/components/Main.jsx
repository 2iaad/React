import Number from './Number'

let numbers = [
    {   id: 1,  value: Math.floor(Math.random() * 100)  },
    {   id: 2,  value: Math.floor(Math.random() * 100)  },
    {   id: 3,  value: Math.floor(Math.random() * 100)  },
    {   id: 4,  value: Math.floor(Math.random() * 100)  },
    {   id: 5,  value: Math.floor(Math.random() * 100)  },
    {   id: 6,  value: Math.floor(Math.random() * 100)  },
    {   id: 7,  value: Math.floor(Math.random() * 100)  },
    {   id: 8,  value: Math.floor(Math.random() * 100)  },
    {   id: 9,  value: Math.floor(Math.random() * 100)  },
    {   id: 10, value: Math.floor(Math.random() * 100)  }
]

export default function Main() {

    const number = numbers.map(element => {
        return (
            <Number
                key={element.id}
                value={element.value}
            />
        )
    })

    return (
        <main>
            <div id="numbers">
                {number}
            </div>

            <button id='button'>Roll</button>
        </main>
    )
}