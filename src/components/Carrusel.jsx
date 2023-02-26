import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from "swiper"
import { useRef, useEffect } from 'react'
import $ from 'jquery'
import 'jquery.ripples/dist/jquery.ripples-min'
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import './styles/carrusel.css'

const Carrusel = () => {

    const myCanvas = useRef(null)

    useEffect(() => {
        $(myCanvas.current).ripples({
            resolution: 512,
            dropRadius: 50,
            perturbance: .1
        })
    })
  return (
    <div className="gallery" ref={myCanvas}>
          <h2 className='codersTitle'>no show</h2>
          <div className="swiperContenedor">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              loop={true}
              coverflowEffect={{
                rotate: 36,
                stretch: 55,
                depth: 300,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: 500,
                disableOnInteraction: false,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide className='cardContainer'>
                <img src="https://pbs.twimg.com/profile_images/1595880603173650432/8h-HC-NW_400x400.jpg" />
              </SwiperSlide >
              <SwiperSlide className='cardContainer'>
                <img src="https://avatars.githubusercontent.com/u/85124911?v=4" />
              </SwiperSlide>
              <SwiperSlide className='cardContainer'>
                <img src="https://avatars.githubusercontent.com/u/1561955?v=4" />
              </SwiperSlide>
              <SwiperSlide className='cardContainer'>
                <img src="https://images-eu.ssl-images-amazon.com/images/S/influencer-profile-image-prod/logo/kikopalomares_1572422749034_original._CR0,0,3697,3697_._FMjpg_.jpeg" />
              </SwiperSlide>
              <SwiperSlide className='cardContainer'>
                <img src="https://pbs.twimg.com/media/EsQPBzHW4AIuT_o.jpg" />
              </SwiperSlide>
              <SwiperSlide className='cardContainer'>
                <img src="https://www.clarin.com/img/2021/12/03/L-DV5IzJN_2000x1500__1.jpg" />
              </SwiperSlide>
              <SwiperSlide className='cardContainer'>
                <img src="https://avatars.githubusercontent.com/u/82165284?v=4" />
              </SwiperSlide>
              <SwiperSlide className='cardContainer'>
                <img src="https://avatars.githubusercontent.com/u/94326934?v=4" />
              </SwiperSlide>
              <SwiperSlide className='cardContainer'>
                <img src="https://avatars.githubusercontent.com/u/103466022?v=4" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
  )
}

export default Carrusel