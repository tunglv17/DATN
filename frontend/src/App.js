import Routers from "./Routes";
import React, { useState, useEffect } from "react";
import RoomAPI from "./API/RoomAPI";
import "react-datepicker"
function App() {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const getRooms = async () => {
      try {
        const { data: rooms } = await RoomAPI.getAll();
        setRooms(rooms);
      } catch (error) {
        console.log(error);
      }
    };
    getRooms();
  }, []);

  return (
    <div className="App">
      <Routers listRoom={rooms}/>
    </div>
  );
}

export default App;
