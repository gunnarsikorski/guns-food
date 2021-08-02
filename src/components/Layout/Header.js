import React from 'react';
import classes from './Header.module.css'
import chickenImg from '../../assets/chicken.jpeg'

const Header = (props) => {
    return (
        <>
           <header className={classes.header}>
               <h1>Gun's Restaurant</h1>
           </header>
           <div className={classes['main-image']}>
               <img src={chickenImg} alt='Fried chicken wings'/>
           </div>
        </>
    );
};

export default Header;