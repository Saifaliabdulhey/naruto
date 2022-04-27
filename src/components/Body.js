import React from 'react';
// import player from '../images/player.png'
import computer from '../images/computer.png'

function Body() {
  return (
    <div className="body-container content-container">
      <div className='computer-img'>
        <img src={computer} />
      </div>
      <div className='computer-sider'>
        <h1>Welcome to Naruto Center!</h1>
        <p>Every thing you looking for you will find it right over her!</p>

      </div>
    </div>

  )
}

export default Body