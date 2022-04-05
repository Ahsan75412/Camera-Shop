import React from 'react';

const Reviews = ({ review, children }) => {

    const { title, description, author, rating, ratingCount, cover  } = review;

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
                        {children}
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Review By &nbsp;<span style={{ color: 'rgb(0, 55, 102)' }}>{author} </span> </small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;