import React, { useContext } from 'react';
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { userContext } from './UserProvider';
import { getBasketTotal } from './UserProvider';

function Subtotal() {

    const[{basket}, dispatch] = useContext(userContext);

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>${value}</strong>
                            <small className='subtotal__gift'>
                                <input type="checkbox" />This order contains a gift
                            </small>
                        </p>
                        <button>Proceed to Checkout</button>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
            />

        </div>

    )
}

export default Subtotal;
