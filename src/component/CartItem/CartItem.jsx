import './cartItem.css'

const CartItem = ({id, name, img, priceTotal, count, addProduct, minusCartProduct, setValue, removeItem}) => {

    const handleRemoveClick = () => {
        removeItem(id);
    };

    const handlePlusItem = () => {
        addProduct(id);
    };

    const handleMinusItem = () => {
        minusCartProduct(id);
    };

    const changeValue = (e) => {
      if(e.target.value >= 0){
          const obj = {
              id: id,
              value: e.target.value
          }
          setValue(obj)
      }
    }

    return (
        <div className="cart__item">
            <img className="cart__img" src={img} alt=""/>
            <div className="cart__name">{name}</div>
            <div className="counter">
                <button className="counter__minus btn" onClick={handleMinusItem}>
                    <svg viewBox="0 -192 469.33333 469" width="469pt" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0"/>
                    </svg>
                </button>
                <input onChange={changeValue} value={count} className="counter__value" type="number"/>
                <button className="counter__plus btn" onClick={handlePlusItem}>
                    <svg viewBox="0 0 448 448" width="448pt" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"/>
                    </svg>
                </button>
            </div>
            <div className="cart__price">{priceTotal} грн</div>
            <button className="cart__remove" onClick={handleRemoveClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" version="1.1" viewBox="0 0 32 32">
                    <circle/>
                    <g transform="matrix(0.70710678,0.70710678,-0.70710678,0.70710678,16,-6.627417)">
                        <rect width="4" height="20" x="-18" y="6" transform="matrix(0,-1,1,0,0,0)"/>
                        <rect width="4" height="20" x="14" y="6"/>
                    </g>
                </svg>
            </button>
        </div>
    )
}

export default CartItem