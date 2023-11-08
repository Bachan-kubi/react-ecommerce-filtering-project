import React from 'react';
import {AiFillStar} from 'react-icons/ai';
import { BsFillBagFill } from "react-icons/bs";

const Card = () => {
    return (
        <div>
            <section className="card">
          <img className="card-img"
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="shoes"
          />
          <div className="card-details">
            <h2 className="card-title">Shoe</h2>
            <div className="card-review">
              <AiFillStar className="rating-starts" />
              <AiFillStar className="rating-starts" />
              <AiFillStar className="rating-starts" />
              <AiFillStar className="rating-starts" />
              <AiFillStar className="rating-starts" />
              <span className="total-review">5</span>
            </div>
            <div className="card-price">
              <div className="price">
                <del className="del">$300</del>200
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