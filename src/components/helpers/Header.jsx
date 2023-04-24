import { Link } from 'react-router-dom'
import imgHome from '../../../public/img/home.png'

const Header = () => {
  return (
    <header >
      {/* Imagen que redireccione al Home */}
      <img src={imgHome} id='imgHome'/>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/users'}>Users</Link>
      </nav>
    </header>
  )
}

export default Header