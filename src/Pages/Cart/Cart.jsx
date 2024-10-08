import React, { useEffect, useState } from 'react';
import './Cart.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { addToCart, deleteCart } from '../../store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cartSlice);
    const [promoCodeInput, setPromoCodeInput] = useState('');
    const [promoCodes, setPromoCodes] = useState([]); 
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart) {
            storedCart.forEach(item => {
                dispatch(addToCart({ ...item, count: item.count }));
            });
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        fetch('http://localhost:8080/promocode')
            .then(response => response.json())
            .then(data => {
                console.log('Загруженные промокоды:', data);
                setPromoCodes(data || []);
            })
            .catch(error => console.error('Ошибка загрузки промокодов:', error));
    }, []);

    const handleIncrement = (id) => {
        dispatch(addToCart({ id, count: 1 }));
    };

    const handleDecrement = (id) => {
        const item = cart.find(el => el.id === id);
        if (item && item.count > 1) {
            dispatch(addToCart({ id, count: -1 }));
        }
    };

    const handleDelete = (id) => {
        dispatch(deleteCart({ id }));
    };

    const handlePromoCode = () => {
        if (!promoCodes) {
            alert('Ошибка: Промокоды не загружены.');
            return;
        }

        const code = promoCodes.find(promo => promo.text === promoCodeInput);
        if (code) {
            setDiscount(code.sale);
        } else {
            setDiscount(0);
            alert('Неверный промокод');
        }
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => {
            const itemPrice = item.sale > 0
                ? item.price - (item.price / 100 * item.sale)
                : item.price;
            return total + itemPrice * item.count;
        }, 0);
    };

    const getTotalDiscount = () => {
        return (getTotalPrice() * discount) / 100;
    };

    return (
        <section className='cart'>
            <div className="oneItem__navigate">
                <p><Link to={'/'}>Главная страница</Link></p><p><MdKeyboardDoubleArrowRight />Ваша корзина</p>
            </div>
            <div className="cart__container container">
                <h2>Ваша корзина</h2>
                {cart.map((el) => (
                    <div key={el.id} className="cart__item">
                        <div className='cart__item__left'>
                            <img src={el.img} alt={el.title} />
                            <h4>{el.title}</h4>
                        </div>
                        <div className="cart__item__count">
                            <button onClick={() => handleDecrement(el.id)}>-</button>
                            <p className='count'>{el.count}</p>
                            <button onClick={() => handleIncrement(el.id)}>+</button>
                        </div>
                        <div className="cart__item__price">
                            {el.sale > 0 ? (
                                <>
                                    <p className="original-price">{el.price} руб</p>
                                    <p className="discounted-price">Цена: {(el.price - (el.price / 100 * el.sale)).toFixed(2)} руб</p>
                                </>
                            ) : (
                                <p className="final-price">Цена: {el.price} руб</p>
                            )}
                        </div>
                        <RxCross2 className="remove-icon" onClick={() => handleDelete(el.id)} />
                    </div>
                ))}
                <div className="cart__item__total">
                    <h5>Итого</h5>
                    <div className="cart__item__total__price">
                        <p>Стоимость товаров</p> <p>{getTotalPrice().toFixed(2)} руб</p>
                    </div>
                    <div className="cart__item__total__sale">
                        <p>Скидка</p> <p>{getTotalDiscount().toFixed(2)} руб</p>
                    </div>
                    <div className="line"></div>
                    <div className="cart__item__total__final">
                        <p>К оплате</p> <p>{(getTotalPrice() - getTotalDiscount()).toFixed(2)} руб</p>
                    </div>
                    <div className="line"></div>
                    <div className="form">
                        <p>Промокод</p>
                        <input
                            type="text"
                            placeholder='Введите промокод'
                            value={promoCodeInput}
                            onChange={(e) => setPromoCodeInput(e.target.value)}
                        />
                        <button onClick={handlePromoCode}>Применить</button>
                    </div>
                    <button className="checkout-button">Оформить заказ</button>
                </div>
            </div>
        </section>
    );
};

export default Cart;
