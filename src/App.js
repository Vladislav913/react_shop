import './App.scss';
import Header from "./component/Header/Header";
import Catalog from "./Page/Catalog/Catalogs";
import {Route, Switch} from "react-router-dom";
import Cart from "./Page/Cart/Cart";
import {setDataToCart} from "./redux/actions/cart";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

function App() {
    const dispatch = useDispatch()
    const data = JSON.parse(localStorage.getItem('items'))
    useEffect(() => {
        if (data.length > 0) {
            dispatch(setDataToCart(data))
        }
    },[])

    return (
        <>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Catalog/>
                </Route>
                <Route path="/cart">
                    <Cart/>
                </Route>
            </Switch>

        </>
    );
}

export default App;
