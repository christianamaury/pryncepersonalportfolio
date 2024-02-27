import React, { useState } from "react";
import {Link} from "react-scroll";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.png";
import menu from "../../assets/menu.png";
import "./navbar.css";
export const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  return(
    <div>
      <nav className='navbar'>
        <img src={logo} alt="Profile Imgae Logo" className='logo' />
        <div className='desktopMenu'>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'> Home </Link>
          <Link activeClass='active' to='books' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'> Books </Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'> About Me </Link>
        </div>

        <button className='desktopMenuBtn' onClick={() => {
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
          }}>
          <img src={contact} alt='' className='desktopMenuImg' />
          Contact Me
        </button>

        <img src={menu} alt="Menu" className='mobMenu'onClick={() => setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu? 'flex': 'none'}} >
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}> Home </Link>
          <Link activeClass='active' to='books' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}> Books </Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}> About Me </Link>

        </div>

      </nav>
    </div>
  )
}
