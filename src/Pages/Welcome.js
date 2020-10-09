import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/Welcome.css'

const Welcome = () => (
    <>
      <div className="welcomeContainer">
        <h1 className='welcomeTitle'>Angus Woodman</h1>
        <p>London based Full-Stack Web Developer</p>
        <hr width='60%'/>
        <a href='https://github.com/Angus-Woodman/' target="_blank"> <i className="fa fa-github fa-2x" aria-hidden='True'></i> </a>
        <a href='https://www.linkedin.com/in/angus-woodman-6a3072151/' target="_blank"> <i className="fa fa-linkedin fa-2x" aria-hidden='True'></i> </a>
        <a href='https://www.facebook.com/woodpecker25/' target="_blank"> <i className="fa fa-facebook-official fa-2x" aria-hidden='True'></i> </a>
      </div>
    </>
)

export default Welcome;
