import React, { useState } from 'react';
import './Header.scss';
import HeaderPartOne from './HeaderPartOne/HeaderPartOne';
import HeaderPartTwo from './HeaderPartTwo/HeaderPartTwo';
import SlideComponent1 from './HeaderSlide/SlideComponent1';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <SlideComponent1 />
            <HeaderPartOne />
            <HeaderPartTwo />
            <div className="header-burger-container">
                <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
                {isMenuOpen && <HeaderPartTwo />}
            </div>
        </header>
    );
};

export default Header;