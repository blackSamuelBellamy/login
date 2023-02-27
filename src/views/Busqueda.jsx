import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import Footer from '../components/Footer'
import Filtrador from '../components/Filtrador'
import '../components/styles/busqueda.css'

const Busqueda = () => {
    return (
        <>
            <Filtrador />
            <div className="codersWrap">
                <div className="coderContainer">
                    <div className="coderBoxCards">
                        <div className="single-box">
                            <div className="coderBox-content">
                                <img className="sides side-1" src="https://avatars.githubusercontent.com/u/82165284?v=4" alt="pic" />
                                <div className="sides side-2">
                                    <div className="contentCoders">
                                        <h2>Gustavo Lopez</h2>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            Mollitia nam illo praesentium aliquid molestias dolorum cum consequatur assumenda ratione perspiciatis. Officia repudiandae explicabo placeat vitae! Eos placeat optio dolorem perspiciatis?</p>
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
                    <div className="coderBoxCards">
                        <div className="single-box">
                            <div className="coderBox-content">
                                <img className="sides side-1" src="https://avatars.githubusercontent.com/u/103391543?v=4" alt="pic" />
                                <div className="sides side-2">
                                    <div className="contentCoders">
                                        <h2>Alejandro Quiñones</h2>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            Mollitia nam illo praesentium aliquid molestias dolorum cum consequatur assumenda ratione perspiciatis. Officia repudiandae explicabo placeat vitae! Eos placeat optio dolorem perspiciatis?</p>
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
                    <div className="coderBoxCards">
                        <div className="single-box">
                            <div className="coderBox-content">
                                <img className="sides side-1" src="https://avatars.githubusercontent.com/u/98367996?v=4" alt="pic" />
                                <div className="sides side-2">
                                    <div className="contentCoders">
                                        <h2>David Pirul</h2>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            Mollitia nam illo praesentium aliquid molestias dolorum cum consequatur assumenda ratione perspiciatis. Officia repudiandae explicabo placeat vitae! Eos placeat optio dolorem perspiciatis?</p>
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
                    <div className="coderBoxCards">
                        <div className="single-box">
                            <div className="coderBox-content">
                                <img className="sides side-1"
                                    src="https://empieza.desafiolatam.com/assets/guess-828ac295ca7ba91d1f760faf6d615eb8d703b1131e77034eb18e9acefd11e239.gif" alt="pic" />
                                <div className="sides side-2">
                                    <div className="contentCoders">
                                        <h2>Cristobal Díaz</h2>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            Mollitia nam illo praesentium aliquid molestias dolorum cum consequatur assumenda ratione perspiciatis. Officia repudiandae explicabo placeat vitae! Eos placeat optio dolorem perspiciatis?</p>
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

                </div>
            </div>
        </>
    )
}

export default Busqueda