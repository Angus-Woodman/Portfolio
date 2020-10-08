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
    duration: 3000,
    pauseOnHover: true
  };

const projects =  [
  {
  id:1,
  link: 'https://trivia-boss.netlify.app/',
  img: 'https://i.imgur.com/H38LDpI.png',
  title: 'Trivia Boss Project',
  description: 'We were tasked with building a quiz application that you can play with your friends on a single application.'
},
{
  id:2,
  link: 'https://musing-hopper-288ea1.netlify.app/',
  img: 'https://i.imgur.com/25viw5t.png',
  title: 'Photography Blogging Project',
  description: 'We were tasked with building a blogging platform where users can anonymously post content of their choice and can comment and like other posts that have been made.'
},
{
  id:3,
  link: 'https://5f0703141d0b73150fb224a2--chelsea-project-angus.netlify.app',
  img: 'https://i.imgur.com/EBsh1jN.png',
  title: 'Chelsea Project',
  description: 'Personal project when learning about tables.'
},
{
  id:4,
  link: 'https://5f07040e1d0b731b27b2249f--food-project-angus.netlify.app',
  img: 'https://i.imgur.com/ZWOHpys.png',
  title: 'Food Project',
  description: 'Personal project when learning about ...'
},
{
  id:5,
  link: 'https://angusannagooglesearch.netlify.app/',
  img: 'https://i.imgur.com/D0bgnD2.png',
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
              <a href={project.link}>
                <div className="slideImage" style={{'backgroundImage': `url(${project.img})`}}>
                  <span>{project.title}</span>
                </div>
                <div class="overlay">
                  <div class="text">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </Slide>
      </div>
    )
}

export default ProjectSlideshow;
