import React, { useRef } from 'react';

import NewRoom from './components/NewRoom';
import Rooms from './components/Rooms';
import UsernameInputOverlay from './components/UsernameInputOverlay';

import './styles.css';

function Home() {

  const container = useRef(null);

  return (
    <div className="container" ref={container}>
      <UsernameInputOverlay container={container} />
      <header>
        <h1>STOP!</h1>
        <input type="text" name="search" id="search" placeholder="Pesquisar sala..." />
      </header>
      
      <main>
        <NewRoom />
        <Rooms />
      </main>
    </div>
  );

}

export default Home;
