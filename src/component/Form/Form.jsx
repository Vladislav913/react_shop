import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './form.css'
import {renderField, validate} from "./formRules";
import firebase from 'firebase'
import {useDispatch, useSelector} from "react-redux";
import {clearCart} from "../../redux/actions/cart";

const Form = ({ handleSubmit, reset}) => {
    const data = useSelector(state => state.cart.items)
    const dispatch = useDispatch();

    const setData = (value) =>{
        try {
            const db = firebase.database();
            const order = {
                data,
                ...value
            }
            db.ref('order').push(order)

           dispatch(clearCart())
            alert("Ваш заказ оформлен")
        }catch (e) {
            alert("Произошла ошибка")
        }

    }
    return (
        <form onSubmit={handleSubmit(setData)}>
            <Field name="name" type="text" component={renderField} label="Имя"/>
            <Field name="surname" type="text" component={renderField} label="Фамилия"/>
            <Field name="address" type="text" component={renderField} label="Адрес"/>
            <Field name="phone" type="number" component={renderField} label="Телефон"/>

            <div>
                <button className="submit-btn" type="submit" >Отправить</button>
            </div>
        </form>
    )
}

export default React.memo(reduxForm({
    form: 'syncValidation',
    validate,
})(Form))