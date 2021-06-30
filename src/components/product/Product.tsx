import React from 'react';
import "./product.css"
import Nav from "../nav/Nav";
import product from "../../img/product.png";
import {IoIosArrowDown} from "@react-icons/all-files/io/IoIosArrowDown";

const Product = () => {
    return (
        <div >
           <Nav/>
            <div className='wrapper'>
                <img src={product} alt="product" className='product'/>
                <div className='wrapper__title'>
                    <div className='productTitle'>
                        Handmade Stainless Steel Kings<br/> Chain Viking Geri And Freki<br/> Mjolnir Necklace
                    </div>
                    <div className="wrapper__item">
                        <h4>Choose your length</h4>
                    </div>
                    <div className="wrapper__block">
                        60 cm (24 inches)
                        <IoIosArrowDown className='arrow' onClick={() => alert('open')}/>
                    </div>
                    <div className="wrapper__price">
                        $19.95 <span className="wrapper__price_item">Tax included</span>
                    </div>
                    <div className="wrapper__btns">
                        <div className="wrapper__btn">
                            <button className='wrapper__btn_left'>-</button>
                            <button className='wrapper__btn_center'>1</button>
                            <button className='wrapper__btn_right'>+</button>
                        </div>
                        <div className="wrapper_add">
                            Add To Cart
                        </div>
                    </div>
                    <div className="wrapper__text">
                        <span className='wrapper__text_item'>
                            Handmade Chain Geri and Freki Viking Necklace with Thor<br/>
                            Hammer Mjolnir!
                        </span><br/>
                        <br/>
                        The Kings chain was worn by Viking kings as a status symbol<br/>
                        as the name applies. This is a 100% handmade Stainless Steel<br/>
                        Chain. The crafting is a very time consuming process to put<br/>
                        together the chain link by link.<br/>
                        <br/>
                        The hand made chain connects together with a lobster clamp.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;