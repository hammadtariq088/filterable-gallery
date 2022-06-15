import React from 'react';

const Gallery = ({ image, name, category, description, price }) => {
    return (
        <>
            <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5 px-4">
                <div className="row Item-inside">
                    {/* for images */}
                    <div className="col-12 col-md-12 col-lg-4 img-div">
                        <img src={image} alt={name} className="img-fluid" />
                    </div>

                    {/* menu items description */}
                    <div className="col-12 col-md-12 col-lg-8">
                        <div className="main-title pt-4 pb-3">
                            <h1>{name}</h1>
                            <h2>{category}</h2>
                            <p>{description}</p>
                        </div>
                        <div className="menu-price-book">
                            <div className="price-book-divide d-flex justify-content-between ">
                                <h2>Price : {price}</h2>
                                <a href="#">
                                    <button className="btn btn-info">Order Now</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Gallery;
