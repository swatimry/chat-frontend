import React from "react";
import "./Input.css";
function Input({ message, setmessage, sendMessage }) {
  return (
    <form className="form">
      <input
        className="inputbox"
        value={message}
        placeholder="Type Now..."
        type="text"
        onChange={(event) => setmessage(event.target.value)}
        onKeyDown={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <button
        className="sendButton"
        onClick={(event) => {
          sendMessage(event);
        }}
      >
        Send
      </button>
    </form>
  );
}
export default Input;
