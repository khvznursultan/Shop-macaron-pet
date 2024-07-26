import React from 'react';
import './HeaderPartOne.scss';
import Cart from './Assets/Cart.png';
import Phone from './Assets/Phone.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaUser } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
пше


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
                        <Link to={'delivery'}>
                            <li>Доставка и оплата</li>
                        </Link>
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
                    <FaUser/>
                </div>
            </div>
        </div>
    );
};

export default HeaderPartOne;



