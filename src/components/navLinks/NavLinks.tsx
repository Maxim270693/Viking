import React, {useState} from "react";

export const NavLinks = () => {

    const [modalActive,setModalActive] = useState( true)

    return(
        <div>
            <ul className="nav__items">
                <li className="nav__item vikings">Vikings</li>
                <li className="nav__item Ancient">Ancient Egypt</li>
                <li className="nav__item Celtics">Celtics</li>
                <li onClick={() => setModalActive(true)} className="nav__item sale">Sale</li>
            </ul>
        </div>
    )
}