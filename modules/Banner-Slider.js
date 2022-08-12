import {Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import CollectableCard from "./Collectable-Card";

function BannerSlider(){
    return(
        <Swiper
            spaceBetween={30}
            slidesPerView={2}
            centeredSlides={true}
        >
            <SwiperSlide><CollectableCard src="/images/Banner Card.png"></CollectableCard></SwiperSlide>
            <SwiperSlide><CollectableCard src="/images/Banner Card.png"></CollectableCard></SwiperSlide>
            <SwiperSlide><CollectableCard src="/images/Banner Card.png"></CollectableCard></SwiperSlide>
            
        </Swiper>
    )
}

export default BannerSlider;