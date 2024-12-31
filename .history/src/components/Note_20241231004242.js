import React, { useState } from 'react';
import './Note.css';
import userIcon from '../assets/user-icon.png';
import pinIconDark from '../assets/pin-icon-dark.png';
import pinIconLight from '../assets/pin-icon-light.png';
import { FiTrash } from 'react-icons/fi'; 
import { FaThumbtack } from 'react-icons/fa'; // Filled thumbtack
import { TbPinned } from 'react-icons/tb'; // Unfilled thumbtack

//Component to handle the display of the note's section
const Note = ({ title, author, time, pinned, onDelete, onPinToggle }) => {
  const [isHovered, setIsHovered] = useState(false); //State for checking whether the note is hovered
  

  return (
    <div className="note" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className={`note-header ${pinned ? 'pinned' : 'unpinned'}`}>
      {pinned ? (<FaThumbtack className="pin-icon" onClick={() => onPinToggle(title)}/>) : (isHovered && (<TbPinned className="pin-icon" onClick={() => onPinToggle(title)}/>))}
        <h2>{title}</h2>
        {isHovered && (<FiTrash className="delete-icon" onClick={() => onDelete(title)}/>)}
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
