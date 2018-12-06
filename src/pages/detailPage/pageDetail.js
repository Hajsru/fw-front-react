import React, { Component } from 'react';

class pageDetail extends Component {
    render(){
        return (
            <main className="app-main">
                <section id="page" className="section">
                    <div className="item-page">
                        <div className="item-page__aside">
                            <div className="item__avatar">
                                <img src="img/report1.jpg" alt="" className="item__cover" />
                            </div>
                            <div className="rating item__rating details__rating" data-rating="5">
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

                            <h1 className="item__title">«Убей в себе программиста-ковбоя»</h1>
                            <h2 className="item__description">Александр Горбач</h2>
                            <p><a href="/#" className="item__data-link">Презентация</a></p>
                            <p><a href="/#" className="item__data-link">Видео</a></p>

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

export default pageDetail;