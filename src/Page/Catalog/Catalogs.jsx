import React, {useEffect} from 'react';
import "./catalog.css"
import {getData} from "../../api/product";
import {useDispatch, useSelector} from "react-redux";
import {addPizzaToCart} from "../../redux/actions/cart";
import Card from "../../component/Card/Card";

const Catalog = () => {
    const data = useSelector((state) => state.pizzas.data)
    const dispatch = useDispatch()

    useEffect(() => {
        if(data.length < 1){
            dispatch(getData())
        }
    }, [])

    const addToCart = (obj) =>{
        dispatch(addPizzaToCart(obj))
    }

    return (
        <section className="catalog">
            <h1>Каталог</h1>
            <div className="container">
                <div className="catalog__list">
                    {data.map((item) => <Card key={item.id} addToCart={addToCart} {...item}/>)}
                </div>

            </div>
        </section>
    )
}

export default Catalog