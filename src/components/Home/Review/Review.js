import React from 'react';
import useReview from '../../../hooks/useReview';
import Reviews from '../Reviews/Reviews';

const Review = () => {
    const [reviews] = useReview();
    return (
        <div className="home-featured container text-center p-5">
            <h2>Customar Review</h2>
        
            <div className="featured-container text-start row row-cols-1 row-cols-md-2 row-cols-lg-3 my-4 g-4">
                {
                    reviews.slice(0, 3).map(review => (
                        <Reviews key={reviews.id} review={review} />
                    ))
                }
            </div>
        </div>
    );
};

export default Review;