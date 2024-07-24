import React, { useEffect } from 'react';
import './Catalog.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/productsSlice';
import { Link } from 'react-router-dom';

const Catalog = () => {
    const dispatch = useDispatch();
    const { filteredItems, status, error } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    useEffect(() => {
        console.log(filteredItems);
    }, [filteredItems]);
    const limitWords = (text, limit) => {
        return text.split(' ').slice(0, limit).join(' ') + (text.split(' ').length > limit ? '...' : '');
    };


    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;

    return (
        <section className="catalog">
            <div className="catalog__navigate">
                <h2>Каталог товаров</h2>
            </div>
            <div className="container">
                {filteredItems.map((el) => (
                    <div className="catalog__card" key={el.id}>
                        <Link to={`/oneitem/${el.id}`}>
                            <img src={el.img} alt={el.title} />
                        </Link>
                        <h4>{el.title}</h4>
                        <p>{limitWords(el.description, 8)}</p>
                        <div className={`sale__price ${el.sale === 0 ? 'no-sale' : ''}`}>
                            {el.sale > 0 ? (
                                <>
                                    <p className="original-price">{el.price} руб</p>
                                    <p className="discounted-price">
                                        {(el.price - (el.price / 100 * el.sale)).toFixed(2)} руб
                                    </p>
                                </>
                            ) : (
                                <p className="discounted-price">{el.price} руб</p>
                            )}
                        </div>
                        <Link to={`/oneitem/${el.id}`}>
                            <button className='AllClothes-button'>В магазин</button>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Catalog;
