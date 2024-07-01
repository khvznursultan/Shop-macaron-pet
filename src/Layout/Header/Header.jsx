import React from 'react';
import HeaderSlice from './HeaderSlice/HeaderSlice';
import HeaderPartOne from './HeaderPartOne/HeaderPartOne';
import HeaderPartTwo from './HeaderPartTwo/HeaderPartTwo';

const Header = () => {
    return (
        <header>
            <HeaderSlice/>
            <HeaderPartOne/>
            <HeaderPartTwo/>
        </header>
    );
};

export default Header;