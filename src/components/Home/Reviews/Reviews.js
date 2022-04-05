import React from 'react';

const Reviews = (props) => {

    const {title, description, author, rating, ratingCount, price, cover} = props.review;
    
    return (
        <div className='col'>
                <div className="card">
                <div className="course">
                    <img src={cover} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{title}</h5>
                        <p className="card-text">{description}</p>
                        <div className="rating d-flex justify-content-between align-items-center">
                            <p>Rating : {rating}</p>
                            <p>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </p>
                            <p>({ratingCount})</p>
                        </div>
                        <h3 className="mt-2 mb-0 fw-bold">Price : <span className="fw-bold">${price}</span></h3>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Course By &nbsp;<span style={{ color: 'rgb(0, 255, 102)' }}>{author}</span></small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;