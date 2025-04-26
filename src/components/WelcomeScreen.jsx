import React, { useState } from 'react';
import LogoModern from '../public/logomodern.png';
import LogoHistoric from '../public/logohistoric.png';

export default function WelcomeScreen({ onStart }) {
  const [nickname, setNickname] = useState('');
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(to bottom, #0072BB, #E00034)',
      color: '#FFF',
      textAlign: 'center',
      padding: '1rem'
    }}>
      <header style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', maxWidth: '800px' }}>
        <img src={LogoModern} alt="Logo Moderno" style={{ height: '64px' }} />
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '2.5rem' }}>Calcio Catania Story</h1>
        <img src={LogoHistoric} alt="Logo Storico" style={{ height: '64px' }} />
      </header>
      <p style={{ marginTop: '1.5rem', fontSize: '1.25rem', fontStyle: 'italic' }}>
        Dalle Leggende alle meteore…<br/>tutti innamorati di Catania
      </p>
      <div style={{ marginTop: '2rem' }}>
        <input
          type="text"
          placeholder="Nickname"
          value={nickname}
          onChange={e => setNickname(e.target.value)}
          style={{ padding: '0.5rem', borderRadius: '4px', border: 'none', marginRight: '0.5rem' }}
        />
        <button
          onClick={() => onStart(nickname)}
          disabled={!nickname.trim()}
          style={{
            padding: '0.5rem 1rem',
            background: '#FFF',
            color: '#0072BB',
            border: 'none',
            borderRadius: '4px',
            cursor: nickname.trim() ? 'pointer' : 'not-allowed',
            opacity: nickname.trim() ? 1 : 0.5
          }}
        >Inizia Quiz ▶️</button>
      </div>
      <footer style={{ position: 'absolute', bottom: '1rem' }}>
        <a href="/rules" style={{ color: '#FFF', textDecoration: 'underline' }}>Regolamento</a>
      </footer>
    </div>
  );
}
