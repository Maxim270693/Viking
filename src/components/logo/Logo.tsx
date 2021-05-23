import React from "react";
import './Logo.css'
import logo from '../../img/logo.png'
import search from '../../img/search.png'
import basket from '../../img/basket.png'
import {Header} from "../Header/Header";

export function Logo() {
    return(
        <div>
            <header>
                <div className="logo">
                    <img src={logo} alt={"logo"}/>
                </div>
                <nav className="nav">
                    <ul className="nav__items">
                        <li className="nav__item vikings">Vikings</li>
                        <li className="nav__item Ancient">Ancient Egypt</li>
                        <li className="nav__item Celtics">Celtics</li>
                        <li className="nav__item sale">Sale</li>
                    </ul>
                </nav>
                <div className="btn">
                    <img src={search} alt="search" className="search__btn"/>
                    <img src={basket} alt="basket" className="basket__btn"/>
                    {/*<span>8</span>*/}
                </div>
            </header>
            <Header/>
        </div>
    )
}