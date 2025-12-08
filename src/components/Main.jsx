import { useState } from 'react';
import Number from './Number'


export default function Main() {
    
    const [numbers, setNumbers] = useState(
    [   {  id: 1,   isFrozen: false,   value: Math.floor(Math.random() * 10)  },
        {   id: 2,  isFrozen: false,   value: Math.floor(Math.random() * 10)  },
        {   id: 3,  isFrozen: false,   value: Math.floor(Math.random() * 10)  },
        {   id: 4,  isFrozen: false,   value: Math.floor(Math.random() * 10)  },
        {   id: 5,  isFrozen: false,   value: Math.floor(Math.random() * 10)  },
        {   id: 6,  isFrozen: false,   value: Math.floor(Math.random() * 10)  },
        {   id: 7,  isFrozen: false,   value: Math.floor(Math.random() * 10)  },
        {   id: 8,  isFrozen: false,   value: Math.floor(Math.random() * 10)  },
        {   id: 9,  isFrozen: false,   value: Math.floor(Math.random() * 10)  },
        {   id: 10, isFrozen: false,   value: Math.floor(Math.random() * 10)  }]
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

    function    toggleFreeze(id)
    {
        setNumbers(numbers =>
                numbers.map(die =>
                    id === die.id ? { ...die, isFrozen: !die.isFrozen } : die
                    /*
                        "...die":  Copy all properties of die → { id: 3, value: 7, isFrozen: false }
                        "isFrozen: !die.isFrozen": Overwrite the isFrozen property
                    */
        ))
    }

    const numbersRender = numbers.map(element => {
        return (
            <Number
                id={element.id}
                key={element.id}
                value={element.value}
                isFrozen={element.isFrozen}
                toggleFreeze={toggleFreeze}
            />
        )
    })

    function handleRoll() {

        setNumbers(
        numbers.map((n) => ({
            ...n,
            value: Math.floor(Math.random() * 10)
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