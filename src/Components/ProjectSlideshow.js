import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "../styles/ProjectSlideshow.css";

const slideImages = [
  'https://i.imgur.com/H38LDpI.png',
  'https://i.imgur.com/25viw5t.png',
  'https://i.imgur.com/EBsh1jN.png'
];

const fadeProperties = {
    pauseOnHover: true,
    duration: 5000,
    autoplay: true,
    transitionDuration: 500,
    infinite: true,
    easing: "ease",
  };

const projects =  [
  {
    id:1,
    link: 'https://image-crud-test.netlify.app',
    img: 'https://i.imgur.com/cnE6IUu.png',
    title: 'Photography Blogging Project',
    description: 'Reworked first group project from the FutureProof course using a React front-end, deployed on netlify, express server, MongoDB Atlas database, cloundinary to store the images and back-end deployed on Heroku.'
  },
  {
  id:2,
  link: 'https://trivia-boss.netlify.app/',
  img: 'https://i.imgur.com/H38LDpI.png',
  title: 'Trivia Boss Project',
  description: 'We were tasked with building a quiz application that you can play with your friends on a single application.'
},
{
  id:3,
  link:'https://github.com/Angus-Woodman/captains-log',
  img: 'https://i.imgur.com/QUFDIab.png',
  title: 'Captain\'s Log - Football team management platform',
  description: 'We were tasked with building a full stack web application with a python backend of our choice. Deployed site coming soon!!'
},
{
  id:4,
  link: 'https://github.com/Angus-Woodman/Habitapp',
  img: 'https://i.imgur.com/X7YYqNJ.png',
  title: 'Habit tracking Project',
  description: 'We were tasked with building a habbit tracker application.'
},
{
  id:5,
  link: 'https://musing-hopper-288ea1.netlify.app/',
  img: 'https://i.imgur.com/cnE6IUu.png',
  title: 'Photography Blogging Project',
  description: 'We were tasked with building a blogging platform where users can anonymously post content of their choice and can comment and like other posts that have been made.'
},
{
  id:6,
  link: 'https://5f0703141d0b73150fb224a2--chelsea-project-angus.netlify.app',
  img: 'https://i.imgur.com/CI5ezLQ.png',
  title: 'Chelsea Project',
  description: 'Personal project when learning about tables.'
},
{
  id:7,
  link: 'https://angusannagooglesearch.netlify.app/',
  img: 'https://i.imgur.com/RppZnsL.png',
  title: 'Google Project',
  description: 'We were tasked with trying to recreate google. We chose to intergrate googles search API.'
}
]

const ProjectSlideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...fadeProperties}>
          {projects.map((project) => (
            <div key={project.id} className="each-slide">
              <a href={'http://localhost:8000/projects'} target="_blank">
                <div className="slideImage">
                  <img src={project.img} alt={project.title} />
                </div>
                <div className="overlay">
                  <div className="text">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </Slide>
        <div className="projectCardsContainer">
          {projects.map((project) => (
              <div key={project.id} className="card" >
                <img className="card-img-top" src={project.img} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn btn-primary" target="_blank">Link to project</a>
                </div>
              </div>
          ))}
        </div>
      </div>
    )
}

export default ProjectSlideshow;
