import React from 'react'

const ProfilePicture = () => {

    const imageUrl = './src/assets/profile.png';
    const handleClick = (e) => {
        e.target.style.display = 'none';
        console.log('Outch');
    };
  return (
    <img src={imageUrl} onClick={handleClick}></img>
  )
}

export default ProfilePicture