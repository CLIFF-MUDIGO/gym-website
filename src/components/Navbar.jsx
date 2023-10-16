import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';
import { Link, Element } from 'react-scroll'; // Import Element for defining sections

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', changeBackground);
    }
  }, []);

  return (
    <nav className={nav ? 'navbar active' : 'nav'}>
      <Link to="top" className='logo'>
        <img src={logo} alt=''/>
      </Link>
      <input className='menu-btn' type='checkbox' id='menu-btn' />
      <label className='menu-icon' htmlFor='menu-btn'> {/* Corrected "for" attribute to "htmlFor" */}
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li><Link to="header" spy={true} smooth={true} duration={500}>Header</Link></li>
        <li><Link to="features" spy={true} smooth={true} duration={500}>Features</Link></li>
        <li><Link to="offer" spy={true} smooth={true} duration={500}>Offer</Link></li>
        <li><Link to="about" spy={true} smooth={true} duration={500}>About</Link></li>
        <li><Link to="contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
