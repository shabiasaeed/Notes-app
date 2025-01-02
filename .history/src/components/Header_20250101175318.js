import React from 'react';
import './Header.css';
import addButton from '../assets/add-button.png';
import { FiSearch } from 'react-icons/fi';

// Component to handle the display of the application's header section
const Header = ({ setSearchNotes }) => {
  return (
    <header className="p-5 bg-white flex flex-col items-center shadow-md">
      <div className="flex items-center justify-between w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-black">Notes</h1>
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
