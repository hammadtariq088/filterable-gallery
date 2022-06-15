import React from 'react';

const GalleryBtns = ({category, filterGallery}) => {
    return (
        <>
            <div className="menu-tab d-flex justify-content-around">
            {
                category.map((allCat, index)=>
                {
                    return <button className="btn btn-info" key={index} onClick={() => filterGallery(allCat)}>{allCat}</button>
                })
            }
                {/* <button className="btn btn-info" onClick={() => filterGallery('breakfast')}>Breakfast</button>
                <button className="btn btn-info" onClick={() => filterGallery('lunch')}>Lunch</button>
                <button className="btn btn-info" onClick={() => filterGallery('evening')}>Evening</button>
                <button className="btn btn-info" onClick={() => filterGallery('dinner')}>Dinner</button>
                <button className="btn btn-info" onClick={() => setData(GalleryData)}>All</button> */}
            </div>
        </>
    )
}

export default GalleryBtns;
