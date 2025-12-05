import { useState, useRef, useEffect } from 'react';
import './App.css'

function  VideoPlayer({ src, isPlaying }) {

  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying)
    {
        ref.current.play();
    }
    else
    {
      ref.current.pause();
    }
  });

  return <video ref={ref} src={src} loop playsInline />;
}

export default function App() {

  const [isPlaying, setIsPlaying] = useState(false);
  
  
  return (
    <>
      <
    </>
  );
}
