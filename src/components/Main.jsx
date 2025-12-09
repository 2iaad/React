import { useState } from 'react';
import Number from './Number'
import Confetti from "react-confetti"

export default function Main() {
    
    let gameFinished = false;
    const [numbers, setNumbers] = useState(
    [   {  id: 1,   isFrozen: false,   value: Math.ceil(Math.random() * 4)  },
        {   id: 2,  isFrozen: false,   value: Math.ceil(Math.random() * 4)  },
        {   id: 3,  isFrozen: false,   value: Math.ceil(Math.random() * 4)  },
        {   id: 4,  isFrozen: false,   value: Math.ceil(Math.random() * 4)  },
        {   id: 5,  isFrozen: false,   value: Math.ceil(Math.random() * 4)  },
        {   id: 6,  isFrozen: false,   value: Math.ceil(Math.random() * 4)  },
        {   id: 7,  isFrozen: false,   value: Math.ceil(Math.random() * 4)  },
        {   id: 8,  isFrozen: false,   value: Math.ceil(Math.random() * 4)  },
        {   id: 9,  isFrozen: false,   value: Math.ceil(Math.random() * 4)  },
        {   id: 10, isFrozen: false,   value: Math.ceil(Math.random() * 4)  }]
    );
    
    if (numbers.every(number => number.isFrozen)
            && numbers.every(number => number.value === numbers[0].value))
    {
        console.log("Congrats!")
        gameFinished = true;
    }
/*
    const [numbers, setNumbers] = useState(
        Array.from( { length: 10 },
        (_, i) => ({
            id: i + 1,
            value: Math.ceil(Math.random() * 10)
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

        if (gameFinished) {
            gameFinished = false;
            setNumbers(
                numbers.map(n => (
                    {...n, value: Math.ceil(Math.random() * 5) ,isFrozen: false}
                ))
            )
            return ;
        }
        setNumbers(
            numbers.map(n => 
                n.isFrozen ? n : {...n, value: Math.ceil(Math.random() * 5)}
            ) 
        )
    }

    return (
        <main>
            {gameFinished && <Confetti/>}
            <div id="numbers">
                {numbersRender}
            </div>

            <button onClick={handleRoll} id='button'>{gameFinished ? "New Game" : "Roll"}</button>
        </main>
    )
}