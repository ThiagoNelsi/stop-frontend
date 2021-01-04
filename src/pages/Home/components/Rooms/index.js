import React, { useState, useEffect } from 'react';
import { FaUsers } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

function Rooms() {

  const [rooms, setRooms] = useState([]);
 
  useEffect(() => {
    setRooms(roomsMock);
  }, []);

  return (
    <div className="rooms">
      <h3>SALAS</h3>
      <ul>
      {
        rooms.map(room => (
          <li className="room" key={uuidv4()}>
            <p className="room-name">{room.name}</p>
            <span className="room-columns">{room.columns.join(' - ').toUpperCase()}</span>
            <span className="players"> <FaUsers color="#333" /> <span>{room.onlinePlayers}/{room.maxPlayers}</span></span>
          </li>
        ))
      }
      </ul>
    </div>
  );

}

const roomsMock = [
  {
    name: 'Some name',
    columns: ['col1', 'column 2', 'mycolumn', 'some column', 'testing', 'mycolumn', 'some column', 'testing'],
    onlinePlayers: 5,
    maxPlayers: 5,
  },
  {
    name: 'Some name',
    columns: ['col1', 'column 2', 'mycolumn', 'some column', 'testing'],
    onlinePlayers: 5,
    maxPlayers: 10,
  },
  {
    name: 'Some name',
    columns: ['col1', 'column 2', 'mycolumn', 'some column', 'testing'],
    onlinePlayers: 6,
    maxPlayers: 15,
  },
  {
    name: 'Some name',
    columns: ['col1', 'column 2', 'mycolumn', 'some column', 'testing'],
    onlinePlayers: 5,
    maxPlayers: 5,
  },
];

export default Rooms;
