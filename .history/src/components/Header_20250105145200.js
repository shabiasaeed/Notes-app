import React from 'react';
import Logo from '../assets/Logo.png';
import { FiSearch } from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa';


// Component to handle the display of the application's header section
const Header = ({ setSearchNotes }) => {
  return (
    <header className="p-5 bg-white flex flex-col items-center shadow-md">
      <div className="flex items-center justify-between w-full max-w-4xl">
        <img src={Logo} alt="Logo" className="w-16 h-auto"/>
        <h1 className="text-4xl font-bold text-black ml-4">Notes</h1>
        <FaPlus className="w-8 h-8 cursor-pointer text-[#912338]"/>
      </div>
      <div className="flex items-center w-full max-w-4xl mt-4">
        <FiSearch className="w-6 h-6 text-gray-400 mr-3" />
        <input type="text" placeholder="Search through your Notes" className="flex-grow border-none outline-none p-2 text-lg italic placeholder-gray-400" onChange={(e) => setSearchNotes(e.target.value)}/>
      </div>
    </header>
  );
};

export default Header;
