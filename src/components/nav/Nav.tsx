import React from 'react';
import logo from "../../img/logo.png";
import {Navigation} from "../navigation/Navigation";
import {MobileNavigation} from "../mobileNavigation/mobileNavigation";
import {NavLink} from "react-router-dom";
import search from "../../img/search.png";
import basket from "../../img/basket.png";

const Nav = () => {
    return (
        <div>
            <header>
                <div className="logo__wrapper">
                    <img src={logo} alt={"logo"}/>
                </div>
                <Navigation/>
                <MobileNavigation />
                <div className="btn">
                    <NavLink to={'/search/'}><img src={search} alt="search" className="search__btn"/></NavLink>
                    <img onClick={() => alert("Hello")} src={basket} alt="basket" className="basket__btn"/>
                </div>
            </header>
        </div>
    );
};

export default Nav;