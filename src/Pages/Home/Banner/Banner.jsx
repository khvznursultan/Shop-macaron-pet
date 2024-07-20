import React from 'react';
import './Banner.scss';


const Banner = () => {
    return (
        <section className='banner'>
            <div className="container-1">
                <div className="banner__row">
                    <div className="banner__col banner__image">
                        <img src="https://macaronshop.ru/wp-content/uploads/2023/04/main-image-spb.png" alt="Печенье макарон с печатью" />
                    </div>
                    <div className="banner__col banner__content">
                        <div className="banner__brand">Macaronshop</div>
                        <div className="banner__since">since 2013</div>
                        <h1 className="banner__title">Настоящая любовь</h1>
                        <p className="banner__snippet">Пирожные макаронс и другие десерты из натуральных ингредиентов, приготовленные с любовью</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
