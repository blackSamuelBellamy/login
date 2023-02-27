import { useState, useContext } from 'react'
import { DataContext } from '../hooks/DataContext'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import './styles/filtrador.css'
import mainLogo from '../assets/img/mainLogo.png'

const Filtrador = () => {

  const { filtradorDisplay, setFiltradorDisplay} = useContext(DataContext)
  const [area, setArea] = useState(false)
  const [coder, setCoder] = useState(false)
  const [language, setLanguage] = useState(false)

  const filtradorDisplayed = () => setFiltradorDisplay(!filtradorDisplay) 


  const displaying = state => state

  return (
    <div className='filtrador'>
      <button onClick = {filtradorDisplayed} className={filtradorDisplay? 'filtradorHamburger filtradorCruz': 'filtradorHamburger'}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      <div className="filtradorLogo">
        <NavLink to='/home'>
          <img src={mainLogo} alt="freeCoders" />
        </NavLink>
      </div>
      <div className={filtradorDisplay ? "menuBusqueda busquedaResponsive": "menuBusqueda"}>
        <div className="inputBoxSearch inputAreaName">
          <input type="text" name='Area'
            onFocus={() => setArea(true)}
            onBlur={() => setArea(false)}
          />
          <div className={displaying(area) ? 'hiddenBox filterCoderArea hidden' : 'hiddenBox filterCoderArea'}>
            <p>Front-End</p>
            <p>Back-End</p>
            <p>Full-Stack</p>
          </div>
        </div>
        <div className="inputBoxSearch inputCoderName">
          <input type="text" name='Coder'
            onFocus={() => setCoder(true)}
            onBlur={() => setCoder(false)}
          />
          <div className={displaying(coder) ? 'hiddenBox filterCoderName hidden' : 'hiddenBox filterCoderName'}>
            <p>Gustavo Lopez</p>
            <p>Alejandro Quiñones</p>
            <p>David Pirul</p>
            <p>Cristobal Díaz</p>
          </div>
        </div>
        <div className="inputBoxSearch inputLanguageName">
          <input type="text" name='Language'
            onFocus={() => setLanguage(true)}
            onBlur={() => setLanguage(false)}
          />
          <div className={displaying(language) ? 'hiddenBox filterCoderLanguage hidden' : 'hiddenBox filterCoderLanguage'}>
            <p>Java</p>
            <p>Python</p>
            <p>JavaScript</p>
          </div>
        </div>
      </div>
      <div className="volver">
        <NavLink to='/home'>
          <AiOutlineHome className='volverIcon'/>
          <div className="volverButton">Inicio</div>
        </NavLink>
      </div>
    </div>
  )
}

export default Filtrador