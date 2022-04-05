import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useReview from '../../../hooks/useReview';
import Reviews from '../Reviews/Reviews';

const Review = () => {
    const [reviews] = useReview();
    const { pathname } = useLocation();

    return (
        <div className="home-featured container text-center p-5">
            <h2>Customar Review</h2>

            <div className="featured-container text-start row row-cols-1 row-cols-md-2 row-cols-lg-3 my-4 g-4">
                {
                    pathname === "/reviews" ? (
                        reviews.map(review => (

                            <Reviews key={reviews.id} review={review} />
                        ))
                    ) : (
                        reviews.slice(0, 3).map(review => (

                            <Reviews key={reviews.id} review={review} />
                        ))
                    )
                }
            </div>
            <Link to="/reviews"><button className="btn btn-warning">See More</button></Link>
        </div>
    );
};

export default Review;