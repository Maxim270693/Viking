import React from 'react';
import "./product.css"
import Nav from "../nav/Nav";
import product from "../../img/product.png";

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
                </div>
            </div>
        </div>
    );
};

export default Product;