
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import MainContent from './MainContent.jsx'
import Footer from './Footer.jsx'

const root = createRoot(document.getElementById("root")) // pass to react a DOM node that will represent our entry point and place where our elements will be rendered

function Page()
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
    <Page/>
)