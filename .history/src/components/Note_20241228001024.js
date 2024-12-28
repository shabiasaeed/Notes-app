import React, { useState } from 'react';
import './Note.css';
import userIcon from '../assets/user-icon.png';
import pinIconDark from '../assets/pin-icon-dark.png';
import pinIconLight from '../assets/pin-icon-light.png';
import deleteIcon from '../assets/delete-icon.png';

//Component to handle the display of the note's section
const Note = ({ title, author, time, pinned, onDelete, onPinToggle }) => {
  const [isHovered, setIsHovered] = useState(false); //State for checking whether the note is hovered
  const pinIcon = pinned ? pinIconDark : (isHovered ? pinIconLight : ''); // Displaying the pin based on the check of whether the note is hovered and whether it is pinned

  return (
    <div className="note" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className={`note-header ${pinned ? '' : 'unpinned'}`}>
        {pinIcon && <img src={pinIcon} alt="Pin" className="pin-icon"/>}
        <h2>{title}</h2>
        {isHovered && (<img src={deleteIcon} className="delete-icon" onClick={() => onDelete(title)} alt="Delete" />)}
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
