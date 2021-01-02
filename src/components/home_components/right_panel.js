import React from 'react';
import headshot from '../../assets/headshot.jpg';
import '../../styling/home_page.css';

const RightHomePanel = () => {
    return (
        <div className="home-panel">
            <img className="headshot" src={headshot} alt="miles_headshot"/>
        </div>
    )
}

export default RightHomePanel;