import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
         className='home__image'
         src='https://m.media-amazon.com/images/I/71k2k2dIgfL._SX3000_.jpg'
         atl=''
         />

         <div className='home__row'>
          <Product
          id='0023881'
          title='Kindle Paperwhite | 16 GB, now with a 6.8" display and adjustable warm light | With ads | Black.'
          price={149.99}
          image='https://m.media-amazon.com/images/I/51Knn1dABuL._AC_UY436_FMwebp_QL65_.jpg'
          rating={5} />
          <Product
           id='0777111'
           title='Smart Watch, 1.69" Touch Fitness Watch for Men Women, Fitness Tracker Smartwatch with Heart Rate Sleep Monitor Step Counter.'
           price={22.78}
           image='https://m.media-amazon.com/images/I/61W-xQ95sWL._AC_SX679_.jpg'
           rating={4} />
         </div>

         <div className='home__row'>
         <Product
           id='0000291'
           title='Massage Gun, RENPHO Massage Gun Deep Tissue with Heat Massage Head, Up to 3200RPM Muscle Massager with Type-C Charging.'
           price={104.99}
           image='https://m.media-amazon.com/images/I/71OK1NDPC2L._AC_SX679_.jpg'
           rating={4} />
         <Product
           id='0929111'
           title='EMtronics EMAFDD9LSL Dual Air Fryer Extra Large Family Size Double XL 9 Litre with 8 Pre-Set Menus for Oil Free & Low Fat Healthy Cooking.'
           price={109.99}
           image='https://m.media-amazon.com/images/I/71PRWIUlp7L._AC_SX679_.jpg'
           rating={5} />
         <Product
           id='0000044'
           title='IPL Hair Removal Device, 9 Energy Level,3 Functions HR/SC/RA, 999,900 Light Pulses,Permanent Painless Laser Hair Removal Long Lasting for whole Body.'
           price={88.82}
           image='https://m.media-amazon.com/images/I/61fWiDEyF9L._AC_SX679_.jpg'
           rating={5} />
         </div>

         <div className='home__row'>
         <Product
           id='0778399'
           title='Philips Lumea IPL Hair Removal 7000 Series - Hair Removal Device with Satin Compact Pen Trimmer, 2 Attachments for Body and Face, Corded Use (Model BRI921/00).'
           price={269}
           image='https://m.media-amazon.com/images/I/61cwp22ST8L._AC_SX679_.jpg'
           rating={5} />
         </div>

      </div>
    </div>
  );
}

export default Home
