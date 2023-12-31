import React from 'react';
import "./Nav.css";
import {FiHeart} from 'react-icons/fi';
import {AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai';

const Nav = ({query, handleInputChange}) => {
    return (
        <div className='nav'>
            <div className="nav-container">
                <input value={query} onChange={handleInputChange} className='search-input' type="text" placeholder='Enter your shoes name!' />
            </div>
            <div className="profile-container">
                <a href="">
                <FiHeart className='nav-icons'/>
                </a>
                <a href="">
                    <AiOutlineShoppingCart className='nav-icons'/>
                </a>
                <a href="">
                    <AiOutlineUserAdd className='nav-icons'/>
                </a>
            </div>
        </div>
    );
};

export default Nav;