import React, { Component } from 'react';

class Header extends Component {
    render(){
        return (
            <header>
                <a href="/" className="logo-block">
                    <picture className="logo-picture">
                        <source srcSet="img/logo-small.png" media="(max-width: 767px)" />
                        <source srcSet="img/logo-big.png" media="(min-width: 768px)" />
                        <img srcSet="img/logo.png" className="logo" alt="Ha.js" />
                    </picture>
                </a>
            </header>
        );
    }
}

export default Header;
