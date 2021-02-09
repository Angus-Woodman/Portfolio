import React from 'react';
import '../styles/About.css'

const About = () => {
    return (
        <div id="about">
            <div className='aboutSection'>
                <img src="https://i.imgur.com/0ednlgt.png" alt="Angus Woodman Headshot" />
                {/*<h3>Contact details:</h3>
                <p className="contact">+447375646432</p>
                <p className="contact">angus.woodman@outlook.com</p>*/}
            </div>
            <div className='aboutSection'>
                <h1>About Me</h1>
                <p> I am an Engineering Mathematics graduate from the University of Bristol and have trained as a Full-Stack Web Developer with Futureproof.</p>
                <h3>University</h3>
                <p> Throughout my Engineering Mathematics degree I was involved in several projects, where we were tasked with constructing detailed mathematical models, using programming languages Matlab and Python, to solve various real-world problems. This introduction to programming and the satisfaction I experienced from finishing each one of these projects fuelled my desire to pursue a career in programming. </p>
                <h3>Robotics Project</h3>
                <p>After finishing my degree I worked on a robotics project for a real estate consultancy. The company wanted to be able to automate the task of taking multiple photos of the inside of warehouses using a 360&deg; camera. I was tasked with finding the best possible solution and building a prototype, which the team could run tests on. During this project I had to learn fast, dealing with unfamiliar pieces of hardware, such as a Pixhawk and a RasberryPi.</p>
                <h3>Futureproof</h3>
                <p>Since then I have graduated from the Full Stack Web Developer course with Futureproof and completed serveral group and personal projects. This has given me a great base to further develop my programming and web development skills.</p>
            </div>
        </div>
    );
}

export default About;
