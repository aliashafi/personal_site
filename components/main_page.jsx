import React from 'react';
import NavBar from './nav_bar'
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
                        <h1 className="name">ALIA SHAFI</h1>
                        <h3 className="name-caption"> Software Developer, Athlete, Science Nerd</h3>
                    </div>
                    <div className="top-col__img_container">
                        <img className="head-shot" src={photo} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
    
}
export default MainPage;