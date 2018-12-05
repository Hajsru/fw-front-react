import React, { Component } from 'react';

class MainPage extends Component {
    render(){
        return (
            <main className="app-main">
                <section className="section">
                    <h1 className="section__title">Ha.js</h1>
                    <div className="section__content">
                        <h2>Встреча фронтенд-разработчиков Хабаровска.</h2>
                        <p>27 октября 2018, 14:00, ул. Ленинградская 28Г, BurgX.</p>
                        <p>Участие платное — 250 рублей при регистрации на сайте или 350 рублей в день мероприятия. Как участвовать бесплатно? Легко! Станьте докладчиком.</p>
                        <p>В разделах <a href="events.html">Митапы</a>,
                            <a href="speakers.html">Спикеры</a> и
                            <a href="reports.html">Доклады</a> можно найти все материалы, а также оценить спикера, его доклад или митап в целом.</p>
                    </div>
                </section>

                <section id="page" className="section">
                    <div className="item-page">
                        <div className="item-page__aside">
                            <div className="item__avatar">
                                <img src="img/report1.jpg" alt="" className="item__cover" />
                            </div>
                            <div className="item__rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            <div className="item__title">«Убей в себе программиста-ковбоя»</div>
                            <p className="item__description">Александр Горбач</p>

                            <button className="item__btn">Комментировать</button>
                        </div>
                        <div className="item-page__main">
                            <div className="comments-list">
                                <div className="comment">
                                    <div className="comment__author">Автор комментария</div>
                                    <div className="comment__block">
                                        <div className="comment__block-title">Достоинства</div>
                                        <div className="comment__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora et illum molestiae esse dolore dolores aliquid reprehenderit ab provident aperiam!</div>
                                    </div>
                                    <div className="comment__block">
                                        <div className="comment__block-title">Недостатки</div>
                                        <div className="comment__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora et illum molestiae esse dolore dolores aliquid reprehenderit ab provident aperiam!</div>
                                    </div>
                                    <div className="comment__block">
                                        <div className="comment__block-title">Комментарий</div>
                                        <div className="comment__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora et illum molestiae esse dolore dolores aliquid reprehenderit ab provident aperiam!</div>
                                    </div>
                                </div>

                                <div className="comment">
                                    <div className="comment__block">
                                        <div className="comment__author">Автор комментария</div>
                                        <div className="comment__block-title">Комментарий</div>
                                        <div className="comment__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora et illum molestiae esse dolore dolores aliquid reprehenderit ab provident aperiam!</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default MainPage;