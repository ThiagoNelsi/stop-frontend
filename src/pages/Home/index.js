import React, { useState, useEffect, useRef } from 'react';
import { FaTimesCircle, FaUsers } from 'react-icons/fa';

import './styles.css';

function Home() {

  const overlay = useRef(null);
  const container = useRef(null);
  const newRoomPassword = useRef(null);

  const [newRoomAccess, setNewRoomAccess] = useState('public');
 
  useEffect(() => {
    showUsernameInput();
  }, []);

  useEffect(() => {
    if (newRoomAccess === 'public') {
      newRoomPassword.current.style.display = 'none'
    } else {
      newRoomPassword.current.style.display = 'block'
    }
  }, [newRoomAccess]);

  function showUsernameInput() {
    overlay.current.style.display = 'flex';
    container.current.style.overflow = 'hidden';
  }

  function closeUsernameInput() {
    overlay.current.style.display = 'none';
    container.current.style.overflow = 'auto';
  }

  function handleAccessChange(event) {
    const options = event.target.options;
    setNewRoomAccess(options[options.selectedIndex].value)
  }

  return (
    <div className="container" ref={container}>
      <div className="username-overlay" ref={overlay}>
        <div className="overlay-box">
          <h1>Username:</h1>
          <input type="text" name="username" id="username" />
          <button onClick={closeUsernameInput}>ENTRAR</button>
        </div>
      </div>
      <header>
        <h1>STOP!</h1>
        <input type="text" name="search" id="search" placeholder="Pesquisar sala..."/>
      </header>

      
      <main>
        <form className="new-room">

          <h1>CRIAR SALA</h1>

          <div className="inputs">
            <div className="left">
              <div className="input-block">
                <label htmlFor="room-name">NOME</label>
                <input type="text" name="room-name" id="room-name" max="15" />
              </div>

              <div className="input-block">
                <label htmlFor="room-columns">COLUNAS</label>
                <input type="text" name="room-columns" id="room-columns"/>
                <div className="added-columns">
                  <span className="column-card"><span>PAÍS</span> <FaTimesCircle color="#C10F0F" size="15" className="close-card"/> </span>
                  <span className="column-card"><span>CIDADE</span> <FaTimesCircle color="#C10F0F" size="15" className="close-card" /> </span>
                  <span className="column-card"><span>OBJETO</span> <FaTimesCircle color="#C10F0F" size="15" className="close-card" /> </span>
                  <span className="column-card"><span>NOME</span> <FaTimesCircle color="#C10F0F" size="15" className="close-card" /> </span>
                  <span className="column-card"><span>FRUTA</span> <FaTimesCircle color="#C10F0F" size="15" className="close-card" /> </span>
                </div>
              </div>

              <div className="input-block">
                <label htmlFor="number-of-players">NÚMERO DE JOGADORES</label>
                <select type="select" name="number-of-players" id="number-of-players">
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                  <option value="30">30</option>
                  <option value="35">35</option>
                  <option value="40">40</option>
                  <option value="45">45</option>
                  <option value="50">50</option>
                </select>
              </div>
            </div>

            <div className="right">
              <div className="input-block">
                <label htmlFor="access">ACESSO</label>
                <select name="access" id="access" onChange={handleAccessChange} >
                  <option value="public">Público</option>
                  <option value="private">Privado</option>
                </select>
              </div>

              <div className="input-block" ref={newRoomPassword} >
                <label htmlFor="room-password">SENHA</label>
                <input type="password" name="room-password" id="room-password" />
              </div>

              <button type="submit">CRIAR</button>
            </div>
          </div>

        </form>

        <div className="rooms">
          <h3>SALAS</h3>
          <ul>
            <li className="room">
              <p className="room-name">NOME DA SALA</p>
              <span className="room-columns">ALIMENTO, CIDADE, OBJETO...</span>
              <span className="players"> <FaUsers color="#333" /> <span>6/12</span></span>
            </li>
            <li className="room">
              <p className="room-name">NOME DA SALA</p>
              <span className="room-columns">ALIMENTO, CIDADE, OBJETO...</span>
              <span className="players"> <FaUsers color="#333" /> <span>6/12</span></span>
            </li>
            <li className="room">
              <p className="room-name">NOME DA SALA</p>
              <span className="room-columns">ALIMENTO, CIDADE, OBJETO...</span>
              <span className="players"> <FaUsers color="#333" /> <span>6/12</span></span>
            </li>
            <li className="room">
              <p className="room-name">NOME DA SALA</p>
              <span className="room-columns">ALIMENTO, CIDADE, OBJETO...</span>
              <span className="players"> <FaUsers color="#333" /> <span>6/12</span></span>
            </li>
            <li className="room">
              <p className="room-name">NOME DA SALA</p>
              <span className="room-columns">ALIMENTO, CIDADE, OBJETO...</span>
              <span className="players"> <FaUsers color="#333" /> <span>6/12</span></span>
            </li>
            <li className="room">
              <p className="room-name">NOME DA SALA</p>
              <span className="room-columns">ALIMENTO, CIDADE, OBJETO...</span>
              <span className="players"> <FaUsers color="#333" /> <span>6/12</span></span>
            </li>
            <li className="room">
              <p className="room-name">NOME DA SALA</p>
              <span className="room-columns">ALIMENTO, CIDADE, OBJETO...</span>
              <span className="players"> <FaUsers color="#333" /> <span>6/12</span></span>
            </li>
            <li className="room">
              <p className="room-name">NOME DA SALA</p>
              <span className="room-columns">ALIMENTO, CIDADE, OBJETO...</span>
              <span className="players"> <FaUsers color="#333" /> <span>6/12</span></span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );

}

export default Home;
