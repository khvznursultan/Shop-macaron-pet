import React from 'react';
import './Sets.scss'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';




const limitWords = (str, num) => {
    return str.split(" ").slice(0, num).join(" ") + (str.split(" ").length > num ? "..." : "");
};
const Sets = () => {
    const { data } = useSelector(state => state.setsSlice);

    const setsItems = data.filter(item => item.sale > 0);
    return (
        <section className='sets'>
            <div className="sets__navigate">
                <div>
                    <p><Link to={'/'}>Главная страница</Link></p><p><MdKeyboardDoubleArrowRight />Наборы</p>
                </div>
                <h2>Подарочные наборы</h2>
            </div>
            <div className="container">
                {setsItems.map((el, index) => (
                    <div className="sets__card" key={el.id}>
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
                        <Link to={`/oneitem/${el.id}`}>
                            <button className='sets-button'>В магазин</button>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Sets;