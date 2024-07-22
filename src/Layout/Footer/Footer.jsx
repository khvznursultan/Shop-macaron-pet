import React from 'react';
import './Footer.scss';
import Car from './assets/car (2).png';
import Hamb from './assets/hamurger.png';
import List from './assets/list.png';
import { CiInstagram } from "react-icons/ci";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-3 col-xl-2">
                        <div className="footer__widget">
                            <h3>Информация</h3>
                            <div className="textwidget">
                                <p>
                                    <a href="https://macaronshop.ru/o-nas/">О компании</a><br />
                                    <a href="/garanty/">Гарантии вкуса и свежести</a><br />
                                    <a href="/delivery/">Доставка и оплата</a><br />
                                    <a href="/contacts/">Контакты</a><br />
                                    <a href="https://macaronshop.ru/privacy-policy/">Политика конфиденциальности</a><br />
                                    <a href="https://macaronshop.ru/vkusy-macarons/">Вкусы макарон</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-xl-2">
                        <div className="footer__widget">
                            <h3>Каталог</h3>
                            <div className="textwidget">
                                <p>
                                    <a href="/catalog/">Каталог десертов</a><br />
                                    <a href="https://macaronshop.ru/catalog/podarochnye-nabory/">Подарочные наборы</a><br />
                                    <a href="/sobrat-nabor/">Собрать свой набор</a><br />
                                    <a href="https://macaronshop.ru/print/">Создать дизайн</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-xl-2">
                        <div className="footer__widget">
                            <h3>Для бизнеса</h3>
                            <div className="textwidget">
                                <p>
                                    <a href="https://macaronshop.ru/korporativnye-podarki/">Корпоративные подарки</a><br />
                                    <a href="https://macaronshop.ru/deserty-dlya-kofejni/">Оптовикам</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-xl-2 footer__last">
                        <div className="widget_text footer__widget">
                            <div className="textwidget custom-html-widget">
                                <a href="tel:+7 (812) 309 82 88" className="footer__phone">+7 (812) 309 82 88</a><br />
                                с 9:00 до 18:00
                            </div>
                        </div>
                        <div className="socials">
                            <a href="https://t.me/macaron_shop" className="socials__item socials__telegram" target="_blank" rel="nofollow noopener">
                                <CiInstagram />
                            </a>
                            <a href="https://vk.com/macaronshop" className="socials__item socials__vk" target="_blank" rel="nofollow noopener">
                                <SlSocialVkontakte />
                            </a>
                            <a href="https://ok.ru/group/62315085824126" className="socials__item socials__ok" target="_blank" rel="nofollow noopener">
                                <FaFacebook />
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4 order-xl-first">
                        <div className="footer__features">
                            <div className="footer__left__img">
                                <img src={Hamb} alt="Hamburger" />
                                <p>Готовим вручную и с любовью</p>
                            </div>
                            <div className="footer__left__img">
                                <img src={Car} alt="Car" />
                                <p>Доставим в день заказа</p>
                            </div>
                            <div className="footer__left__img">
                                <img src={List} alt="List" />
                                <p>100% миндальная мука и натуральные ингредиенты</p>
                            </div>
                            <p>© 2021 Макароншоп ООО "Квантум", Санкт-Петербург, улица Маршала Тухачевского, дом 22</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
