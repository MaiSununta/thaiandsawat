import React from 'react';
import '../nav_style.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-inside">
    <span className="brand">
        <NavLink to="/">𝙏𝙝𝙖𝙞 𝙖𝙣𝙙 𝙎𝙖𝙬𝙖𝙩 𝙎𝙝𝙤𝙥</NavLink>
    </span>
    <ul className="navbar-nav">
        <li>
        <NavLink to="/">ʜᴏᴍᴇ</NavLink>
        </li>
        <li>
        <NavLink to="/product">ᴘʀᴏᴅᴜᴄᴛ</NavLink>
        </li>
        <li>
        <NavLink to="/contact">ᴄᴏɴᴛᴀᴄᴛ</NavLink>
        </li>
    </ul>
    </div>
</nav>
  )
}

export default Navbar 