import {
    ADD_PIZZA_CART,
    CHANGE_COUNTER, CLEAR_CART,
    MINUS_CART_ITEM,
    PLUS_CART_ITEM,
    REMOVE_CART_ITEM,
    SET_DATA_TO_CART
} from "../actions/cart";

const initialState = {
    items: [],
    totalPrice: 0,
    totalCount: 0,
};

const calculateAmount = (newItems) => newItems.reduce((summ, curent) => curent.priceTotal + summ, 0);
const calculateCount = (newItems) => newItems.reduce((summ, curent) => +curent.count + summ, 0);

const hasItem = (items, obj) => items.some(item => item.id === obj.id)

const cart = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA_TO_CART: {
            const newTotalPrice = calculateAmount(action.payload)
            const newCalculateAmount = calculateCount(action.payload)

            return {
                ...state,
                items: action.payload,
                totalPrice: newTotalPrice,
                totalCount: newCalculateAmount
            }
        }
        case ADD_PIZZA_CART: {
            const status = hasItem(state.items, action.payload)
            const newItems = status ?
                [...state.items.map(i => i.id === action.payload.id ?
                    {...i, count: +i.count + 1,
                    priceTotal: i.priceTotal + i.price
                } : i)]
                : [...state.items, action.payload]
            const newTotalPrice = calculateAmount(newItems)
            const newCalculateAmount = calculateCount(newItems)

            localStorage.setItem('items', JSON.stringify(newItems));
            return {
                ...state,
                items: newItems,
                totalPrice: newTotalPrice,
                totalCount: newCalculateAmount

            }
        }
        case PLUS_CART_ITEM: {
            const newItems = [...state.items.map(i => i.id === action.payload ? {
                ...i, count: +i.count + 1,
                priceTotal: i.priceTotal + i.price
            } : i)]
            const newTotalPrice = calculateAmount(newItems)
            const newCalculateAmount = calculateCount(newItems)

            localStorage.setItem('items', JSON.stringify(newItems));
            return {
                ...state,
                items: newItems,
                totalPrice: newTotalPrice,
                totalCount: newCalculateAmount
            }
        }
        case MINUS_CART_ITEM: {
            const status = state.items.find(i => i.id === action.payload)
            const newItems = status.count === 1 ? [...state.items.filter(i => i.id != action.payload)] :
                [...state.items.map(i => i.id === action.payload ? {
                    ...i, count: +i.count - 1,
                    priceTotal: i.priceTotal - i.price
                } : i)]
            const newTotalPrice = calculateAmount(newItems)
            const newCalculateAmount = calculateCount(newItems)

            localStorage.setItem('items', JSON.stringify(newItems));

            return {
                ...state,
                items: newItems,
                totalPrice: newTotalPrice,
                totalCount: newCalculateAmount
            }
        }
        case REMOVE_CART_ITEM: {
            const newItems = [...state.items.filter(i => i.id != action.payload)]
            const newTotalPrice = calculateAmount(newItems)
            const newCalculateAmount = calculateCount(newItems)

            localStorage.setItem('items', JSON.stringify(newItems));

            return {
                ...state,
                items: newItems,
                totalPrice: newTotalPrice,
                totalCount: newCalculateAmount
            }
        }
        case CHANGE_COUNTER: {

            const newItems = [...state.items.map(i => i.id === action.payload.id ? {
                ...i, count: action.payload.value,
                priceTotal: action.payload.value * i.price
            } : i)]
            const newTotalPrice = calculateAmount(newItems)
            const newCalculateAmount = calculateCount(newItems)

            localStorage.setItem('items', JSON.stringify(newItems));
            return {
                ...state,
                items: newItems,
                totalPrice: newTotalPrice,
                totalCount: newCalculateAmount
            }
        }
        case CLEAR_CART: {
            localStorage.setItem('items', JSON.stringify([]));
            return {
                ...state,
                items: [],
                totalPrice: 0,
                totalCount: 0
            }
        }

        default:
            return state;
    }
};

export default cart;
