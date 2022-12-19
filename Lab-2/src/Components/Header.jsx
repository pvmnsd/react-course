import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ location }) => {
  return (
    <div className="header">
      <div className="header__container _container">
        <div className="header__main">
          <Link to="/" className="header__logo">
            <div className="header__logoimage">
              <svg
                width="30"
                height="24"
                viewBox="0 0 30 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12H16.25" stroke="#052123" strokeWidth="4" />
                <path d="M0 2H25" stroke="#052123" strokeWidth="4" />
                <path d="M0 22H30" stroke="#052123" strokeWidth="4" />
              </svg>
            </div>
            <span className="header__title">John Doe</span>
          </Link>
          <ul className="header__navigation navigation">
            <li className="navigation__list">
              <Link to="about">about</Link>
            </li>
            <li className="navigation__list">
              <Link to="skills">skills</Link>
            </li>
            <li className="navigation__list">
              <Link to="hobbies"> hobbies</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
