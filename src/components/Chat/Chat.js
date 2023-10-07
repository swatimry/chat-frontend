import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { io } from "socket.io-client";
import { useLocation } from "react-router-dom";
import Infobar from "../Infobar/Infobar";
import Input from "../Input/Input";
import Messages from "../messages/messages";
import "./Chat.css";

const socket = io(process.env.REACT_APP_BACKEND_URL ||"localhost:5000");
function Chat() {
  const location = useLocation();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setmessage] = useState("");
  const [messages, setmessages] = useState([]);
  const [error, setError] = useState("");


  useEffect(() => {
    
    const { name, room } = queryString.parse(location.search);
    //location comes from react-dom-router
    //data is object of seach parameters and search gives parameter part of url
    setName(name);
    setRoom(room);
    socket.emit("join", { name, room }, (error) => {
     
      if (error) {
        alert(error);
      }
    });
    //name :name=> in ES6 as name only
  }, [ location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      
      setmessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setmessage(""));
    }
  };

  return (
    <div className=" outerchatdiv">
      <div className="innerchatdiv">
        <Infobar roomname={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setmessage={setmessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
}
export default Chat;
