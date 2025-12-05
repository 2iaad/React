import { useState, useRef, useEffect } from 'react';
import './App.css'

export default function App() {

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <button onClick={setIsPlaying(!isPlaying)}></button>
      <p>{isPlaying}</p>
    </>
  );
}
