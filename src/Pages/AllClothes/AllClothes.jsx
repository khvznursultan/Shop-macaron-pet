import React, { useState } from 'react';
import './AllClothes.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const limitWords = (str, num) => {
    return str.split(" ").slice(0, num).join(" ") + (str.split(" ").length > num ? "..." : "");
};

const AllClothes = () => {
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.setsSlice); 
    console.log({data});
    const [selectedCategory, setSelectedCategory] = useState('Все');

    
    const filteredItems = selectedCategory === 'Все'
    ? data
    : data.filter(item => item.purpose === selectedCategory);

    const handleAddToCart = (item) => {
        dispatch(addToCart({ ...item, id: item.id, count: 1 }));
    };

    return (
        <section className='allClothes'>
            <div className="allClothes__navigate">
                <div>
                    <p><Link to={'/'}>Главная страница</Link></p>
                    <p><MdKeyboardDoubleArrowRight />{selectedCategory}</p>
                </div>
            </div>
            <div className="container">
                <ul className='allClothes__filters'>
                    <li onClick={() => setSelectedCategory('Все')}>Все</li>
                    <li onClick={() => setSelectedCategory('Завтрак')}>Завтрак</li>
                    <li onClick={() => setSelectedCategory('Свадьба')}>Свадьба</li>
                    <li onClick={() => setSelectedCategory('Хэллоуин')}>Хэллоуин</li>
                    <li onClick={() => setSelectedCategory('День рождение')}>День рождение</li>
                    <li onClick={() => setSelectedCategory('Классический')}>Классический</li>
                </ul>
                <div className="allClothes__items">
                    {filteredItems.map((el) => (
                        <div className="allClothes__card" key={el.id}>
                            <Link to={`/oneitem/${el.id}`}>
                                <img src={el.img} alt={el.title} />
                            </Link>
                            <h4>{el.title}</h4>
                            <p>{limitWords(el.description, 8)}</p>
                            <div className={`allClothes__price ${el.sale === 0 ? 'no-sale' : ''}`}>
                                {el.sale > 0 ? (
                                    <>
                                        <p className="original-price">{el.price} руб</p>
                                        <p className="discounted-price">{(el.price - (el.price / 100 * el.sale)).toFixed(2)} руб</p>
                                    </>
                                ) : (
                                    <p className="discounted-price">{el.price} руб</p>
                                )}
                            </div>
                            <div className="allClothes__actions">
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
            </div>
        </section>
    );
};

export default AllClothes;
