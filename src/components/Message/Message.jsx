import "./Message.css";

function Message({ message, name }) {
  let curruser = false;
  const trimname = name.trim().toLowerCase();
  if (message.user === trimname) {
    curruser = true;
  }
  return curruser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimname}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{message.text}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{message.text}</p>
      </div>
      <p className="sentText pl-10 ">{message.user}</p>
    </div>
  );
}
export default Message;
