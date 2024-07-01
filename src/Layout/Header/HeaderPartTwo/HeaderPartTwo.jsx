import React from 'react';
import './HeaderPartTwo.scss'
import Logo from './assets/лого.png'

const HeaderPartTwo = () => {
    return (
        <div className='headerTwo'>
            <div className="headerTwo__container container">
                <ul>
                    <li>СЛАДКИЕ ДНИ <span className='percent'>%</span></li>
                    <li>подарочные наборы</li>
                    <li>Собрать набор</li>
                    <li><img src={Logo} alt="" /></li>
                    <li>Создать дизайн</li>
                    <li>КОМПАНИЯМ</li>
                    <li>ВЕСЬ КАТАЛОГ</li>
                </ul>
            </div>
        </div>
    );
};

export default HeaderPartTwo;