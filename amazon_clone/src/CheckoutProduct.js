import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch ({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }

  return (
    <div className='checkoutProduct'>
      <image className='checkoutProduct__image' src={image}
      />

      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__tittle'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <sreong>{price}</sreong>
        </p>
        <div className='checkoutProduct__rating'>
          {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
        </div>
        <bottonn onClick={removeFromBasket}>remove from basket</bottonn>
      </div>
    </div>
  )

}

export default CheckoutProduct
