import React from 'react';
import '../styles/Welcome.css'

const Welcome = () => (
    <>
      <h1 className='welcomeTitle'>Angus Woodman</h1>
      <div className="welcome-container">
        <img src="https://i.imgur.com/nxvG6mb.jpg" alt="Angus Woodman Headshot" />
        <div>
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS - Bootstrap, Bulma</li>
            <li>JavaScript - React</li>
            <li>Python - Django, Flask</li>
            <li>Matlab</li>
          </ul>
        </div>
      </div>
    </>
)

export default Welcome;
