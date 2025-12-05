import { useState, useRef, useEffect } from 'react';
import './App.css'

export default function App() {

  const [isPlaying, setIsPlaying] = useState(false);

  function fun()
  {
    setIsPlaying(!isPlaying)
  }
  
  return (
    <>
      <button onClick={FUn}>here</button>
      <h1>HERE</h1>
      <p>{isPlaying}</p>
    </>
  );
}
