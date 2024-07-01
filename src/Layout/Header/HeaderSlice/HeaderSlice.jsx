import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './HeaderSlice.scss';
import { Navigation } from 'swiper/modules';
import Muka from './Assets/muka.png'
import Box from './Assets/box.png'
import Burger from './Assets/burger.png'
import Car from './Assets/car.png'




const HeaderSlice = () => {
    return (

        <div className="header-slice-container">
            <Swiper loop={true} navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img src={Car} alt="" /><p>ДОСТАВКА В ДЕНЬ ЗАКАЗА</p></SwiperSlide>
                <SwiperSlide><img src={Box} alt="" /><p>ОПТОВЫЕ ПОСТАВКИ ОТ ПРОИЗВОДИТЕЛЯ</p></SwiperSlide>
                <SwiperSlide><img src={Burger} alt="" /><p>ВСЕГДА СВЕЖЕЕ</p></SwiperSlide>
                <SwiperSlide><img src={Muka} alt="" /><p>МИНДАЛЬНАЯ МУКА И НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ</p></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HeaderSlice;