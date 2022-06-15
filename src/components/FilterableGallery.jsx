import React, { useState } from 'react';
import GalleryData from "./GalleryData";
import Gallery from './Gallery';
import GalleryBtns from './GalleryBtns';


const FilterableGallery = () => {

    const allCategory = [...new Set(GalleryData.map((val)=>
    {
        return val.category;

    })), "all"] // To convert Set's Object into Array we can use (...) Rest Operator

    // console.log(allCategory);


    const [data, setData] = useState(GalleryData);
    const [category, setCategory] = useState(allCategory);

    const filterGallery = (cat) => {

        if(cat === "all")
        {
            setData(GalleryData);
            return;
        }

        const filterData = GalleryData.filter((val)=>
        {
            return val.category === cat;

        })

        setData(filterData);

    }

    return (
        <>
            <h1 className="mt-5 text-center main-heading">Order Your Favourite Food</h1>
            <hr />
            <div className="menu-tabs container">
                <GalleryBtns category={category} filterGallery={filterGallery}/>
            </div>

            {/* my main items section  */}
            <div className="menu-items container-fluid mt-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                        {
                            data.map((val)=>
                            {
                                const {id} = val;
                                return <Gallery key={id} {...val} />

                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterableGallery;
