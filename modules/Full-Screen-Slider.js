import { useRef } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import ArrowLeft from "../icons/Arrow-Left";
import ArrowRight from "../icons/Arrow-right";
import styles from './css/modal.module.css';
import "swiper/css";
export default function FullScreenSlider(){
    const swiperRef = useRef(null);
    return (
        <div className={`${styles["modal-container"]} p-relative`}>
            <div>
                <div id="previousButton" className={`p-absolute cursor-pointer mr-2 bg-smoke rounded-50 slider-nav d-inline-flex d-align-center d-justify-center ${styles["left-button"]}`} onClick={() => swiperRef.current.swiper.slidePrev()}>
                    <ArrowLeft color="#000"></ArrowLeft>
                </div>
                <div id="nextButton" className={`p-absolute cursor-pointer bg-smoke rounded-50 slider-nav d-inline-flex d-align-center d-justify-center ${styles["right-button"]}`} onClick={() => swiperRef.current.swiper.slideNext()}>
                    <ArrowRight color="#000"></ArrowRight>
                </div>
            </div>
            <div className={`${styles["modal-fullscreen-slider"]} `}>
            <Swiper 
                    ref={swiperRef}
                    spaceBetween={30}
                    slidesPerView={1}
                >
                    <SwiperSlide>
                        <img src="images/Collectable.png"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="images/Collectable.png"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="images/Collectable.png"/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>  
    );
}