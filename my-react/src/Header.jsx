import zbi from './assets/react.svg'

function Header()
{
  return (
    <header>
      <img src={zbi} width="100px" alt="react logo"></img>
      <nav>
        <ul className='nav-list'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header