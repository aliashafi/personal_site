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
            <div className="project-title-container">
              <div className="logo">
                <img src={logoSummit} alt=""/>
              </div>
            </div>
            <div className="projects-caption"> A strava inspired running/cycling application</div>

            <div>Live Link</div>
            <div>Github</div>
            <div>More About the Project</div>
          </div>
        </div>
      </div>
    )
  }

}
export default Projects;