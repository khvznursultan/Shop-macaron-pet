import React from 'react';
import './Popular.scss';
import { useSelector } from 'react-redux';



const Popular = () => {
    const { data } = useSelector(state => state.setsSlice)
    const limitedData = data.slice(0, 6);
    const keysSet = new Set();
    return (
        <section className='popular'>
            <div className="container">
                <h2>Популярные наборы</h2>
                <div className="popular__cards">
                    {limitedData.map((el, idx) => {
                        let key = el.id ? el.id : `key-${idx}`;
                        while (keysSet.has(key)) {
                            key = `key-${idx}-${Math.random()}`;
                        }
                        keysSet.add(key);

                        return (
                            <div className="popular__card" key={key}>
                                <img src={el.img} alt={el.name} />
                                <h4>{el.name}</h4>
                                <p>{el.compound}</p>
                                <div className="popular__price">
                                    <p className="original-price">{el.price} руб</p>
                                    <p className="discounted-price">{(el.price - (el.price / 100 * el.sale)).toFixed(2)} руб</p>
                                </div>
                                <button>В корзину</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );


};
export default Popular;