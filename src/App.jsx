import { useState } from 'react'
import './App.css'

export function App1() {
  const [count, setCount] = useState(0);

  function handlePlusClick()
  {
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
  }
  function handleMinusClick()
  {
    setCount(count - 1)
  }

  return (
    <>
      <button className='Button' onClick={handleMinusClick}>-</button>

      <div id='number'>
        <h1>{count}</h1>
      </div>

      <button className='Button' onClick={handlePlusClick}>+</button>
    </>
  )
}

export function App2() {
  const [boolVar, setBoolVar] = useState(false)
  function ShowHide()
  {
    setBoolVar(prev => !prev) // arrow function takes previous value and returns the opposite of it
  }

  return (
    <>
      <h1>Ziyad</h1>
      <button className='Button' onClick={ShowHide}>{boolVar ? 'hide' : 'show'}</button>
      {boolVar && <p>aqwad wahd 3rfo lkawkab</p>}
    </>
  )
}

export function App3()
{

}