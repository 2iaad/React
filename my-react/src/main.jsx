import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'

const root = createRoot(document.getElementById("root")) // pass to react a DOM node that will represent our entry point and place where our elements will be rendered

function App()
{
  return ( // the <> tag is used as fragment to 
    <>
      <Header/>
      <MainContent/>
      <Footer/>
    </>
  )
}

root.render(
    <App/>
)