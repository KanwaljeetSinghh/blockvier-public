import { useRef } from 'react';
import SectionHeading from "./Section-Heading";
import CollectableCard from "./Collectable-Card";
import styles from './css/collectable-card.module.css';
import ArrowLeft from "../icons/Arrow-Left";
import ArrowRight from "../icons/Arrow-right";
import {Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

function Collectables(props){
    const swiperRef = useRef(null);

    return (
        <div className="section">
            <div className="container d-flex d-flex-wrap d-justify-space-between">
                <SectionHeading title={props.headStart} highlighted-title={props.headEnd}></SectionHeading>

                <div >
                    <div id="previousButton" className="cursor-pointer mr-2 bg-smoke rounded-50 slider-nav d-inline-flex d-align-center d-justify-center" onClick={() => swiperRef.current.swiper.slidePrev()}>
                        <ArrowLeft color="#000"></ArrowLeft>
                    </div>
                    <div id="nextButton" className="cursor-pointer bg-smoke rounded-50 slider-nav d-inline-flex d-align-center d-justify-center" onClick={() => swiperRef.current.swiper.slideNext()}>
                        <ArrowRight color="#000"></ArrowRight>
                    </div>
                </div>

                <Swiper 
                    ref={swiperRef}
                    spaceBetween={30}
                    slidesPerView={5}
                >
                    <SwiperSlide><CollectableCard src="/images/Collectable.png"></CollectableCard></SwiperSlide>
                    <SwiperSlide><CollectableCard src="/images/Collectable.png"></CollectableCard></SwiperSlide>
                    <SwiperSlide><CollectableCard src="/images/Collectable.png"></CollectableCard></SwiperSlide>
                    <SwiperSlide><CollectableCard src="/images/Collectable.png"></CollectableCard></SwiperSlide>
                    <SwiperSlide><CollectableCard src="/images/Collectable.png"></CollectableCard></SwiperSlide>
                    <SwiperSlide><CollectableCard src="/images/Collectable.png"></CollectableCard></SwiperSlide>
                    <SwiperSlide><CollectableCard src="/images/Collectable.png"></CollectableCard></SwiperSlide>
                    <SwiperSlide><CollectableCard src="/images/Collectable.png"></CollectableCard></SwiperSlide>
                    <SwiperSlide><CollectableCard src="/images/Collectable.png"></CollectableCard></SwiperSlide>
                    <SwiperSlide><CollectableCard src="/images/Collectable.png"></CollectableCard></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
export default Collectables;