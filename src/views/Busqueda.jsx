import { useContext } from 'react'
import { DataContext } from '../hooks/DataContext'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import Filtrador from '../components/Filtrador'
import '../components/styles/busqueda.css'

const Busqueda = () => {
    const { freeCoders } = useContext(DataContext)

    return (
        <>
            <Filtrador />
            <div className="codersWrap">
                <div className="coderContainer">
                    {freeCoders.map((coders, index) => 
                        <div className="coderBoxCards" key={index}>
                            <div className="single-box">
                                <div className="coderBox-content">
                                    <img className="sides side-1" src={coders.url} alt={coders.id} />
                                    <div className="sides side-2">
                                        <div className="contentCoders">
                                            <h2>{coders.nombre}</h2>
                                            <p>{coders.descripcion}</p>
                                            <div className='socials'>
                                                <AiFillGithub className='icons' />
                                                <AiFillLinkedin className='icons' />
                                                <AiFillTwitterCircle className='icons' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                
                </div>
            </div>
        </>
    )
}

export default Busqueda