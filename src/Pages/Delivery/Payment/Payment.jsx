import React from 'react';
import './Payment.scss'
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import Velik from './image/velik.png'

const Payment = () => {
    return (
        <section className='payment'>
            <div className="payment__navigate">
                <div>
                    <p><Link to={'/'}>Главная страница</Link></p><p><MdKeyboardDoubleArrowRight />Доставка и оплата</p>
                </div>
            </div>
            <div className="payment__container container">
                <div className="payment__left">
                    <img src={Velik} alt="" />
                </div>
                <div className="payment__right">
                    <h2>Доставка и оплата</h2>
                    <h3>Для наших покупателей доступны 2 способа доставки: курьерская доставка по Санкт-Петербургу в пределах КАД и самовывоз.</h3>
                    <h4>Курьерска доставка:</h4>
                    <p>Курьеры работают каждый день с 11 до 21 часа. Доставка макарон осуществляется только по Санкт-Петербургу в пределах кольцевой автомобильной дороги (КАД). Точная зона доставки. </p>
                    <p>Если Вы готовы принять заказ в интервале с 12 до 17 часов или с 17 до 21 часа, то доставка будет стоить 300 рублей. </p>
                    <p>При заказе от 3000 рублей доставка БЕСПЛАТНАЯ.</p>
                    <p>При оформлении заказа до 15 часов возможна доставка в тот же день в промежутке с 17 до 21 часа.</p>
                    <p>Курьер предупредит Вас о своём прибытии за 30-40 минут.</p>
                </div>
            </div>
        </section>
    );
};

export default Payment;