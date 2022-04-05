import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../../../Images/side.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="home-header container-fluid d-flex  ">
            <div className="left-side col-6 ">
                <h1>Photography is an austere and blazing poetry of the real.</h1>
                <p className='pt-3'>Expert news, reviews and videos of the latest digital cameras, lenses, accessories, and phones. Get answers to your questions in our photography forums The Canon RF 14-35mm f4L IS USM is a compact, ultra wide zoom for the EOS R mirrorless system. It’s the widest lens in the RF system to date. Find out if it's the best wide lens for you in my full review!.</p>

                <Link to="/reviews"><button className="btn-cls  btn-success mt-5">PREVIEW</button></Link>

               
            </div>
            <div className="right-side col-6 ">
                <img src={photo} alt="" />
            </div>
        </div>
    );
};

export default Banner;