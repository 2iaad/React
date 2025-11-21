import zbi from './assets/react.svg'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById("root")) // pass to react a DOM node that will represent our entry point and place where our elements will be rendered

function Components()
{
  return (
    <div>
      <img src={zbi} width="100px" alt="react logo"></img>
      
      <h1>Fun facts about react</h1>
      
      <ul>
        <li>React isn’t a framework – it’s a library for building user interfaces.</li>
        <li>“React” was created by Facebook in 2011 to solve complex UI problems.</li>
        <li>JSX looks like HTML, but it’s actually JavaScript under the hood!</li>
        <li>Virtual DOM – React updates only what’s changed, making apps super fast.</li>
        <li>Components are reusable – you can build one button and use it everywhere.</li>
      </ul>
    </div>
  )
}

root.render(
  <Components/>
)