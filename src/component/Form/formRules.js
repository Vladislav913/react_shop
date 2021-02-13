import React from "react";



export const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Поле обязательно к заполнению'
    } else if (values.name.length > 15) {
        errors.name = 'Максимум 15 символов'
    }

    if (!values.surname) {
        errors.surname = 'Поле обязательно к заполнению'
    } else if (values.surname.length > 20) {
        errors.surname = 'Максимум 15 символов'
    }

    if (!values.address) {
        errors.address = 'Поле обязательно к заполнению'
    }

    if (!values.phone) {
        errors.phone = 'Поле обязательно к заполнению'
    } else if (values.phone.length > 13) {
        errors.phone = 'Максимум 13 символов'
    }else if(values.phone.length < 10){
        errors.phone = 'Максимум 10 символов'
    }

    return errors
}


export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className="container-input">
        <label className="form__label">{label}</label>
        <div className="form__error-box">
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span className="form__error">{error}</span>))}
        </div>
    </div>
)