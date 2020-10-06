import React, { Component } from 'react';
import Project from "../Components/Project"

class Search extends Component {

  state =  {projects: [
    {
    id:1,
    link: 'https://trivia-boss.netlify.app/',
    img: 'https://i.imgur.com/H38LDpI.png',
    title: 'Trivia Boss Project'
  },
  {
    id:2,
    link: 'https://musing-hopper-288ea1.netlify.app/',
    img: 'https://i.imgur.com/25viw5t.png',
    title: 'Photography Blogging Project'
  },
  {
    id:3,
    link: 'https://5f0703141d0b73150fb224a2--chelsea-project-angus.netlify.app',
    img: 'https://i.imgur.com/EBsh1jN.png',
    title: 'Chelsea Project'
  },
  {
    id:4,
    link: 'https://5f07040e1d0b731b27b2249f--food-project-angus.netlify.app',
    img: 'https://i.imgur.com/ZWOHpys.png',
    title: 'Food Project'
  },
  {
    id:5,
    link: 'https://angusannagooglesearch.netlify.app/',
    img: 'https://i.imgur.com/D0bgnD2.png',
    title: 'Google Project'
  }
]}

  render() {
      return (
          <>
            <h1>Projects</h1>
            {this.state.projects.map((project) => (
              <Project key={project.id} idx={project.id} link={project.link} img={project.img} title={project.title}/>
            ))}
          </>
      );
  }
}

export default Search;
