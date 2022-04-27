import React from 'react'
import Footer from './Footer';
import projects from '../images/projects.png'

function Projects() {
  return (
    <div className="project-container">
      <div className="container">
        <div className="content-container">
          <div className="project-content">
            <div className="projects-img">
              <img className="project-img" src={projects} alt="Project" />
            </div>
            <div className="project-title">
              <h1>THE PROJECTS I'VE DONE SO FAR!</h1>
              <p>This projects i built them in my journy to learn Coding and
                There are more projects available I've built for clints freelancing.</p>
            </div>
          </div>
        </div>
      </div>
       <div className="project-body">
       </div>
        <Footer />
      </div>

  )
}

export default Projects