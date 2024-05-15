import React from 'react';
import profile from './assets/profile.png';

const Card = () => {
  return (
    <div className='card'>
        <img alt='profile picture' src={profile} className='card-image'></img>
        <h2 className='card-title'>Geemov42</h2>
        <p className='card-text'>I'm developer</p>
    </div>
  )
}

export default Card