import React, { useState } from "react";
import "./chatbot.css";
import { CiUser } from "react-icons/ci";
import { FaBraille } from "react-icons/fa";
import { getResponse } from "./responseLibrary.js";

function ChatMsg(props) {
  const { message, sender, className, id } = props;
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
  const [currentMsg, setCurrentMsg] = useState([]);
  const [inputText, setinputText] = useState("");
  const InputMsg = (e) => {
    setinputText(e.target.value);
  };
  const SendMsg = () => {
    if (inputText.trim()) {
      const userMsg = {
        message: inputText,
        sender: "user",
        className: "chatUiUser",
        id: crypto.randomUUID(),
      };
      const robotMsg = {
        message: getResponse(inputText),
        sender: "robot",
        className: "chatUiRobot",
        id: crypto.randomUUID(),
      };
      setCurrentMsg((currentMsg) => [...currentMsg, userMsg, robotMsg]);
      setinputText("");
    }
  };

  const chatcomponents = currentMsg.map((chatmessage) => {
    return (
      <>
        <ChatMsg
          message={chatmessage.message}
          sender={chatmessage.sender}
          className={chatmessage.className}
          id={chatmessage.id}
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
            onChange={InputMsg}
            value={inputText}
          />
          <button onClick={SendMsg} className="btn">
            Send
          </button>
        </div>
        {chatcomponents}
      </div>
    </>
  );
}
export default Chatbot;
