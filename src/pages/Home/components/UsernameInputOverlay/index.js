import React, { useState, useEffect, useRef } from 'react';

import './styles.css';

function UsernameInputOverlay({ container }) {

  const overlay = useRef(null);
  const usernameInput = useRef(null);

  const [username, setUsername] = useState('');

  useEffect(() => {
    showUsernameInput();
  });

  function showUsernameInput() {
    overlay.current.style.display = 'flex';
    container.current.style.overflow = 'hidden';
    usernameInput.current.focus();
  }

  function closeUsernameInput(event) {
    event.preventDefault();
    if (username !== '') {
      overlay.current.style.display = 'none';
      container.current.style.overflow = 'auto';
    } else {
      alert('Insira um nome');
    }
  }

  return (
    <form className="username-overlay" ref={overlay} onSubmit={closeUsernameInput}>
      <div className="overlay-box">
        <h1>Username:</h1>
        <input
          type="text"
          name="username"
          id="username"
          ref={usernameInput}
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <button type="submit">ENTRAR</button>
      </div>
    </form>
  );

}

export default UsernameInputOverlay;
