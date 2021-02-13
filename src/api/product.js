import axios from "axios";
import {setPizzas} from "../redux/actions/pizzas";

export const getData = () => (dispatch) =>{
    axios.get('./data.json')
        .then(function (response) {
            dispatch(setPizzas(response.data))
        })
        .catch(function (error) {
            alert("Произошла ошибка")
        })
}