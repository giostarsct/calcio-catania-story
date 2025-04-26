import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';

function App() {
  const [player, setPlayer] = useState(null);
  const handleStart = (nickname) => setPlayer(nickname);

  return (
    <>
      {!player
        ? <WelcomeScreen onStart={handleStart} />
        : (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <h2>Quiz in arrivo, {player}!</h2>
          </div>
        )
      }
    </>
  );
}

export default App;
