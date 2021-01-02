import React from 'react';
import headshot from '../assets/headshot.jpg';
import '../styling/home_page.css';
import LeftHomePanel from './home_components/left_panel';
import RightHomePanel from './home_components/right_panel';

const Home = () => {
    return (
        //overall home section
        <div className="home">
            {/* Left Panel */}
            <LeftHomePanel />
            {/* Right Panel */}
            <RightHomePanel />
        </div>
    )
}

export default Home;