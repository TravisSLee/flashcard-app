import React, { useState } from 'react';
import FlashcardList from './FlashcardList';

function App() {

  const [ flashCards, setFlashCards ] = useState([])
  return (
    <FlashcardList flashCards={flashCards}/>
  )
}

export default App;
