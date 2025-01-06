import React, { useState } from 'react'

const CreateNote = ({ isOpen, onClose, onSave }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleSave = () => {
        if (title && content) {
          onSave({ title, author, content, date: new Date().toLocaleDateString(), pinned: false });
          setTitle('');
          setAuthor('');
          setContent('');
          onClose();
        } else {
          alert('Please fill in all fields');
        }
    };

    if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
     <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-[#912338]">Create Note</h2>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 mb-4 border border-gray-300 rounded" />
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} className="w-full p-2 mb-4 border border-gray-300 rounded" rows="5"></textarea>
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} className="w-full p-2 mb-4 border border-gray-300 rounded" />
        <div className="flex justify-end gap-4">
            <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" > Cancel </button>
            <button onClick={handleSave} className="px-4 py-2 bg-[#912338] text-white rounded hover:bg-[#701d2b]"> Save </button>
        </div>
     </div>
    </div>
  )
}

export default CreateNote