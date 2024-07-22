import React from 'react';
import Error from './image/404.png'
import './NotFound.scss'
import { Link } from 'react-router-dom';



const NotFound = () => {
    return (
        <section className='notFound'>
            <p>Извините, страница не найдена</p>
            <img src={Error} alt="" />
            <Link to={'/'}>
                <button>Назад</button>
            </Link>
        </section>
    );
};

export default NotFound;