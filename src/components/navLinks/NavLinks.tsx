import React from "react";
import {isModalAC} from "../../main/bll/reducer";
import {useDispatch} from "react-redux";


export const NavLinks = () => {
    const dispatch = useDispatch()

    return(
        <div>
            <ul className="nav__items">
                <li className="nav__item vikings">Vikings</li>
                <li className="nav__item Ancient">Ancient Egypt</li>
                <li className="nav__item Celtics">Celtics</li>
                <li onClick={() => dispatch(isModalAC(true))} className="nav__item sale">Sale</li>
            </ul>
        </div>
    )
}