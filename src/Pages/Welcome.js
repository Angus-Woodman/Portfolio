import React from 'react';
import '../styles/Welcome.css'

const Welcome = () => (
    <>
      <div className="welcomeContainer">
        <h1 className='welcomeTitle'>Angus Woodman</h1>
        <p>I'm a London based <strong>Full-Stack Web Developer</strong>.</p>
        <hr width='60%'/>
        <i className="fa fa-github fa-2x" aria-hidden="true"></i>
        <i class="fa fa-linkedin fa-2x" aria-hidden="true"></i>
        <i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
      </div>
    </>
)

export default Welcome;
