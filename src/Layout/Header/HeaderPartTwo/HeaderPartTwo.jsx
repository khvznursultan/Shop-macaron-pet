import React from 'react';
import './HeaderPartTwo.scss';
import Logo from './assets/лого.png';
import { Link } from 'react-router-dom';

const HeaderPartTwo = () => {
    return (
        <div className='headerTwo'>
            <div className="headerTwo__container container">
                <ul>
                    <Link to={'/sale'}>
                        <li className='no-underline'>СЛАДКИЕ ДНИ <span className='percent'>%</span></li>
                    </Link>
                    <li>подарочные наборы</li>
                    <Link to={'/'}>
                        <li className='no-underline logo'><img src={Logo} alt="" /></li>
                    </Link>
                    <li>КОМПАНИЯМ</li>
                    <li className='no-underline catalog'>ВЕСЬ КАТАЛОГ</li>
                </ul>
            </div>
        </div>
    );
};

export default HeaderPartTwo;
