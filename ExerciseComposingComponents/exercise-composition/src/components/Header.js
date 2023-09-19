// Header.js

import React from 'react';
import companyLogo from './assets/images/logo.svg';

function Header() {
  return (
    <header className="w-9/12 mx-auto py-8 flex items-center">
      <img className="mr-12" src={companyLogo} alt="companyLogo" />
      <nav className="flex text-xl capitalize font-semibold space-x-8">
        <a className="hover:text-purple-600" href="#home">
          home
        </a>
        <a className="hover:text-purple-600" href="#about">
          about
        </a>
        <a className="hover:text-purple-600" href="#blog">
          blog
        </a>
      </nav>
    </header>
  );
}

export default Header;
