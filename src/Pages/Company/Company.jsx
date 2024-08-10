import React from 'react';
import './Company.scss'
import Pirog from './Assets/image 1.png'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Macaron from './Assets/macarons-dlya-cafe-2.png'
import Eclery from './Assets/optom-eklery.png'
import Cartosh from './Assets/pirozhnie-kartoshka-2.png'
import Cake from './Assets/cake-pops.png'

const Company = () => {
    return (
        <section className='company'>
            <div className="container">
                <div className="company__navigate">
                    <div>
                        <p><Link to={'/'}>Главная страница</Link></p><p><MdKeyboardDoubleArrowRight />Компаниям</p>
                    </div>
                </div>
                <div className="company__top">
                    <img src={Pirog} alt="" />
                    <div className="company__top__block">
                        <h2>Десерты для кофейни</h2>
                        <p>Акция! Специальные условия доставки по России.</p>
                        <a href="">Подробнее</a>
                        <p>Мы с 2013 года производим и поставляем оптом пирожные для кофеен и кафе. Наши десерты продаются в крупнейших кондитерских сетях Москвы и Петербурга. Они яркие, натуральные, позволяют делать высокую наценку, за ними возвращаются покупатели.</p>
                    </div>
                </div>
                <div className="company__bottom">
                    <div className="company__bottom__clothes">
                        <img src={Macaron} alt="" />
                        <h4>Французские макаронс</h4>
                        <p>22 потрясающих классических и авторских вкуса в линейке</p>
                    </div>
                    <div className="company__bottom__clothes">
                        <img src={Eclery} alt="" />
                        <h4>Эклеры</h4>
                        <p>Вкусы: арахис, ваниль, карамель, малина, смородина, фисташка, шоколад</p>
                    </div>
                    <div className="company__bottom__clothes">
                        <img src={Cake} alt="" />
                        <h4>Кейк-попсы</h4>
                        <p>С добавлением миндальной муки: три цвета</p>
                    </div>
                    <div className="company__bottom__clothes">
                        <img src={Cartosh} alt="" />
                        <h4>Пирожные-картошка</h4>
                        <p>С натуральной вишневой посыпкой</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Company;