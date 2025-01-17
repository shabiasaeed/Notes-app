import React, { useState } from 'react';
import './Note.css';
import userIcon from '../assets/user-icon.png';
import { FiTrash } from 'react-icons/fi'; 
import { FaThumbtack } from 'react-icons/fa'; 
import { TbPinned } from 'react-icons/tb'; 

//Component to handle the display of the note's section
const Note = ({ title, author, time, pinned, onDelete, onPinToggle }) => {
  const [isHovered, setIsHovered] = useState(false); //State for checking whether the note is hovered
  

  return (
    <div className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className={`flex items-center justify-between ${pinned ? 'text-yellow-500' : 'text-gray-800'}`}>
      {pinned ? (<FaThumbtack className="w-5 h-5 cursor-pointer" onClick={() => onPinToggle(title)}/>) : (isHovered && (<TbPinned className="pin-icon" onClick={() => onPinToggle(title)}/>))}
        <h2>{title}</h2>
        {isHovered && (<FiTrash className="w-5 h-5 cursor-pointer" onClick={() => onDelete(title)}/>)}
      </div>
      <div className="note-footer">
        <img src={userIcon} alt="User" className="user-icon"/>
        <p>{author}</p>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default Note;
