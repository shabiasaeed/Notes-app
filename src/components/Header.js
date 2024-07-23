import React from 'react';
import './Header.css';
import searchIcon from '../assets/search-icon.png';
import addButton from '../assets/add-button.png';

// Component to handle the display of the application's header section
const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <h1 className="title">Notes</h1>
        <button className="add-button">
          <img src={addButton} alt="Add"/>
        </button>
      </div>
      <div className="search-bar">
        <img src={searchIcon} alt="Search"/>
        <input type="text" placeholder="Search through your Notes" className="search-text"/>
      </div>
    </header>
  );
};

export default Header;
