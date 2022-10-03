import React from 'react';
import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import NotificationsIcon from '@material-ui/icons/Notifications';


import "./Nav.scss";

export default function Nav() {

    const [navBlack, setnavBlack] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleClick = () => {
        console.log(toggleMenu)
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
    }

    const transitionNav = () => {
        window.scrollY > 100 ? setnavBlack(true)  : setnavBlack(false); 
    }
    useState(() => {
        document.addEventListener("scroll", transitionNav)
    });


  return (
    <div className={`nav  ${navBlack || toggleMenu ? "navBlack" : "navTransparent" } ${toggleMenu && "show"} `}>
    <button className='navBurger' onClick={handleClick}>
       <MenuIcon />
    </button>
    <img src='./image/logoNet.png' className='logo' alt='logo netflix' />
    <nav className="navLinks">
        <a href='/' className='navlink'>
            Accueil
        </a>
        <a href='/' className='navlink'>
            Séries
        </a>
        <a href='/' className='navlink'>
            Films
        </a>
    </nav>
    <div className='navActions' >
 
    <a href='/' className='navAction'>
    <SearchIcon />
    </a>
    <a href='/' className='navAction'>
        direct
    </a>
    <a href='/' className='navAction'>
         <CardGiftcardIcon />
    </a>
    <a href='/' className='navAction'>
         <NotificationsIcon />
    </a>
    <a href='/' className='navAction'>
        avatar
    </a>
  

    </div>

    </div>
  )
}
