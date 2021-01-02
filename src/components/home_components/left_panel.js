import React from 'react';
import Github from '../../assets/github.png';
import LinkedIn from '../../assets/linkedIn.png';
import {Link} from 'react-router-dom';
import '../../styling/home_page.css';

const LeftHomePanel = () => {
    return (
        <div className="home-panel">
            <h2 className="name-intro-text">Hi! I'm Miles</h2>
            <h5 className="short-intro-text">I'm a undergrad software developer from Northern Arizona University</h5>
            <Link to='/projects'><button  type="button" >My Projects</button></Link>
            <div className="external-links">
                <a href="https://github.com/milesbarrios" target="_blank">
                    <img src={Github} alt="Github" />
                </a>
                <a href="https://www.linkedin.com/in/miles-barrios/" target="_blank">
                    <img src={LinkedIn} alt="LinkedIn" />
                </a>
            </div>
        </div>
    )
}

export default LeftHomePanel;