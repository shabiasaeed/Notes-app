import React from 'react';
import './Header.css';
import addButton from '../assets/add-button.png';
import { FiSearch } from 'react-icons/fi';

// Component to handle the display of the application's header section
const Header = ({ setSearchNotes }) => {
  return (
    <header className="header">
      <div className="header-top">
        <h1 className="title">Notes</h1>
        <button className="add-button">
          <img src={addButton} alt="Add"/>
        </button>
      </div>
      <div className="search-bar">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="Search through your Notes" className="search-text" onChange={(e) => setSearchNotes(e.target.value)}/>
      </div>
    </header>
  );
};

export default Header;
