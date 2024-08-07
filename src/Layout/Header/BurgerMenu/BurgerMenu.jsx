import React, { useState } from 'react';
import './BurgerMenu.scss';
import { Link } from 'react-router-dom';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
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
                    <li><Link to="/delivery">Доставка и оплата</Link></li>
                    <li><Link to="/catalog">Каталог</Link></li>
                    <li><Link to="/sale">Сладкие дни</Link></li>
                    <li><Link to="/sets">Наборы</Link></li>
                    <li><Link to="/company">Компаниям</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default BurgerMenu;
