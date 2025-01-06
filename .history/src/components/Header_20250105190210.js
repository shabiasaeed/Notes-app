import React from 'react';
import Logo from '../assets/Logo.png';
import { FiSearch } from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa';
import CreateNote from './CreateNote';


// Component to handle the display of the application's header section
const Header = ({ setSearchNotes, onAddNote }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="p-5 bg-white flex flex-col items-center shadow-md">
      <div className="flex items-center justify-between w-full max-w-4xl">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-14 h-auto"/>
          <h1 className="text-4xl font-bold text-black ml-4">Notes</h1>
        </div>
        <FaPlus className="w-8 h-8 cursor-pointer text-[#912338] " onClick={() => setIsModalOpen(true)}/>
      </div>
      <div className="flex items-center w-full max-w-4xl mt-4">
        <FiSearch className="w-6 h-6 text-gray-400 mr-3" />
        <input type="text" placeholder="Search through your Notes" className="flex-grow border-none outline-none p-2 text-lg italic placeholder-gray-400" onChange={(e) => setSearchNotes(e.target.value)}/>
      </div>
      <CreateNote isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={onAddNote}/>
    </header>
  );
};

export default Header;