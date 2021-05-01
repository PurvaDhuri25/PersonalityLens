import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Features!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='img1.jpg'
              text='Perfect accuracy in identifying features'
              label='Accurate'
              path='/about'
            />
            <CardItem
              src='img2.jpg'
              text='Personality features will be identified on just a click'
              label='Identification at Ease'
              path='/about'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='img3.jpg'
              text='Advanced tehnology for more promising results'
              label='Advanced Technologies'
              path='/about'
            />
            <CardItem
              src='img4.jpg'
              text='Pretty Easy to learn & Use'
              label='UserFriendly'
              path='/about'
            />
            <CardItem
              src='img5.png'
              text='Get Results in just a span of some seconds '
              label='Quick'
              path='/about'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;