import React, {useEffect} from 'react';
import "./cart.css"
import CartItem from "../../component/CartItem/CartItem";
import {useDispatch, useSelector} from "react-redux";
import {changeCounter, minusCartItem, plusCartItem, removeCartItem} from "../../redux/actions/cart";
import Form from "../../component/Form/Form";
import CartEmpty from "../../component/CartEmpty/CartEmpty";

const Cart = () => {
    const data = useSelector(state => state.cart.items)
    const totalPrice = useSelector(state => state.cart.totalPrice)
    const dispatch = useDispatch()


    const addProduct = (id) => {
        dispatch(plusCartItem(id))
    }

    const minusCartProduct = (id) => {
        dispatch(minusCartItem(id))
    }

    const removeItem = (id) => {
        dispatch(removeCartItem(id))
    }

    const setValue = (obj) => {
        dispatch(changeCounter(obj))
    }

    return (
        <div className="cart">
            <h1>Корзина</h1>
            <div className="container">
                {data.length > 0 ?
                    <div className="cart__wrap">
                        <div className="product-info">
                            <div className="cart__list">
                                {data.map(item =>
                                    <CartItem key={item.id} {...item}
                                              addProduct={addProduct}
                                              removeItem={removeItem}
                                              setValue={setValue}
                                              minusCartProduct={minusCartProduct}/>)
                                }
                            </div>
                            <div className="totalSum">Сума: <span> {totalPrice}грн</span></div>
                        </div>
                        <div className="cart__form">
                            <Form/>
                        </div>

                    </div> :
                    <CartEmpty/>
                }

            </div>
        </div>
    )
}

export default Cart