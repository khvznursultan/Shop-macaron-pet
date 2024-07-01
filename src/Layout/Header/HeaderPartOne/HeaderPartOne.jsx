import React from 'react';
import './HeaderPartOne.scss'
import Cart from './Assets/Cart.png'
import Ok from './Assets/ok.png'
import Tg from './Assets/tg (2).png'
import Vk from './Assets/vk.png'
import Phone from './Assets/Phone.png'






const HeaderPartOne = () => {
    return (
        <>
            <div className="headerOne">
                <div className="headerOne__container container">
                    <div className="headerOne__left">
                        <ul>
                            <li>Гарантия свежести</li>
                            <li>Доставка и оплата</li>
                            <li>Оптовые поставки</li>
                            <li>Контакты</li>
                        </ul>
                    </div>
                    <div className="headerOne__right">
                        <img className='phoneImg' src={Phone} alt="" /> <p>8 812 309-82-88</p>
                        <img className='cartImg' src={Cart} alt="" />
                        <img className='tgImg' src={Tg} alt="" />
                        <img className='vkImg' src={Vk} alt="" />
                        <img className='okImg' src={Ok} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderPartOne;