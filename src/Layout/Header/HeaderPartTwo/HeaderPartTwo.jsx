import React, { useState } from 'react';
import './HeaderPartTwo.scss';
import Logo from './assets/лого.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../../store/productsSlice';

const HeaderPartTwo = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const goToHome = () => {
        navigate('/');
    };

    const handleMouseEnter = () => {
        setIsPopupVisible(true);
    };

    const handleMouseLeave = () => {
        setIsPopupVisible(false);
    };

    const handleFilterChange = (filterType) => {
        dispatch(setFilter(filterType));
        navigate('/catalog');
    };

    return (
        <div className='headerTwo'>
            <div className="headerTwo__container container">
                <ul>
                    <Link className='link' to={'/sale'}>
                        <li className='no-underline'>СЛАДКИЕ ДНИ <span className='percent'>%</span></li>
                    </Link>
                    <Link className='link' to={'/sets'}>
                        <li>категории</li>
                    </Link>
                    <button onClick={goToHome}>
                        <li className='no-underline logo'><img src={Logo} alt="" /></li>
                    </button>

                    <li 
                        className='catalog-item' 
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                    >
                        ВЕСЬ КАТАЛОГ
                        <div className={`catalog-popup ${isPopupVisible ? 'visible' : ''}`}>
                            <ul>
                                <li><button onClick={() => handleFilterChange('Макарон')}>Макароны</button></li>
                                <li><button onClick={() => handleFilterChange('Эклер')}>Эклеры</button></li>
                                <li><button onClick={() => handleFilterChange('Кейк-попс')}>Кейк-попсы</button></li>
                                <li><button onClick={() => handleFilterChange('Зефир')}>Зефир</button></li>
                            </ul>
                        </div>
                    </li>
                    <li className='no-underline catalog'>КОМПАНИЯМ</li>
                </ul>
            </div>
        </div>
    );
};

export default HeaderPartTwo;
