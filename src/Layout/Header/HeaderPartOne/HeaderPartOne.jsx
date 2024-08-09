import React, { useState, useEffect } from 'react';
import './HeaderPartOne.scss';
import Cart from './Assets/Cart.png';
import Phone from './Assets/Phone.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaUser, FaUserCheck } from "react-icons/fa";
import Registration from '../../../Pages/Registration/Registration';
import { loadUserFromLocalStorage, logoutUser } from '../../../store/userSlice';


const HeaderPartOne = () => {
    const dispatch = useDispatch();
    const cartItemsCount = useSelector(state => state.cartSlice.cart.reduce((total, item) => total + item.count, 0));
    const user = useSelector(state => state.user.user);
    const [isRegistrationVisible, setIsRegistrationVisible] = useState(false);

    useEffect(() => {
        dispatch(loadUserFromLocalStorage());
    }, [dispatch]);

    const toggleRegistration = () => {
        setIsRegistrationVisible(prevState => !prevState);
    };

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <div className="headerOne">
            <div className="headerOne__container container">
                <div className="headerOne__left">
                    <ul>
                        <Link to={'/guarantee'}>
                            <li>Гарантия свежести</li>
                        </Link>
                        <Link to={'/delivery'}>
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
                    {user ? (
                        <>
                            <FaUserCheck className="user-icon" />
                            <span className="user-name">{user.name}</span>
                            <button className="logout-button" onClick={handleLogout}>Выйти</button>
                        </>
                    ) : (
                        <FaUser onClick={toggleRegistration} className="user-icon" />
                    )}
                </div>
            </div>
            {isRegistrationVisible && <Registration onClose={toggleRegistration} />}
        </div>
    );
};

export default HeaderPartOne;