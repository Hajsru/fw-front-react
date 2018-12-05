import React, { Component } from 'react';

class pageReports extends Component {
    render(){
        return (
            <main className="app-main">
                <section className="section">
                    <h1 className="section__title">Доклады</h1>
                    <div className="section__grid">
                        <ul className="section__grid items">
                            <li className="item">
                                <a href="details.html" className="item__link">
                                    <div className="item__avatar">
                                        <img src="img/report1.jpg" alt="" className="item__cover" />
                                    </div>
                                    <div className="item__title">«Убей в себе программиста-ковбоя»</div>
                                    <p className="item__description">Александр Горбач</p>
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
                                        <img src="img/report3.jpg" alt="" className="item__cover" />
                                    </div>
                                    <div className="item__title">«Тянем резину»</div>
                                    <p className="item__description">Борис Черепанов</p>
                                    <div className="rating item__rating" data-rating="4">
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
                                        <img src="img/report2.jpg" alt="" className="item__cover" />
                                    </div>
                                    <div className="item__title">«CSS, которого у вас нет»</div>
                                    <p className="item__description">Валентина Видяева</p>
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
                        </ul>
                    </div>
                </section>
            </main>
        );
    }
}

export default pageReports;