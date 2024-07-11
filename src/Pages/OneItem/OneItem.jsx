import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './OneItem.scss'

const OneItem = () => {
    const location = useLocation();
    const id = location.pathname.split('/').at(-1);

    const [one, setOne] = useState({});

    useEffect(() => {
        axios(`http://localhost:8080/clothes/${id}`)
            .then(({ data }) => setOne(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    return (
        <section className='oneItem'>
            <div className="oneItem__container container">
                {one.img && <img className='oneImg' src={one.img} alt={one.title} />}
                <div className="oneItem__block">
                    <h4 className='oneTitle'>{one.title}</h4>
                    <div className="oneItem__block__compound">
                        <p>Вкусы</p>
                        {Array.isArray(one.compound) ? (
                            one.compound.map((el, index) => (
                                <p key={index}>{el}</p>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                    <div className="oneItem__block__description">
                        <h4>Описание</h4>
                        <p>{one.description}</p>
                    </div>
                    <div className="oneItem__block__buy">
                        <p className="original-price">{one.price} руб</p>
                        <p className="discounted-price">{(one.price - (one.price / 100 * one.sale)).toFixed(2)} руб</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OneItem;