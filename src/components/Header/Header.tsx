import React from "react";
import './Header.css'
import vikingLeft from '../../img/VikingLeft.png';
import viking from '../../img/Viking.png';
import vikingRight from '../../img/VikingRight.png';

export function Header() {
    return(
        <div>
            <section>
                <div className="header__img">
                    <img src={vikingLeft} alt="" className='vikingLeft'/>
                    <img src={viking} alt="viking" className='viking'/>
                    <img src={vikingRight} alt="" className='vikingRight'/>
                </div>
                <h1>Fenrir The Monster Wolf of Norse Mythology Necklace</h1>
                <span>$19.95 $29.95</span>
                <button className='header__btn'>Start Shopping</button>
            </section>
        </div>
    )
}