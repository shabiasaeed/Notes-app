import React from 'react';
import './Header.css';
import addButton from '../assets/add-button.png';
import { FiSearch } from 'react-icons/fi';
import { FaPlusCircle } from 'react-icons/fa';


// Component to handle the display of the application's header section
const Header = ({ setSearchNotes }) => {
  return (
    <header className="p-5 bg-white flex flex-col items-center shadow-md">
      <div className="flex items-center justify-between w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-black">Notes</h1>
        <button className="bg-transparent border-none cursor-pointer">
          <img src={addButton} alt="Add" className="w-12 h-12"/>
        </button>
        <FaPlusCircle className="w-12 h-12"/>
      </div>
      <div className="flex items-center w-full max-w-4xl mt-4">
        <FiSearch className="w-6 h-6 text-gray-400 mr-3" />
        <input type="text" placeholder="Search through your Notes" className="flex-grow border-none outline-none p-2 text-lg italic placeholder-gray-400" onChange={(e) => setSearchNotes(e.target.value)}/>
      </div>
    </header>
  );
};

export default Header;
