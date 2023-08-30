import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
  return (
   <div className='checkout'>
    <div className='checkout__left'>
      <img
       className='checkout__ad' src='https://m.media-amazon.com/images/G/02/UK_CCMP/AIS/577-HL-LX-Maple-770x70-1._CB607807473_.jpg'
       alt=''
      />
      <div>
        <h2 className='checkout__title'>Your Shopping Basket</h2>
        {/* BasketItem */}
        {/* BasketItem */}
        {/* BasketItem */}
        {/* BasketItem */}
      </div>

      <div className='checkout__right'>
        <Subtotal/>
      </div>
    </div>
   </div>
  );
}
export default Checkout;
