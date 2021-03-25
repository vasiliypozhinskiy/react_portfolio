import SwiperCore, {Navigation, Pagination, EffectCube} from 'swiper'
import {Swiper as SWP, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-cube/effect-cube.scss';
import './Swiper.scss'
import React from "react";

SwiperCore.use([Navigation, Pagination, EffectCube])

const Swiper = (props) => {
    let slides = props.slides.map(slide => <SwiperSlide key={slide.key}>{slide}</SwiperSlide>)

    return (
        <SWP effect={props.effect}
             spaceBetween={50}
             loop={props.loop}
             navigation
             pagination={{clickable: true}}
        >
            {slides}
        </SWP>
    );
};

export default Swiper
