import React from 'react';
import './Sale.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const limitWords = (str, num) => {
    return str.split(" ").slice(0, num).join(" ") + (str.split(" ").length > num ? "..." : "");
};

const Sale = () => {
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.setsSlice);
    const saleItems = data.filter(item => item.sale > 0);

    const handleAddToCart = (item) => {
        dispatch(addToCart({...item, id: item.id, count: 1 }));
    };

    return (
        <section className='sale'>
            <div className="sale__navigate">
                <div>
                    <p><Link to={'/'}>Главная страница</Link></p>
                    <p><MdKeyboardDoubleArrowRight /> Товары со скидкой</p>
                </div>
                <h2>Акция: сладкие дни!</h2>
                <p>Неделя скидок на авторские и подарочные наборы макарон</p>
            </div>
            <div className="container">
                {saleItems.map((el, index) => (
                    <div className="sale__card" key={el.id}>
                        <Link to={`/oneitem/${el.id}`}>
                            <img src={el.img} alt={el.name} />
                        </Link>
                        <h4>{el.title}</h4>
                        <p>{limitWords(el.description, 8)}</p>
                        <div className={`sale__price ${el.sale === 0 ? 'no-sale' : ''}`}>
                            {el.sale > 0 ? (
                                <>
                                    <p className="original-price">{el.price} руб</p>
                                    <p className="discounted-price">{(el.price - (el.price / 100 * el.sale)).toFixed(2)} руб</p>
                                </>
                            ) : (
                                <p className="discounted-price">{el.price} руб</p>
                            )}
                        </div>
                        <div className="sale__actions">
                            <Link to={`/oneitem/${el.id}`}>
                                <button className='sale-button'>В магазин</button>
                            </Link>
                            <button 
                                className='add-to-cart-button'
                                onClick={() => handleAddToCart(el)}
                            >
                                В корзину
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Sale;
