import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import './OneItem.scss'
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

const OneItem = ({el}) => {
    const location = useLocation();
    const id = location.pathname.split('/').at(-1);

    const [one, setOne] = useState({});

    useEffect(() => {
        axios(`http://localhost:8080/clothes/${id}`)
            .then(({ data }) => setOne(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    const dispatch = useDispatch()
    const add = (el) =>{
        dispatch(addToCart(el))
    }

    return (
        <section className='oneItem'>
            <div className="oneItem__navigate">
                <p><Link to={'/'}>Главная страница</Link></p><p><MdKeyboardDoubleArrowRight />{one.title}</p>
            </div>
            <div className="oneItem__container container">
                {one.img && <img className='oneImg' src={one.img} alt={one.title} />}
                <div className="oneItem__block">
                    <h3 className='oneTitle'>{one.title}</h3>
                    <div className="oneItem__block__compound">
                        <h4>Вкусы:</h4>
                        {Array.isArray(one.compound) ? (
                            one.compound.map((el, index) => (
                                <p key={index}>{el}</p>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                    <div className="oneItem__block__description">
                        <h4>Описание:</h4>
                        <p>{one.description}</p>
                    </div>
                    <div className="oneItem__block__buy">
                        <div className="oneItem__block__buy__price">
                            {one.sale > 0 ? (
                                <>
                                    <p className="original-price">{one.price} руб</p>
                                    <p className="discounted-price">{(one.price - (one.price / 100 * one.sale)).toFixed(2)} руб</p>
                                </>
                            ) : (
                                <p className="final-price">{one.price} руб</p>
                            )}
                        </div>
                        <button onClick={()=>add({...one, count:1})}><MdOutlineShoppingBag className='buyShop' />В корзину</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OneItem;