import React from 'react';
import './HeaderPartTwo.scss'
import Logo from './assets/лого.png'
import { Link } from 'react-router-dom';

const HeaderPartTwo = () => {
    return (
        <div className='headerTwo'>
            <div className="headerTwo__container container">
                <ul>
                    <li>СЛАДКИЕ ДНИ <span className='percent'>%</span></li>
                    <li>подарочные наборы</li>
                    <Link to={'/'}>
                        <li><img src={Logo} alt="" /></li>
                    </Link>
                    <li>КОМПАНИЯМ</li>
                    <li>ВЕСЬ КАТАЛОГ</li>
                </ul>
            </div>
        </div>
    );
};

export default HeaderPartTwo;