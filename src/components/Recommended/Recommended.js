import React from 'react';
import "./Recommended.css";
import Button from '../Essential/Button';

const Recommended = ({handleButton}) => {
    return (
        <>
            <h4 className='reco-title'>Recommended Products</h4>
            <section className="recommended-btn">
                <Button onClickHandler={handleButton} className='reco-btn' value="" title="All Products"></Button>
                <Button onClickHandler={handleButton} className='reco-btn' value="Nike" title="Nike"></Button>
                <Button onClickHandler={handleButton} className='reco-btn' value="Adidas" title="Adidas"></Button>
                <Button onClickHandler={handleButton} className='reco-btn' value="Puma" title="Puma"></Button>
                <Button onClickHandler={handleButton} className='reco-btn' value="Vans" title="Vans"></Button>
            </section>
        </>
    );
};

export default Recommended;