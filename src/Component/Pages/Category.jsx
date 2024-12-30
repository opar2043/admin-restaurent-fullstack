import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import slider1 from '../../assets/home/slide1.jpg'
import slider2 from '../../assets/home/slide2.jpg'

import slider3 from '../../assets/home/slide3.jpg'
import slider4 from '../../assets/home/slide4.jpg'
import slider5 from '../../assets/home/slide5.jpg'

const Category = () => {
  return (
    <div className='my-10 '>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slider1} alt="" />
            <h2 className='-mt-16 text-4xl text-center text-white font-semibold'>Salad</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider2} alt="" />
            <h2 className='-mt-16 text-4xl text-center text-white font-semibold'>Desert</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider3} alt="" />
        <h2 className='-mt-16 text-4xl text-center text-white font-semibold'>Pizza</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider4} alt="" />
        <h2 className='-mt-16 text-4xl text-center text-white font-semibold'>Soupe</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider5} alt="" />
        <h2 className='-mt-16 text-4xl text-center text-white font-semibold'>Salad</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider1} alt="" />
        <h2 className='-mt-16 text-4xl text-center text-white font-semibold'>Pizza</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider2} alt="" />
        <h2 className='-mt-16 text-4xl text-center text-white font-semibold'>Thai</h2>
        </SwiperSlide>
      
      </Swiper>
    </div>
  )
}

export default Category