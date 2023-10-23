import React from 'react';
import "./Recommended.css";

const Recommended = () => {
    return (
        <>
            <h4 className='reco-title'>Recommended Products</h4>
            <section className="recommended-btn">
                <button className='reco-btn'>All Producs</button>
                <button className='reco-btn'>Nike</button>
                <button className='reco-btn'>Addidas</button>
                <button className='reco-btn'>Puma</button>
                <button className='reco-btn'>Vans</button>
            </section>
        </>
    );
};

export default Recommended;