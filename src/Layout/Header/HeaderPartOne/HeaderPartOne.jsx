import React from 'react';
import './HeaderPartOne.scss';
import Cart from './Assets/Cart.png';
import Ok from './Assets/ok.png';
import Tg from './Assets/tg (2).png';
import Vk from './Assets/vk.png';
import Phone from './Assets/Phone.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HeaderPartOne = () => {
    const cartItemsCount = useSelector(state => state.cartSlice.cart.reduce((total, item) => total + item.count, 0));

    return (
        <div className="headerOne">
            <div className="headerOne__container container">
                <div className="headerOne__left">
                    <ul>
                        <Link to={'guarantee'}>
                            <li>Гарантия свежести</li>
                        </Link>
                        <li>Доставка и оплата</li>
                        <li>Оптовые поставки</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <div className="headerOne__right">
                    <img className='phoneImg' src={Phone} alt="Phone" />
                    <p>8 812 309-82-88</p>
                    <Link to='/cart' className="cart-link">
                        <div className="cart-container">
                            <img className='cartImg' src={Cart} alt="Cart" />
                            <span className="cart-text">в корзине ({cartItemsCount})</span>
                        </div>
                    </Link>
                    <img className='tgImg' src={Tg} alt="Telegram" />
                    <img className='vkImg' src={Vk} alt="VK" />
                    <img className='okImg' src={Ok} alt="OK" />
                </div>
            </div>
        </div>
    );
};

export default HeaderPartOne;
