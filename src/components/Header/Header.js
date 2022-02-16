import React from 'react';

import './Header.css';
import UserInfo from "../UserInfo/UserInfo";

const Header = () => {
    return (
        <>
         <div className={'header'}>
             <div className={'logo'}>
                 <img src="https://iconape.com/wp-content/png_logo_vector/lifetime-movies-logo.png" alt="movie"/>
             </div>
             <div className={'search'}>
                 <input className={'input'} type="text"/>
             </div>
             <div className={'user_info'}>
                 <UserInfo/>
             </div>
         </div>
        </>
    );
};

export default Header;