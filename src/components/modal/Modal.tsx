import React from "react";
import './modal.css'


type PropsType = {
    modalActive: boolean
    setModalActive: (active: boolean) => void
    children: any
}

export function Modal(props: PropsType) {
    return (

        <div className={props.modalActive ? 'modal active' : 'modal'}>
            <div className={props.modalActive ? "modal__content active" : "modal__content"}
                 onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    )
}