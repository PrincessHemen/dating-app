import React, { useRef } from 'react';
import './App.css';
import Dating from './Components/Dating/Dating';
import Header from './Components/Header/Header';
import Swipe from './Components/Swipe/Swipe';

function App() {
  const datingRef = useRef(null);

  const handleSwipe = (action) => {
    if (datingRef.current) {
      datingRef.current.handleSwipe(action);
    }
  };

  return (
    <>
      <Header />
      <Dating ref={datingRef} />
      <Swipe onSwipe={handleSwipe} />
    </>
  );
}

export default App;
