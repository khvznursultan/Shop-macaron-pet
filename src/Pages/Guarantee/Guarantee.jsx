import React from 'react';
import './Guarantee.scss'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import First from './image/Rectangle 403.png'
import Second from './image/Rectangle 404.png'
import Third from './image/Rectangle 405.png'

const Guarantee = () => {
    return (
        <section className='guarantee'>
            <div className="guarantee__container container">
                <div className="guarantee__navigate">
                    <div>
                        <p><Link to={'/'}>Главная страница</Link></p><p><MdKeyboardDoubleArrowRight />Гарантии вкуса и качества</p>
                    </div>
                </div>
                <h2>Гарантии вкуса и качества</h2>
                <div className="guarantee__text">
                    <p>При изготовлении пирожных мы используем только натуральные ингредиенты, избегая использования конвер</p>
                </div>
                <div className="guarantee__bottom">
                    <div className="guarantee__bottom__block">
                        <img src={First} alt="" />
                        <div className="guarantee__bottom__block__text">
                            <p>100% <br /> миндальная мука</p>
                        </div>
                    </div>
                    <div className="guarantee__bottom__block">
                        <img src={Second} alt="" />
                        <div className="guarantee__bottom__block__text">
                            <p>100% <br />безопасные пищевые красителиа</p>
                        </div>
                    </div>
                    <div className="guarantee__bottom__block">
                        <img src={Third} alt="" />
                        <div className="guarantee__bottom__block__text">
                            <p>100% <br />фруктовые пюре и натуральные ингредиенты</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Guarantee;