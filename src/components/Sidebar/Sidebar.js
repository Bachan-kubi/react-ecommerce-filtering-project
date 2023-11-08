import React from 'react';
import './Sidebar.css';
import {BsCart4} from 'react-icons/bs';
import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';

const Sidebar = ({handleRadioChange}) => {
    return (
        <>
            <div className="sidebars">
                <div className="logo-container">
                    <BsCart4 className='logo' />
                </div>
                <Category handleRadioChange={handleRadioChange} />
                <Price handleRadioChange={handleRadioChange} />
                <Colors handleRadioChange={handleRadioChange} />
            </div>
        </>
    );
};

export default Sidebar;