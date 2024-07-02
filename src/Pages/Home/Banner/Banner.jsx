import React from 'react';
import './Banner.scss'
import LogoName from './assets/Group 212.png'
import Heart from './assets/Group 211 (1).png'
import Fon41 from './assets/Фон копия 4 1.png'
import Sloy41 from './assets/Слой 4 1.png'
import Fon from './assets/Фон копия 6.png'
import Fon6 from './assets/Фон копия 6 1.png'
import Sloy10 from './assets/Слой 10 1.png'
import Fon2 from './assets/Фон копия 2 1.png'
import Fon5 from './assets/Фон копия 5 1.png'
import Fon3 from './assets/Фон копия 3 1.png'
import Layer23 from './assets/Layer 23 1.png'
import Sloy2 from './assets/Слой 2 1.png'
import Ellipse5 from './assets/Ellipse 5.png'
import Ellipse3 from './assets/Ellipse 3.png'
import Ellipse4 from './assets/Ellipse 4.png'

const Banner = () => {
    return (
        <section className='banner'>
            <div className="banner__container container">
                <img className='ellipse5' src={Ellipse5} alt="" />
                <img className='heart' src={Heart} alt="" />
                <img className='sloy41' src={Sloy41} alt="" />
                <img className='ellipse4' src={Ellipse4} alt="" />
                <img className='sloy10' src={Sloy10} alt="" />
                <img className='fon41' src={Fon41} alt="" />
                <img className='sloy2' src={Sloy2} alt="" />
                <img className='ellipse3' src={Ellipse3} alt="" />
                <img className='fon' src={Fon} alt="" />
                <img className='fon6' src={Fon6} alt="" />
                <img className='layer23' src={Layer23} alt="" />
                <img className='fon2' src={Fon2} alt="" />
                <img className='fon5' src={Fon5} alt="" />
                <img className='fon3' src={Fon3} alt="" />
                <div className="banner__text">
                    <h1><img src={LogoName} alt="" /></h1>
                    <h2>Настоящая любовь</h2>
                    <p>Пирожные макарон и другие десерты из натуральных ингредиентов, приготовленные с любовью</p>
                    <div className="banner__background"></div>
                </div>
            </div>
        </section>
    );
};

export default Banner;