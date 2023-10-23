import React from 'react';
import './Sidebar.css';
import {BsCart4} from 'react-icons/bs';
import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';

const Sidebar = () => {
    return (
        <>
            <div className="sidebars">
                <div className="logo-container">
                    <BsCart4 className='logo' />
                </div>
                <Category />
                <Price />
                <Colors />
            </div>
        </>
    );
};

export default Sidebar;