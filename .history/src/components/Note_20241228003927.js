import React, { useState } from 'react';
import './Note.css';
import userIcon from '../assets/user-icon.png';
import pinIconDark from '../assets/pin-icon-dark.png';
import pinIconLight from '../assets/pin-icon-light.png';
import deleteIcon from '../assets/delete-icon.png';
import { ThumbTackIcon, ThumbTackOutline } from '@heroicons/react/24/solid'; // Import for solid icons
import { ThumbTackIcon as ThumbTackOutlineIcon } from '@heroicons/react/24/outline'; // Import for outline icons


//Component to handle the display of the note's section
const Note = ({ title, author, time, pinned, onDelete, onPinToggle }) => {
  const [isHovered, setIsHovered] = useState(false); //State for checking whether the note is hovered
  const pinIcon = pinned ? pinIconDark : (isHovered ? pinIconLight : ''); // Displaying the pin based on the check of whether the note is hovered and whether it is pinned

  return (
    <div
      className="note border p-4 rounded shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`note-header flex items-center justify-between ${pinned ? 'bg-yellow-100' : 'bg-gray-50'}`}>
        {/* Pin Icon */}
        <div
          onClick={() => onPinToggle(title)}
          className="cursor-pointer"
        >
          {pinned ? (
            <ThumbTackIcon className="h-6 w-6 text-yellow-500" />
          ) : (
            isHovered && <ThumbTackOutlineIcon className="h-6 w-6 text-gray-400 hover:text-gray-600" />
          )}
        </div>

        <h2 className="text-lg font-bold">{title}</h2>

        {/* Delete Icon */}
        {isHovered && (
          <img
            src={deleteIcon}
            className="delete-icon h-6 w-6 cursor-pointer"
            onClick={() => onDelete(title)}
            alt="Delete"
          />
        )}
      </div>

      <div className="note-footer flex items-center mt-2 text-sm text-gray-600">
        <img src={userIcon} alt="User" className="user-icon h-8 w-8 rounded-full mr-2" />
        <p>{author}</p>
        <span className="ml-auto">{time}</span>
      </div>
    </div>
  );
};

export default Note;
