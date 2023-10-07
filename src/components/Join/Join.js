import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="joincontainer ">
      <div className="innerdiv">
        <h1 className="join-header">Join the fun!!</h1>
        <div className="input-div">
          <input
            placeholder="Enter your name"
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="input-div">
          <input
            placeholder="Enter room name"
            type="text"
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
        </div>
        {/*to transfer data query strings used not props and redux and using dynamic link 
      prevent user to enter chat if no room or name specified prevents button click*/}
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button type="submit" className="button">
            Start-Chatting
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Join;
