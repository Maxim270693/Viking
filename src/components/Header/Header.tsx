import React from "react";
import './Header.css'

export function Header() {
    return(
        <div>
            <section>
                <div className="header__img">
                    <h1>Fenrir The Monster Wolf of Norse<br/> Mythology Necklace</h1>
                    <p className='header__text'>$19.95 <span className='header__text-item'>$29.95</span></p>
                    <button className='header__btn'>Start Shopping</button>
                </div>
            </section>
        </div>
    )
}