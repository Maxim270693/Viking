import React, {useState} from "react";
import './Logo.css';
import {Header} from "../Header/Header";
import {Modal} from "../modal/Modal";
import img1 from '../../img/img1.png';
import img2 from '../../img/img2.png';
import img3 from '../../img/img3.png';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../main/bll/store";
import {isModalAC, PriceType} from "../../main/bll/reducer";
import Nav from "../nav/Nav";

export function Logo() {

    const dispatch = useDispatch()
    const isModal = useSelector<RootStoreType, boolean>((state) => state.price.isModal )


    const [addCart,setAddCart] = useState(0)
    const [addSum,setAddSum] = useState(19.95)

    let sumTest = addSum * addCart
    let totalSum = sumTest.toFixed(2)

    const addWolfChainHandler = () => setAddCart(addCart + 1)
    const removeWolfChainHandler = () => setAddCart(addCart - 1)

    return (
        <div className='logo'>
            <Modal modalActive={isModal}>
                <div className='modal__cart'>
                    <p className='modal__cart_title'>Cart (8 items)</p>
                    <div className='modal__cart_close' onClick={() => dispatch(isModalAC(false) )}>
                        <span className='modal__cart_left'></span>
                        <span className='modal__cart_right'></span>
                    </div>
                </div>
                <div className="modal__wrapper">
                    <ul className="modal__items">
                        <li className="modal__item">
                            <div className='modal__item_item'>
                                <img src={img1} alt="img1"/>
                                <div className="modal__text">
                                    <NavLink to={'/product'} className="modal__text_item">
                                        Handmade Stainless Steel Massive<br/> Wolf Chain
                                        with
                                        Odin’s Protection<br/> Charm - 50cm /
                                        20in
                                        <div className='number'>$19.95
                                            <span className='number__item'>$29.95</span>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="modal__btn">
                                <button onClick={removeWolfChainHandler} className="modal__btn_left">-</button>
                                <button className="modal__btn_center">{addCart}</button>
                                <button onClick={addWolfChainHandler} className="modal__btn_right">+</button>
                            </div>
                        </li>
                        <li className="modal__item">
                            <div className="modal__item_item">
                                <img src={img2} alt="img2"/>
                                <div className="modal__text">
                                    <p className='modal__text_item'>Handmade Massive Stainless Steel<br/> Wolf Head Necklace with Nordic<br/>  Wolf Pendant - 50cm / 20in
                                        <div className='number'>$19.95
                                            <span className='number__item'>$29.95</span>
                                        </div>
                                    </p>
                                </div>
                            </div>
                            <div className="modal__btn">
                                <button onClick={() => alert('Минус')} className="modal__btn_left">-</button>
                                <button className="modal__btn_center">1</button>
                                <button onClick={() => alert("ПЛЮС")} className="modal__btn_right">+</button>
                            </div>
                        </li>
                        <li className="modal__item">
                           <div className="modal__item_item">
                               <img src={img3} alt="img3"/>
                               <div className="modal__text">
                                   <p className='modal__text_item'>Kinf Chain Wolf Head Viking Bracelet - 19cm / 7.4in
                                       <div className='number'>$19.95
                                           <span className='number__item'>$29.95</span>
                                       </div>
                                   </p>
                               </div>
                           </div>
                            <div className="modal__btn">
                                <button onClick={() => alert('Минус')} className="modal__btn_left">-</button>
                                <button className="modal__btn_center">1</button>
                                <button onClick={() => alert("ПЛЮС")} className="modal__btn_right">+</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="modal__footer">
                    <div className='modal__footer_text'>
                        <h3>Subtotal</h3>
                        <p>{addCart ? <span>{`$${totalSum}`}</span> : <span>$0</span>}</p>
                    </div>
                    <div className="modal__footer_btn">
                        <button className="modal__footer_btn_left">View cart</button>
                        <button className="modal__footer_btn_right">Proceed to checkout</button>
                    </div>
                </div>
            </Modal>
            <Nav/>
            <Header/>
        </div>
    )
}