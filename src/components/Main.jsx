import { useState } from 'react';
import Number from './Number'


export default function Main() {
    
    const [numbers, setNumbers] = useState(
    [{  id: 1,  value: Math.floor(Math.random() * 10)  },
        {   id: 2,  isHeld: false,   value: Math.floor(Math.random() * 10)  },
        {   id: 3,  isHeld: false,   value: Math.floor(Math.random() * 10)  },
        {   id: 4,  isHeld: false,   value: Math.floor(Math.random() * 10)  },
        {   id: 5,  isHeld: false,   value: Math.floor(Math.random() * 10)  },
        {   id: 6,  isHeld: false,   value: Math.floor(Math.random() * 10)  },
        {   id: 7,  isHeld: false,   value: Math.floor(Math.random() * 10)  },
        {   id: 8,  isHeld: false,   value: Math.floor(Math.random() * 10)  },
        {   id: 9,  isHeld: false,   value: Math.floor(Math.random() * 10)  },
        {   id: 10, isHeld: false,   value: Math.floor(Math.random() * 10)  }]
    );
    
/*
    const [numbers, setNumbers] = useState(
        Array.from( { length: 10 },
        (_, i) => ({
            id: i + 1,
            value: Math.floor(Math.random() * 10)
        }))
    );
*/
    const numbersRender = numbers.map(element => {
        return (
            <Number
                key={element.id}
                value={element.value}
            />
        )
    })

    function handleRoll() {

        setNumbers(
        numbers.map((n) => ({
            ...n,
            value: Math.floor(Math.random() * 10),
        }))
        );
    }
    
    return (
        <main>
            <div id="numbers">
                {numbersRender}
            </div>

            <button onClick={handleRoll} id='button'>Roll</button>
        </main>
    )
}