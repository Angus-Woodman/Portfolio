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
    link: 'https://github.com/Angus-Woodman/stripeVanillaJS',
    github:'https://github.com/Angus-Woodman/stripeVanillaJS',
    img: 'https://i.imgur.com/fsLKco5.png',
    title: 'Stripe integration project',
    description: 'Created a online exhibition for Kimi Zoet\'s art to learn how to integrate a stripe payment flow',
    stack: 'React front-end and JavaScript & Express Server',
    deployment: 'Site not deployed'
  },
  {
    id:2,
    link: 'https://image-crud-test.netlify.app',
    github:'https://github.com/Angus-Woodman/imageCrudClient',
    img: 'https://i.imgur.com/cnE6IUu.png',
    title: 'Reworked Fotographiq project',
    description: 'Reworked first group project from the FutureProof course: Fotographiq, a photography blogging platform for photography enthusiasts. Ongoing styling',
    stack: 'React front-end and JavaScript & Express Server, with a MongoDB database',
    deployment: 'Netlify (front-end), Heroku (back-end) and MongoDB Atlas, Cloudinary to store image files.'
  },
  {
  id:3,
  link: 'https://trivia-boss.netlify.app/',
  github:'https://github.com/Angus-Woodman/quizzo',
  img: 'https://i.imgur.com/H38LDpI.png',
  title: 'Trivia Boss Project',
  description: 'First ever React project. We were tasked with building a quiz application that you can play with your friends on a single application. Utilizes the open source API, Open Trivia Database, for the questions. ',
  stack:'React',
  deployment: 'Netlify'
},
{
  id:4,
  link:'https://github.com/Angus-Woodman/captains-log',
  github:'https://github.com/Angus-Woodman/captains-log',
  img: 'https://i.imgur.com/QUFDIab.png',
  title: 'Captain\'s Log - Football team management platform',
  description: 'We were tasked with building a full stack web application with a python backend of our choice.',
  stack:'Django, React, SQLite',
  deployment: 'Deployed site coming soon'
},
{
  id:5,
  link: 'https://github.com/Angus-Woodman/Habitapp',
  github:'https://github.com/Angus-Woodman/Habitapp',
  img: 'https://i.imgur.com/X7YYqNJ.png',
  title: 'Habit tracking Project',
  description: 'We were tasked with building a habbit tracker application.',
  stack:'React, Postgres, Express server',
  deployment: 'Deployed site coming soon'
},
{
  id:6,
  link: 'https://musing-hopper-288ea1.netlify.app/',
  github:'https://github.com/Angus-Woodman/blogservice',
  img: 'https://i.imgur.com/cnE6IUu.png',
  title: 'Photography Blogging Project',
  description: 'We were tasked with building a blogging platform where users can anonymously post content of their choice and can comment and like other posts that have been made.',
  stack:'JavaScript, Express Server',
  deployment: 'Deployed site coming soon'
},
{
  id:7,
  link: 'https://angusannagooglesearch.netlify.app/',
  github:'https://github.com/Angus-Woodman/google-project',
  img: 'https://i.imgur.com/RppZnsL.png',
  title: 'Google Project',
  description: 'We were tasked with trying to recreate google. We chose to intergrate googles search API.',
  stack:'JavaScript',
  deployment: 'Netlify'
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
                    <h1>{project.title}</h1>
                    <p className='description'>Description: {project.description}</p>
                    <div className='stack'>
                      <p>Stack: {project.stack}</p>
                      <p>Deployment: {project.deployment}</p>
                    </div>
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
                  <a href={project.link} className="btn btn-primary projectLink" target="_blank">Link to project</a>
                  <a href={project.github} className="btn btn-primary githubLink" target="_blank">Link to github</a>
                </div>
              </div>
          ))}
        </div>
      </div>
    )
}

export default ProjectSlideshow;
