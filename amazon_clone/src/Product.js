import React from 'react'
import './Product.css';


function Product() {
  return (
    <div
    className='product'>
      <div
      className='product__info'>
        <p>Top Deal</p>
        <p className='product__price'>
            <small>£</small>
            <strong>19.99</strong>
        </p>
        <div className='product__rating'>
          <p>⭐⭐⭐⭐</p>
        </div>
      </div>
      <img
         src='https://m.media-amazon.com/images/I/41I7QQ1vw-L._AC_SY460_.jpg'
         atl=''
         />

         <button>Add to Basket</button>
    </div>
  )
}

export default Product
