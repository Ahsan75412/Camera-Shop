import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../../../Images/side.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="home-header container-fluid d-flex lign-items-center">
            <div className="left-side col-6 align-items-center">
                <h1>Photography is an austere and blazing poetry of the real.</h1>
                <p>Expert news, reviews and videos of the latest digital cameras, lenses, accessories, and phones. Get answers to your questions in our photography forums.</p>

                <Link to="/about"><button className="btn-cls  btn-warning">PREVIEW</button></Link>

               
            </div>
            <div className="right-side col-6 ">
                <img src={photo} alt="" />
            </div>
        </div>
    );
};

export default Banner;