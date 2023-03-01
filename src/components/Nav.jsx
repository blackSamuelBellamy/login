import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "../hooks/DataContext"
import mainLogo from '../assets/img/mainLogo.png'
import './styles/navBar.css'

const Nav = () => {

  const { hamburgerDisplay, setHamburgerDisplay } = useContext(DataContext)
  const hamburgerHandle = () => setHamburgerDisplay(!hamburgerDisplay)

  return (
    <header className='navBarHeader'>
      <button onClick={hamburgerHandle}
        className={hamburgerDisplay ? 'hamburger cruz': 'hamburger'}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      <div className="navBarHeaderLogo">
        <img src={mainLogo} alt="logoFreecoders" />
      </div>
      <nav className={hamburgerDisplay ? 'displayed' : 'nav'}>
        <ul>
          <NavLink to='/login' className={hamburgerDisplay ? 'liDisplayed' : 'li'} >Ingresar</NavLink>
          <NavLink to='/crearperfil' className={hamburgerDisplay ? 'liDisplayed' : 'li'} >Crear Perfil</NavLink>
          <NavLink to='/busqueda' className={hamburgerDisplay ? 'liDisplayed' : 'li'} >Buscar Coders</NavLink>
        </ul>
      </nav>
      <div></div>
    </header>
  )
}

export default Nav