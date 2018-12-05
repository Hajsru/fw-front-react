import React, { Component } from 'react';

class pageSpeakers extends Component {
    render(){
        return (
            <main className="app-main">
                <section className="section">
                    <h1 className="section__title">Спикеры</h1>
                    <ul className="section__grid items">
                        <li className="item">
                            <a href="details.html" className="item__link">
                                <div className="item__avatar">
                                    <img src="img/antonov.jpg" alt="" className="item__img" />
                                </div>
                                <div className="item__title">Игорь Антонов</div>
                                <p className="item__description">HTML Academy</p>
                                <div className="rating item__rating" data-rating="5">
                                    <div className="rating__star-wrap rating__empty-star-wrap">
                                        <span className="rating__star rating__star_empty">&#9734;</span>
                                        <span className="rating__star rating__star_empty">&#9734;</span>
                                        <span className="rating__star rating__star_empty">&#9734;</span>
                                        <span className="rating__star rating__star_empty">&#9734;</span>
                                        <span className="rating__star rating__star_empty">&#9734;</span>
                                    </div>
                                    <div className="rating__star-wrap rating__fill-star-wrap">
                                        <span className="rating__star rating__star_fill">&#9733;</span>
                                        <span className="rating__star rating__star_fill">&#9733;</span>
                                        <span className="rating__star rating__star_fill">&#9733;</span>
                                        <span className="rating__star rating__star_fill">&#9733;</span>
                                        <span className="rating__star rating__star_fill">&#9733;</span>
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li className="item">
                            <a href="details.html" className="item__link">
                                <div className="item__avatar">
                                    <img src="img/tkachenko.jpg" alt="" className="item__img" />
                                </div>
                                <div className="item__title">Денис Ткаченко</div>
                                <p className="item__description"> </p>
                                <div className="rating item__rating" data-rating="4.5">
                                    <div className="rating__star-wrap rating__empty-star-wrap">
                                        <span className="rating__star rating__star_empty">&#9734;</span>
                                        <span className="rating__star rating__star_empty">&#9734;</span>
                                        <span className="rating__star rating__star_empty">&#9734;</span>
                                        <span className="rating__star rating__star_empty">&#9734;</span>
                                        <span className="rating__star rating__star_empty">&#9734;</span>
                                    </div>
                                    <div className="rating__star-wrap rating__fill-star-wrap">
                                        <span className="rating__star rating__star_fill">&#9733;</span>
                                        <span className="rating__star rating__star_fill">&#9733;</span>
                                        <span className="rating__star rating__star_fill">&#9733;</span>
                                        <span className="rating__star rating__star_fill">&#9733;</span>
                                        <span className="rating__star rating__star_fill">&#9733;</span>
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li className="item">
                            <a href="details.html" className="item__link">
                                <div className="item__avatar">
                                    <img src="img/gorbach.jpg" alt="" className="item__img" />
                                </div>
                                <div className="item__title">Александр Горбач</div>
                                <p className="item__description">FoxiFinder (Израиль, Remote)</p>
                                <div className="rating item__rating" data-rating="4.5">
                                    <div className="rating__star-wrap rating__empty-star-wrap">
                                        <span className="rating__star rating__star_empty">&#9734;</span>
                                        <span className="rating__star rating__star_empty">&#9734;</span>
                                        <span className="rating__star rating__star_empty">&#9734;</span>
                                        <span className="rating__star rating__star_empty">&#9734;</span>
                                        <span className="rating__star rating__star_empty">&#9734;</span>
                                    </div>
                                    <div className="rating__star-wrap rating__fill-star-wrap">
                                        <span className="rating__star rating__star_fill">&#9733;</span>
                                        <span className="rating__star rating__star_fill">&#9733;</span>
                                        <span className="rating__star rating__star_fill">&#9733;</span>
                                        <span className="rating__star rating__star_fill">&#9733;</span>
                                        <span className="rating__star rating__star_fill">&#9733;</span>
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li className="item">
                            <a href="details.html" className="item__link">
                                <div className="item__avatar">
                                    <img src="img/vidyaeva.jpg" alt="" className="item__img" />
                                </div>
                                <div className="item__title">Валентина Видяева</div>
                                <p className="item__description">Верстальщик "Перфектура"</p>
                                <div className="rating item__rating" data-rating="4.5">
                                    <div className="rating__star-wrap rating__empty-star-wrap">
                                        <span className="rating__star rating__star_empty">&#9734;</span>
                                        <span className="rating__star rating__star_empty">&#9734;</span>
                                        <span className="rating__star rating__star_empty">&#9734;</span>
                                        <span className="rating__star rating__star_empty">&#9734;</span>
                                        <span className="rating__star rating__star_empty">&#9734;</span>
                                    </div>
                                    <div className="rating__star-wrap rating__fill-star-wrap">
                                        <span className="rating__star rating__star_fill">&#9733;</span>
                                        <span className="rating__star rating__star_fill">&#9733;</span>
                                        <span className="rating__star rating__star_fill">&#9733;</span>
                                        <span className="rating__star rating__star_fill">&#9733;</span>
                                        <span className="rating__star rating__star_fill">&#9733;</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </section>
            </main>
        );
    }
}

export default pageSpeakers;