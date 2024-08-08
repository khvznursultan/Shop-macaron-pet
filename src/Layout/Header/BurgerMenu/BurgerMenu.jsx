import React, { useState } from 'react';
import './BurgerMenu.scss';
import { Link } from 'react-router-dom';
import Registration from '../../../Pages/Registration/Registration';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    const openRegistration = () => {
        setIsRegistrationOpen(true);
    };

    const closeRegistration = (user) => {
        setIsRegistrationOpen(false);
        if (user) {
            console.log('User registered:', user);
        }
    };

    return (
        <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
            <div className="burger-menu__icon" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`burger-menu__items ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/guarantee">Гарантия свежести</Link></li>
                    <li><Link to="/catalog">Каталог</Link></li>
                    <li><Link to="/sale">Сладкие дни</Link></li>
                    <li><Link to="/sets">Наборы</Link></li>
                    <li><Link to="/company">Компаниям</Link></li>
                    <li><span onClick={openRegistration} style={{ cursor: 'pointer' }}>Регистрация</span></li>
                </ul>
            </div>
            {isRegistrationOpen && <Registration onClose={closeRegistration} />}
        </div>
    );
};

export default BurgerMenu;
