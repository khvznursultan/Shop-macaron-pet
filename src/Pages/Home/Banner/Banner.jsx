import React from 'react';
import './Banner.scss'
import LogoName from './assets/Group 212.png'
const Banner = () => {
    return (
        <div className='banner'>
            <div className="banner__container container">
                <div className="banner__text">
                    <h1><img src={LogoName} alt="" /></h1>
                    <h2>Настоящая любовь</h2>
                    <p>Пирожные макарон и другие десерты из натуральных ингредиентов, приготовленные с любовью</p>
                    <div className="banner__background"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;