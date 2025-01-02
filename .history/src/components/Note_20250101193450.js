import React, { useState } from 'react';
import './Note.css';
import userIcon from '../assets/user-icon.png';
import { FiTrash } from 'react-icons/fi'; 
import { FaThumbtack } from 'react-icons/fa'; 
import { TbPinned } from 'react-icons/tb'; 
import { TbUserPlus } from 'react-icons/tb'; 

//Component to handle the display of the note's section
const Note = ({ title, author, time, pinned, onDelete, onPinToggle }) => {
  const [isHovered, setIsHovered] = useState(false); //State for checking whether the note is hovered
  

  return (
    <div className="p-5 rounded-lg bg-white shadow-md hover:shadow-lg flex flex-col gap-2 cursor-pointer w-full" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {pinned ? <FaThumbtack className="w-5 h-5 cursor-pointer" onClick={() => onPinToggle(title)} /> : isHovered && <TbPinned className="w-5 h-5 cursor-pointer" onClick={() => onPinToggle(title)} />}
          <h2 className="ml-2 font-bold text-[20px] text-[#912338]">{title}</h2>
        </div>
        {isHovered && <FiTrash className="w-5 h-5 cursor-pointer" onClick={() => onDelete(title)} />}
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500 pt-1">
        <TbUserPlus className="w-5 h-5 cursor-pointer" />
        <p>{author}</p>
        <span className="ml-auto">{time}</span>
      </div>
    </div>
  );
};

export default Note;
