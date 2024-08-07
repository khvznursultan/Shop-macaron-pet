import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './SlideComponent1.module.scss';
import Muka from './Assets/muka.png';
import Box from './Assets/box.png';
import Burger from './Assets/burger.png';
import Car from './Assets/car.png';
import { Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const SlideComponent1 = () => {
    return (
        <div className={styles.slideComponent1}>
            <div className="container">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className={styles.mySwiper}>
                    <SwiperSlide className={styles.swiperSlide}><img src={Car} alt="" /><p>ДОСТАВКА В ДЕНЬ ЗАКАЗА</p></SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}><img src={Box} alt="" /><p>ОПТОВЫЕ ПОСТАВКИ ОТ ПРОИЗВОДИТЕЛЯ</p></SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}><img src={Burger} alt="" /><p>ВСЕГДА СВЕЖЕЕ</p></SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}><img src={Muka} alt="" /><p>МИНДАЛЬНАЯ МУКА И НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ</p></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default SlideComponent1;