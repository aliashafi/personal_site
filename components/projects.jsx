import React from 'react';
import summit from '../content/summit.jpg'
import neuroDB from '../content/neuroDB.jpg'
import lostInSpace from '../content/lostInSpace.jpg'
import planet from '../content/planet.jpg'
import neuroDB_logo from '../content/neuroDB_logo.jpg'
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
              <div className="tools-used">
                <div className="skills">
                  <div><i class="fas fa-chevron-right"></i>JavaScript</div>
                  <div><i class="fas fa-chevron-right"></i>React/Redux</div>
                  <div><i class="fas fa-chevron-right"></i>Ruby on Rails</div>
                </div>
                <div className="skills">
                  <div><i class="fas fa-chevron-right"></i>postgreSQL</div>
                  <div><i class="fas fa-chevron-right"></i>MapBox</div>
                  <div><i class="fas fa-chevron-right"></i>Webpack</div>
                </div>
                <div className="skills">
                  <div><i class="fas fa-chevron-right"></i>AWS</div>
                </div>
              </div>
              <div class="icons">
                <a href="https://summit-fsp.herokuapp.com/"><i class="fas fa-share-square"></i></a>
                <a href="https://github.com/aliashafi/summit"><i class="fab fa-github"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects-header"></div>
        <div className="projects-container">
          <div className="project-photo">
            <img className="projects-summit" src={neuroDB} />
          </div>

          <div className="projects-about">
            <div className="project-title-container"></div>
            <div className="projects-caption"> NeuroDB is a database tool to help researchers studying 
            intracranial Electrocorticography (ECoG) manage patient meta data and research related i
            nformation. The project idea was inspired by the Chang Lab at UCSF, a neurosurgery lab in
            terested in determining the basic mechanisms that underlie our ability to create and produce speech.
            
          </div>

          </div>
          <div className="logo-container">
            <div className="logo">
              <img src={neuroDB_logo} alt="" />
            </div>
            <div className="project-links">
              <div>Live Link</div>
              <div>Github</div>
              <div>More About the Project</div>
            </div>
          </div>
        </div>


        <div className="projects-header"></div>
        <div className="projects-container">
          <div className="project-photo">
            <img className="projects-summit" src={lostInSpace} />
          </div>

          <div className="projects-about">
            <div className="project-title-container"></div>
            <div className="projects-caption"> An interactive 3D game to explore the solar system. The application
            was built using vanilla javascript and three.js 3D library. It incorporats three.js raycaster for collision detection​ and event listeners to allow for keyboard flight control.
          </div>

          </div>
          <div className="logo-container">
            
            <div className="logo">
              <img src={planet} alt="" />
            </div>
            <div className="project-links">
              <div>Live Link</div>
              <a href="https://github.com/aliashafi/summit"><i class="fab fa-github"></i></a>
              <div>More About the Project</div>
            </div>
          </div>
        </div>
      </div>


      
    )
  }

}
export default Projects;