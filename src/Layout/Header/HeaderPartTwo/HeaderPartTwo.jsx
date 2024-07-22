import React from 'react';
import './HeaderPartTwo.scss';
import Logo from './assets/лого.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const HeaderPartTwo = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/')
    }

    return (
        <div className='headerTwo'>
            <div className="headerTwo__container container">
                <ul>
                    <Link to={'/sale'}>
                        <li className='no-underline'>СЛАДКИЕ ДНИ <span className='percent'>%</span></li>
                    </Link>
                    <Link to={'/sets'}>
                        <li>подарочные наборы</li>
                    </Link>
                    <button onClick={goToHome}>
                        <li className='no-underline logo'><img src={Logo} alt="" /></li>
                    </button>

                    <li>КОМПАНИЯМ</li>
                    <li className='no-underline catalog'>ВЕСЬ КАТАЛОГ</li>
                </ul>
            </div>
        </div>
    );
};

export default HeaderPartTwo;
