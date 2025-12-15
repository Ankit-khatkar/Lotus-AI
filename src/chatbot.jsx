import React, { useState } from "react";
import "./chatbot.css";
import { CiUser } from "react-icons/ci";
import { FaBraille } from "react-icons/fa";
const chatMessages = [
  { message: "Hii, Lotus AI", sender: "user", className: "chatUiUser" },
  {
    message: "Hello Ankit, How can i help you ?",
    sender: "robot",
    className: "chatUiRobot",
  },
];
function ChatMsg(props) {
  const { message, sender, className, id } = props;
  if (sender === "user") {
    return (
      <>
        <div className={className}>
          <p>{message}</p>
          <CiUser />
          {console.log(id)}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={className}>
          <FaBraille />
          <p>{message}</p>
          {console.log(id)}
        </div>
      </>
    );
  }
}
function Mymsg() {
  const [chatmsg, setchatmsg] = React.useState("");
}
function SendMsg(setchatmsg) {
  setchatmsg([...chatmsg]);
}

function Chatbot(chatMessage) {
  const chatcomponents = chatMessages.map((chatmessage) => {
    return (
      <>
        <ChatMsg
          message={chatmessage.message}
          sender={chatmessage.sender}
          className={chatmessage.className}
          id={crypto.randomUUID()}
        />
      </>
    );
  });
  return (
    <>
      <div className="chatContainor">
        <div>
          <input
            type="text"
            placeholder="Ask anything to Lotus AI"
            className="searchBox"
            onChange={Mymsg}
          />
          <button onClick={Mymsg} className="btn">
            Send
          </button>
        </div>
        {chatcomponents}
      </div>
    </>
  );
}
export default Chatbot;
