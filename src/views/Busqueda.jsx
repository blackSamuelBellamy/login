import { useContext } from 'react'
import { DataContext } from '../hooks/DataContext'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import Filtrador from '../components/Filtrador'
import '../components/styles/busqueda.css'

const Busqueda = () => {
    const { coders } = useContext(DataContext)

    return (
        <>
            <Filtrador />
            <div className="codersWrap">
                <div className="coderContainer">
                    {coders.map((coder, index) => 
                        <div className="coderBoxCards" key={index}>
                            <div className="single-box">
                                <div className="coderBox-content">
                                    <img className="sides side-1" src={coder.url} alt={coder.id} />
                                    <div className="sides side-2">
                                        <div className="contentCoders">
                                            <h2>{coder.nombre}</h2>
                                            <p>{coder.descripcion}</p>
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