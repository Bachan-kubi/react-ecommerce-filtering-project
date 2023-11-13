import React from 'react';
// import {AiFillStar} from 'react-icons/ai';
import { BsFillBagFill } from "react-icons/bs";

const Card = ({img, title, reviews, star, newPrice, prevPrice}) => {
    return (
        <div>
            <section className="card">
          <img className="card-img"
            src={img}
            alt={title}
          />
          <div className="card-details">
            <h2 className="card-title">{title}</h2>
            <div className="card-review">              
              {star}{star}{star}{star}
              <span className="total-review">{reviews}</span>
            </div>
            <div className="card-price">
              <div className="price">
                <del className="del">{prevPrice}</del>{newPrice}
              </div>
              <section className="bags">
                <BsFillBagFill />
            </section>
            </div>
            
          </div>
        </section>
        </div>
    );
};

export default Card;