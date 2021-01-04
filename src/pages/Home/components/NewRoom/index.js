import React, { useState, useEffect, useRef } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

function NewRoom() {

  const MAX_COLUMNS = 20;

  const newRoomPasswordInput = useRef(null);
  const newRoomInput = useRef(null);

  const [newRoomName, setNewRoomName] = useState('');
  const [newColumn, setNewColumn] = useState('');
  const [newRoomColumns, setNewRoomColumns] = useState([]);
  const [newRoomMaxPlayers, setNewRoomMaxPlayers] = useState(5);
  const [newRoomAccess, setNewRoomAccess] = useState('public');
  const [newRoomPassword, setNewRoomPassword] = useState('');

  useEffect(() => {
    if (newRoomAccess === 'public') {
      newRoomPasswordInput.current.style.display = 'none';
      setNewRoomPassword('');
    } else {
      newRoomPasswordInput.current.style.display = 'block';
    }
  }, [newRoomAccess]);

  useEffect(() => {
    if (newRoomColumns.length === MAX_COLUMNS) {
      newRoomInput.current.disabled = true;
      alert('Máximo de colunas atingido');
    } else {
      newRoomInput.current.disabled = false;
    }
  }, [newRoomColumns]);

  function handleNewColumn() {
    if (newRoomColumns.length === MAX_COLUMNS) return;
    if (newRoomColumns.includes(newColumn)) {
      alert('Essa coluna já existe');
      return;
    }
    if (newColumn !== '') {
      setNewRoomColumns([...newRoomColumns, newColumn]);
      setNewColumn('');
    }
  }

  function handleRemoveColumn(columnName) {
    const columns = newRoomColumns.filter(column => column !== columnName);
    setNewRoomColumns(columns);
  }

  function handleSubmitNewRoom() {
    if (newRoomName && newRoomColumns.length > 0 && newRoomMaxPlayers) {
      if (newRoomAccess === 'public' || (newRoomAccess === 'private' && newRoomPassword)) {
        // send data to backend
        return;
      }
    }
    alert('Preencha todos os campos');
  }

  return (
    <div className="new-room">
      <h1>CRIAR SALA</h1>

      <div className="inputs">
        <div className="left">
          <div className="input-block">
            <label htmlFor="room-name">NOME</label>
            <input
              type="text"
              name="room-name"
              id="room-name"
              max="15"
              value={newRoomName}
              onChange={event => setNewRoomName(event.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="room-columns">COLUNAS</label>
            <input
              type="text"
              name="room-columns"
              id="room-columns"
              ref={newRoomInput}
              value={newColumn}
              onChange={event => setNewColumn(event.target.value)}
              onKeyPress={event => event.key === 'Enter' ? handleNewColumn() : null }
            />
            <div className="added-columns">
              {
                newRoomColumns.map(column => (
                  <span className="column-card" key={uuidv4()} >
                    <span>{column}</span>
                    <FaTimesCircle
                      color="#C10F0F"
                      size="15"
                      className="close-card"
                      onClick={() => handleRemoveColumn(column)}
                    />
                  </span>
                ))
              }
            </div>
          </div>

          <div className="input-block">
            <label htmlFor="number-of-players">NÚMERO DE JOGADORES</label>
            <select
              type="select"
              name="number-of-players"
              id="number-of-players"
              value={newRoomMaxPlayers}
              onChange={event => setNewRoomMaxPlayers(event.target.value)}
            >
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
            <select
              name="access"
              id="access"
              value={newRoomAccess}
              onChange={event => setNewRoomAccess(event.target.value)}
            >
              <option value="public">Público</option>
              <option value="private">Privado</option>
            </select>
          </div>

          <div className="input-block" ref={newRoomPasswordInput} >
            <label htmlFor="room-password">SENHA</label>
            <input
              type="password"
              name="room-password"
              id="room-password"
              value={newRoomPassword}
              onChange={event => setNewRoomPassword(event.target.value)}
            />
          </div>

          <button onClick={handleSubmitNewRoom}>CRIAR</button>
        </div>
      </div>
    </div>
  );

}

export default NewRoom;
