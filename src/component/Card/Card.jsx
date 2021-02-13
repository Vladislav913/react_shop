
import './card.css'

const Card = ({id, name, composition, price, img, addToCart}) => {

    const addCart = () =>{
        const objProduct = {
            id:id,
            name: name,
            price: price,
            priceTotal: price,
            img: img,
            count: 1
        }
        addToCart(objProduct)
    }

    return (
        <div className="catalog-item">
                <img className="catalog-item__img" src={img} alt="img"/>
                <div className="catalog-item__title">{name}</div>
            <div className="catalog-item__text">
                {composition}
            </div>
                <div className="catalog-item__info">
                    <div className="card-item__price">
                        {price}грн
                    </div>
                    <button className="card-item__btn" onClick={addCart}>
                        В корзину
                    </button>
                </div>
        </div>
    )
}

export default Card