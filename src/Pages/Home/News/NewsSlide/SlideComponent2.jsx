import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './SlideComponet2.module.scss'
import Zefir from './assets/zefir-zakaz.jpg';
import Truboch from './assets/trubochki-spb.jpg';
import Nabor from './assets/nabor-macarun.jpg';
import Macarun from './assets/macarun-spb.jpg';
import Cartosh from './assets/kartoshka-desert-spb.jpg';
import Cake from './assets/cake-pops-spb.jpg';
import {Autoplay } from 'swiper/modules';

const SlideComponent2 = () => {
    return (
        <div className={styles.slideComponent2}>
            <h3>АКЦИИ И НОВИНКИ</h3>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className={styles.mySwiper}
            >
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.slideComponent2__One}>
                        <img src={Nabor} alt="Cake" />
                        <p>БЕСПЛАТНАЯ ДОСТАВКА</p>
                        <p>По СПб в районе КАД – от 2000₽ <br />
                            По МСК – от 5000₽</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.slideComponent2__One}>
                        <img src={Zefir} alt="Zefir" />
                        <p>NEW! ВОЗДУШНЫЙ ЗЕФИР</p>
                        <p>Классические десерты с легкой текстурой!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.slideComponent2__One}>
                        <img src={Cartosh} alt="Cartosh" />
                        <p>ШОКОЛАДНАЯ НОВИНКА</p>
                        <p>Шоколадное пирожное картошка на основе терпкого бисквита!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.slideComponent2__One}>
                        <img src={Macarun} alt="Cake" />
                        <p>NEW! CAKE-POPS!</p>
                        <p>Аппетитные конфеты на основе миндального печенья и крема!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.slideComponent2__One}>
                        <img src={Truboch} alt="Cake" />
                        <p>BIG-SIZE</p>
                        <p>Большие наборы с вашим дизайном от 4500 руб!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.slideComponent2__One}>
                        <img src={Cake} alt="Cake" />
                        <p>АППЕТИТНАЯ НОВИНКА</p>
                        <p>Великолепные трубочки. Самые вкусные на свете!</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SlideComponent2;