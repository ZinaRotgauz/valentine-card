import React, { useState }from 'react'
import './App.css';
import Letter from './Letter.tsx';

function App() {

  const [showLetter, setShowLetter] = useState(false);
  const [hideHeart, setHideHeart] = useState(false);

  const handleHeartClick = () => {
    setHideHeart(true); // Start disappearing animation

    setTimeout(() => {
      setShowLetter(true); // Show the letter after the heart disappears
    }, 600); // Wait for animation to complete
  };
  return (
    <div className="App">
        <div className='container'>
          {!showLetter&&
            <div 
            className={`heart ${hideHeart ? "heart-disappear" : ""}`}
            onClick={handleHeartClick}
            />
          }
        </div>
        {showLetter&&
        <div>
          <Letter/>
        </div>
        }
    </div>
  );
}

export default App;
