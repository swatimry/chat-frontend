import react from "react";
import "./Infobar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
function Infobar({ roomname }) {
  return (
    <div className="outerdiv">
      <div className="leftcont">
        <h3>
          <BsPeopleFill />
        </h3>
        <h3>{roomname}</h3>
      </div>
      <div className="rightcont">
        <a href="/">
          <AiFillCloseCircle className="icon" />{" "}
        </a>
      </div>
    </div>
  );
}
export default Infobar;
