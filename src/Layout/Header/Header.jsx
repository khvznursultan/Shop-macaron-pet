import React from 'react';
import HeaderPartOne from './HeaderPartOne/HeaderPartOne';
import HeaderPartTwo from './HeaderPartTwo/HeaderPartTwo';
import SlideComponent1 from './HeaderSlide/SlideComponent1';

const Header = () => {
    return (
        <header>
            <SlideComponent1 />
            <HeaderPartOne />
            <HeaderPartTwo />
        </header>
    );
};

export default Header;