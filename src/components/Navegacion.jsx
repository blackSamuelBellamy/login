import {NavLink } from 'react-router-dom'
import './styles/navegacion.css'

const changing = ({ isActive }) => isActive ? 'isActive' : 'mainNavBar'

const Navegacion = () => {
    return (
        <div className='mainNavBarContainer'>
            <NavLink to='/perfilfreecoder' className={changing}>Perfil</NavLink>
            <NavLink to='/busqueda' className={changing}>Busqueda</NavLink>
            <NavLink to='/contactarfreecoder' className={changing}>Contactar</NavLink>
            <NavLink to='/confirmarorden' className={changing}>Confirmar Orden</NavLink>
            <NavLink to='/seguimiento' className={changing}>Seguimiento</NavLink>
            <NavLink to='/home' className={changing}>Home</NavLink>
            <NavLink to='/crearperfil' className={changing}>Crear Perfil</NavLink>
            <NavLink to='/login' className={changing}>Formulario</NavLink>
            <NavLink to='/enviopropuesta' className={changing}>Envio propuesta</NavLink>
            <NavLink to='/crearpropuesta' className={changing}>Crear propuesta</NavLink>
            <NavLink to='/abonarpropuesta' className={changing}>Abonar Propuesta</NavLink>
        </div>
    )
}

export default Navegacion