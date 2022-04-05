import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner/Banner';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Review>
                <Link to="/reviews"><button className="btn btn-warning">See More</button></Link>
            </Review>
        </div>
    );
};

export default Home;