import React from 'react'
import "./Subtotal.css";
import { getBasketTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
  return <div classname='Subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small classname='subtotal__gift'>
              <input type='checkout' /> thisorder contain gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thpusandSeparator={true}
        prefix={'£'}
      />

      <button>Proceed to check out</button>
  </div>;
}

export default Subtotal
