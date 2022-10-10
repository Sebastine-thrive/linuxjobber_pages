import React from 'react';

import Ticked from '../ticked/Ticked';
import './card.css'

const Card = (props) => {

  const { width, height, marginBottom, borderRadius, children } = props;

  return (
    <div 
    className='card'
    style={{width, height, marginBottom, borderRadius}}
    >
        <div className='ticked'>
            <Ticked />
        </div>
        <div>
          {children}
        </div>

    </div>
  )
}

export default Card;