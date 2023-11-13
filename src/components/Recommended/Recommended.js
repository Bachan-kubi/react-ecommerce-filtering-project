import React from 'react';
import "./Recommended.css";
import Button from '../Essential/Button';

const Recommended = ({handleButton}) => {
    return (
        <>
            <h4 className='reco-title'>Recommended Products</h4>
            <section className="recommended-btn">
                <Button onClickHandler={handleButton} className='reco-btn' value="All Products" title="All Products"></Button>
                <Button onClickHandler={handleButton} className='reco-btn' value="nike" title="Nike"></Button>
                <Button onClickHandler={handleButton} className='reco-btn' value="addidas" title="Addidas">All Products</Button>
                <Button onClickHandler={handleButton} className='reco-btn' value="vans" title="Vans"></Button>
                
            </section>
        </>
    );
};

export default Recommended;