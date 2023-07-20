import React, { useContext } from 'react';
import "./Product.css";
import { userContext } from './UserProvider';

function Product({ id, title, price, rating, image }) {

    const [state, dispatch] = useContext(userContext);

    const addToBasket = () => {
        dispatch({
            type: "AD_TO_BASKET",
            item: {
                id: id,
                price,
                rating,
                image
            },
        });
    };
    return (
        <>
            <div className="product">
                <div className="product__info">
                    <p>{title}</p>
                    <p className='product__price'>
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className='product__rating'>
                        {Array(rating).fill().map((_, i) => (
                            <p>⭐</p>
                        ))
                        }
                    </div>
                </div>

                <img src={image} />
                <button onClick={addToBasket}>Add to Basket</button>
            </div>
        </>
    )
}

export default Product
