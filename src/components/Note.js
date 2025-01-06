import React, { useState } from 'react';
import { FiTrash } from 'react-icons/fi'; 
import { FaThumbtack } from 'react-icons/fa'; 
import { TbPinned } from 'react-icons/tb'; 
import { TbUserPlus } from 'react-icons/tb'; 

//Component to handle the display of the note's section
const Note = ({ title, author, date, content, pinned, onDelete, onPinToggle }) => {
  const [isHovered, setIsHovered] = useState(false); //State for checking whether the note is hovered
  const [isExpanded, setIsExpanded] = useState(false); //State for checking whether the note is expanded

  return (
    <div className={`p-5 rounded-lg bg-white shadow-md hover:shadow-lg flex flex-col gap-2 cursor-pointer w-full transition-all duration-300 ${
        isExpanded ? 'h-auto' : 'h-[100px]'}`}  onMouseEnter={() => {setIsHovered(true); setIsExpanded(true); }} onMouseLeave={() => {setIsHovered(false); setIsExpanded(false); }}>
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
        <span className="ml-auto">{date}</span>
      </div>
      {isExpanded && (<p className="mt-2 text-sm text-gray-700">{content}</p>)}
    </div>
  );
};

export default Note;
