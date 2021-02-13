import React from 'react';
import {Link} from "react-router-dom";
import "./header.css"
import {useSelector} from "react-redux";

const Header = () => {
    const count = useSelector((state) => state.cart.totalCount)
    const totalPrice = useSelector((state) => state.cart.totalPrice)

    return (
        <header className="header">
            <Link className="header__logo" to="/">Каталог</Link>
           <div className="header__info">
               <Link className="header__cart" to="/cart">
                   <svg viewBox="0 0 16 16">
                       <path fill="#fff"
                             d="M14 13.1v-1.1h-9.4l0.6-1.1 9.2-0.9 1.6-6h-12.3l-0.7-3h-3v1h2.2l2.1 8.4-1.3 2.6v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5h7.5v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.7-0.4-1.2-1-1.4zM4 5h10.7l-1.1 4-8.4 0.9-1.2-4.9z"></path>
                   </svg>
                   { count ?  <span className="cart-count">{count}</span> : null}
               </Link>
               { count ?  <div className="header__totalPrice"> {totalPrice}грн</div> : null}

           </div>
        </header>
    )
}

export default Header