import React from 'react';
import summit from '../content/summit.jpg'
import logoSummit from '../content/logo.jpg'
import '../css/projects.css'
class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="projects-header">Portfolio</div>
        <div className="projects-container">
          <div className="project-photo">
            <img className="projects-summit" src={summit}/>
          </div>
          
          <div className="projects-about">
            <div className="project-title-container"></div>
            <div className="projects-caption"> A strava inspired running/cycling application built with Ruby on Rails framework interfacing with 
            a postgreSQL database and a React/Redux frontend. The application includes custom GPX parsing algorithms, real time route creation feature, and
            interactive analysis with several statistical features for users to analyze workout.
          </div>

          </div>
          <div className="logo-container">
            <div className="logo">
              <img src={logoSummit} alt="" />
            </div>
            <div className="project-links">
              <div>Live Link</div>
              <div>Github</div>
              <div>More About the Project</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
export default Projects;