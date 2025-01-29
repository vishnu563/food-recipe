import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Header.scss";
import { MdFoodBank } from "react-icons/md";
import { IoMdArrowDown } from "react-icons/io";
import { useSidebarContext } from '../../context/sidebarContext';

const Navbar = () => {
  const { openSidebar } = useSidebarContext();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <nav className={`navbar bg-black flex align-center ${scrolled ? 'scrolled' : ""}`}>
      <div className='container w-100'>
        <div className='navbar-content text-white'>
          <div className='brand-and-toggler flex align-center justify-between'>
            <Link to="/" className='navbar-brand fw-3 fs-22 flex align-center'>
              <MdFoodBank />
              <span className='navbar-brand-text fw-7'>Recipe Finder.</span>
            </Link>
            <ul className='navbar-links'>
            <li><Link to="/favorites">Favorites</Link></li>
          </ul>
            <div className='navbar-btns flex align-center'>
              <button type="button" className='navbar-show-btn text-white' onClick={() => openSidebar()}>
                <h4>Filter By Categories</h4><IoMdArrowDown size={27} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
