import React from 'react';
import NavBar from './nav_bar'
import Projects from './projects'
import AboutMe from './about_me'
import photo from '../content/edit_alia.jpg'
import '../css/main-page.css'
class MainPage extends React.Component {
    constructor(props){
        super(props);
    }

    render () {
        return(
            <div>
                <NavBar></NavBar>

                <div className="top-col">
                    <div className="header-container">
                        <div className="name-header">
                            <h1 className="name">ALIA SHAFI</h1>
                            <h3 className="name-caption"> FULL STACK SOFTWARE DEVELOPER & ATHLETE</h3>
                        </div>
                    </div>
                </div>
                <AboutMe/>

                <Projects/>
            </div>
        )
    }
    
}
export default MainPage;