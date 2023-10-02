import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  RiHome2Line,
  RiInformationLine,
  RiNewspaperLine,
  RiMoneyDollarCircleLine,
  RiMenu2Line,
} from 'react-icons/ri';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav>
      <div className="mobile-menu-button" onClick={toggleMobileMenu}>
        <RiMenu2Line />
      </div>
      <ul>
        <li className={isActive('/')}>
          <Link to="/">
            <RiHome2Line />
            Home
          </Link>
        </li>
        <li className={isActive('/about')}>
          <Link to="/about">
            <RiInformationLine />
            About
          </Link>
        </li>
        <li className={isActive('/blog')}>
          <Link to="/blog">
            <RiNewspaperLine />
            Blog
          </Link>
        </li>
        <li className={isActive('/pricing')}>
          <Link to="/pricing">
            <RiMoneyDollarCircleLine />
            Pricing
          </Link>
        </li>
      </ul>
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" className={isActive('/')}>
            <RiHome2Line />
            Home
          </Link>
          <Link to="/about" className={isActive('/about')}>
            <RiInformationLine />
            About
          </Link>
          <Link to="/blog" className={isActive('/blog')}>
            <RiNewspaperLine />
            Blog
          </Link>
          <Link to="/pricing" className={isActive('/pricing')}>
            <RiMoneyDollarCircleLine />
            Pricing
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
