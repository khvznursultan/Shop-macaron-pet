import React from 'react';
import './Popular.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const limitWords = (text, wordLimit) => {
    const words = text.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
};

const Popular = () => {
    const { data } = useSelector(state => state.setsSlice);
    const limitedData = data.slice(0, 6);
    const keysSet = new Set();

    return (
        <section className='popular'>
            <div className="container">
                <h2 className='popular-text'>Популярные наборы</h2>
                <div className="popular__cards">
                    {limitedData.map((el, idx) => {
                        let key = el.id ? el.id : `key-${idx}`;
                        while (keysSet.has(key)) {
                            key = `key-${idx}-${Math.random()}`;
                        }
                        keysSet.add(key);
                        return (
                            <div className="popular__card" key={key}>
                                <Link to={`/oneitem/${el.id}`}>
                                    <img src={el.img} alt={el.name} />
                                </Link>
                                <h4>{el.title}</h4>
                                <p>{limitWords(el.description, 8)}</p>
                                <div className={`popular__price ${el.sale === 0 ? 'no-sale' : ''}`}>
                                    {el.sale > 0 ? (
                                        <>
                                            <p className="original-price">{el.price} руб</p>
                                            <p className="discounted-price">{(el.price - (el.price / 100 * el.sale)).toFixed(2)} руб</p>
                                        </>
                                    ) : (
                                        <p className="discounted-price">{el.price} руб</p>
                                    )}
                                </div>
                                <Link to={`/oneitem/${el.id}`}>
                                    <button className='popular-button'>В магазин</button>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Popular;
