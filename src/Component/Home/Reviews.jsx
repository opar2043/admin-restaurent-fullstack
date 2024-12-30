import SectionTitle from "../SharedPage/SectionTitle"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const Reviews = () => {

    const [reviews , setReviews] = useState([])
    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

  return (
    <div className="py-10">
        <SectionTitle sub="What Our client Say?" heading='Reviews'></SectionTitle>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
        
        reviews.map((review,idx) => 
            <SwiperSlide key={review._id} >
                <div className="flex md:w-2/3 mx-auto text-center flex-col gap-2 justify-center items-center">
                <div>
                    <p className="font-extrabold">{idx}</p>
                <Rating
                     style={{ maxWidth: 180 }}
                     value={review.rating}
                     readOnly/>
                </div>
                   <p className="font-semibold">{review.details}</p>
                   <p className="text-2xl font-bold text-yellow-600">{review.name}</p>
                </div>
            </SwiperSlide>
        )
        }
      </Swiper>
    </div>
  )
}

export default Reviews