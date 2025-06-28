import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => setMenuOpen(!menuOpen);
const closeMenu = () => setMenuOpen(false);

const linkStyle =
"text-heading hover:text-primary transition px-3 py-2 rounded-md text-sm font-medium";

const activeStyle = "text-primary font-semibold";

return (
<nav className="bg-white shadow-md sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
    {/* Logo */}
    <NavLink to="/" onClick={closeMenu} className="text-2xl font-bold text-primary">
      TravelCo
    </NavLink>

    {/* Desktop Nav */}
    <div className="hidden md:flex items-center space-x-6">
      <NavLink to="/" end onClick={closeMenu} className={({ isActive })=>
        `${linkStyle} ${isActive ? activeStyle : ""}`
        }
        >
        Home
      </NavLink>
      <NavLink to="/destinations" onClick={closeMenu} className={({ isActive })=>
        `${linkStyle} ${isActive ? activeStyle : ""}`
        }
        >
        Destinations
      </NavLink>
      <NavLink to="/about" className={({ isActive })=>
        `${linkStyle} ${isActive ? activeStyle : ""}`
        }
        >
        About Us
      </NavLink>
      <NavLink to="/package" className={({ isActive })=>
        `${linkStyle} ${isActive ? activeStyle : ""}`
        }
        >
        Package
      </NavLink>
      <NavLink to="/contact" className={({ isActive })=>
        `${linkStyle} ${isActive ? activeStyle : ""}`
        }
        >
        Contact
      </NavLink>
      
      <NavLink to="/admin" className={({ isActive })=>
        `${linkStyle} ${isActive ? activeStyle : ""}`
        }
        >
        Admin
      </NavLink>



      {/* CTA Button */}
      <button className="bg-primary text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
        Book Now
      </button>
    </div>

    {/* Mobile Menu Icon */}
    <button onClick={toggleMenu} className="md:hidden text-heading">
      {menuOpen ?
      <X size={24} /> :
      <Menu size={24} />}
    </button>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
  <div className="md:hidden px-4 pb-4 space-y-3 bg-white shadow">
    <NavLink to="/" end onClick={closeMenu} className={({ isActive })=>
      `${linkStyle} block ${isActive ? activeStyle : ""}`
      }
      >
      Home
    </NavLink>
    <NavLink to="/destinations" onClick={closeMenu} className={({ isActive })=>
      `${linkStyle} block ${isActive ? activeStyle : ""}`
      }
      >
      Destinations
    </NavLink>
    <button onClick={closeMenu}
      className="block w-full text-center bg-primary text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
      Book Now
    </button>
  </div>
  )}
</nav>
);
}