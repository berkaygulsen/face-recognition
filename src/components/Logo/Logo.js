import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import AILogo from './icon1.png';
import Skull from './icon2.png';


const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className='Tilt' options={{ max : 30 }} style={{ height: 150, width: 150 }}>
        <div className='Tilt-inner pad3'><img src={AILogo} alt='logo' /></div>
      </Tilt>
    </div>
  )
}

export default Logo;
