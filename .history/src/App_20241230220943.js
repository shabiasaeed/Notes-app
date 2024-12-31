import React, { useState } from 'react';
import Header from './components/Header';
import Note from './components/Note';
import './App.css';
import backgroundInk from './assets/ink-background-element.png';

//Component to handle the rendering of the header and note compnents
function App() {
  // Displaying few static notes 
  const [notes, notesList] = useState([
    {
      title: "Brainstorming Ideas for Campaign",
      author: "Roger Craig and Shakeel Avadhany",
      time: "2 mins ago",
      pinned: true
    },
    {
      title: "Movies/Shows to Watch",
      author: "Mick Zomnir",
      time: "yesterday",
      pinned: false
    },
    {
      title: "Books to Read",
      author: "No Collaborators",
      time: "a week ago",
      pinned: false
    }
  ]);

  function handleDelete(title){
    notesList(notes.filter( note => note.title !== title))
  }

  function handlePinToggle(title){
    notesList(prevNotes => prevNotes.map(note => note.title === title ? { ...note, pinned: !note.pinned } : note));
  };

  // Search state
  const [searchNotes, setSearchNotes] = useState('');

  // Filter notes based on search
  const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(searchNotes.toLowerCase()));

  // Pinned notes to appear at the top
  const sortedNotes = filteredNotes.sort((a, b) => b.pinned - a.pinned);

  return (
    <div className="App">
      <Header setSearchNotes={setSearchNotes}/>
      <main>
        <img src={backgroundInk} alt="Ink Element" className="ink-element"/>
        {sortedNotes.map((note, index) => (
          <Note key={index} title={note.title} author={note.author} time={note.time} pinned={note.pinned} onDelete={handleDelete} onPinToggle={handlePinToggle}/>
        ))}
      </main>
    </div>
  );
}

export default App;
