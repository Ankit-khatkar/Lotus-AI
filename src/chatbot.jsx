import { useState } from "react";
import "./chatbot.css";
import { CiUser } from "react-icons/ci";
import { FaBraille } from "react-icons/fa";
function ChatMsg(props) {
  const { message, sender, className } = props;
  if (sender === "user") {
    return (
      <>
        <div className={className}>
          <p>{message}</p>
          <CiUser />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={className}>
          <FaBraille />
          <p>{message}</p>
        </div>
      </>
    );
  }
}
function Chatbot() {
  return (
    <>
      <div className="chatContainor">
        <div>
          <input
            type="text"
            placeholder="Ask anything to Lotus AI"
            className="searchBox"
          />
          <button className="btn">Send</button>
        </div>
        <div>
          <ChatMsg
            message="Hii, Lotus AI"
            sender="user"
            className="chatUiUser"
          />
          <ChatMsg
            message="Hello Ankit, How can i help you ?"
            sender="robot"
            className="chatUiRobot"
          />
        </div>
      </div>
    </>
  );
}
export default Chatbot;
