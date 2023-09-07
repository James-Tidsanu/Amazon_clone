import React from 'react'
import "./Subtotal.css";
import { getBasketTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

function Subtotal() {
  const [{basket}, dispatch] = useStateValue();

  return (
     <div classname='Subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.lenght} items): <strong>{value}</strong>
            </p>
            <small classname='subtotal__gift'>
              <input type='checkout' /> thisorder contain gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thpusandSeparator={true}
        prefix={'$'}
      />
      <button>Proceed to check out</button>
  </div>
  );

}

export default Subtotal
