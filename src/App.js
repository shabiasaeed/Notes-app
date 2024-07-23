import React from 'react';
import Header from './components/Header';
import Note from './components/Note';
import './App.css';
import backgroundInk from './assets/ink-background-element.png';

//Component to handle the rendering of the header and note compnents
function App() {
  // Displaying few static notes 
  const notes = [
    {
      title: "Introduction of Large Language Models and Retrieval Augmented Generation",
      author: "Roger Craig and Shakeel Avadhany",
      time: "2 mins ago",
      pinned: true
    },
    {
      title: "Always Look on the Bright Side of Life",
      author: "Mick Zomnir",
      time: "yesterday",
      pinned: false
    },
    {
      title: "And Now for Something Completely Different",
      author: "No Collaborators",
      time: "a week ago",
      pinned: false
    }
  ];

  return (
    <div className="App">
      <Header/>
      <main>
        <img src={backgroundInk} alt="Ink Element" className="ink-element"/>
        {notes.map((note, index) => (
          <Note key={index} title={note.title} author={note.author} time={note.time} pinned={note.pinned}/>
        ))}
      </main>
    </div>
  );
}

export default App;
