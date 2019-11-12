import React from 'react';
import Projects from './projects'
import photo from '../content/edit_alia.jpg'
import '../css/about-me.css'


class AboutMe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-me-container">
        <div className="AS-logo">
          <div class="letters">AS</div>
        </div>
        <div className="left">
          <div className="left-header">About Me</div>
          <p> 
           Hello! I am Alia, a software developer based in Seattle, Washington, who 
           enjoys building applications, solving challenging problems, and contributing 
           to new, innovative technology. I develop applications and websites that provide 
           creative and modern UI with efficient backends.
            

            </p>
        </div>
        <div className="about-me">
          <div className="about-me-header"> Profile </div>
          <div className="about-me-caption"> I'm a creative JavaScript Webdeveloper</div>
          <div className="underline"></div>
          <div className="top-col__img_container">
            <img className="head-shot" src={photo} alt="" />
          </div>
        </div>

        <div className="right">
          <div>
          <div className="left-header">Details</div>
          <div className="left-name">
            <h1>Name:</h1>
            <div>Alia Shafi</div>
          </div>
          <div className="left-age">
            <h1>Age:</h1>
            <div>24</div>
          </div>
          <div className="left-location">
            <h1>Location:</h1>
            <div>Seattle, WA</div>
          </div>
          </div>
        </div>

      </div>
    )
  }

}
export default AboutMe;