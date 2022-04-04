import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="home-header container-fluid text-center">
            <h1 className="fw-bold">Always <span style={{ color: 'rgb(0, 255, 102)' }}>Something</span> New To <span style={{ color: 'rgb(0, 255, 102)' }}>Learn</span></h1>
            <p>With courses added regularly to our catalog, you always get the latest skill.</p>
            <br />
            <Link to="/about"><button className="btn btn-regular">Learn More</button></Link>
        </div>
    );
};

export default Banner;