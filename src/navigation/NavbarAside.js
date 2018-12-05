import React, { Component } from 'react';

class NavbarAside extends Component {
    render(){
        return (
            <nav className="app-nav">
                <ul className="app-nav__list">
                    <li className="app-nav__list-item">
                        <a href="/events" className="app-nav__link">Митапы</a>
                    </li>
                    <li className="app-nav__list-item">
                        <a href="/speakers" className="app-nav__link">Спикеры</a>
                    </li>
                    <li className="app-nav__list-item">
                        <a href="/reports" className="app-nav__link">Доклады</a>
                    </li>
                    <li className="app-nav__list-item">
                        <a href="/detail" className="app-nav__link">Страница доклада</a>
                    </li>
                    <li className="app-nav__list-item">
                        <a href="/registration" className="app-nav__link">Регистрация на митап</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavbarAside;