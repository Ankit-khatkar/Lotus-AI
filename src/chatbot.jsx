import React, { useState } from "react";
import "./chatbot.css";
import { CiUser } from "react-icons/ci";
import { FaRobot } from "react-icons/fa6";
import { getResponse } from "./responseLibrary.js";

function ChatMsg(props) {
  const { message, sender, className, id } = props;
  if (sender === "user") {
    return (
      <>
        <div className={className}>
          <p className="chatText">{message}</p>
          <CiUser className="profile" />
          {/* <img src="src\imgs\User.svg" alt="" className="profile" /> */}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={className}>
          <FaRobot className="profile" />
          <p className="chatText">{message}</p>
        </div>
      </>
    );
  }
}

function Chatbot() {
  const [currentMsg, setCurrentMsg] = useState([]);
  const [inputText, setinputText] = useState("");
  const chatContainerRef = React.useRef(null);
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

  React.useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [currentMsg]);
  const InputMsg = (e) => {
    setinputText(e.target.value);
  };

  const SendMsg = (e) => {
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
  const Keyhandle = (e) => {
    if (e.key === "Enter") {
      SendMsg();
    }
    if (e.key === "Escape") {
      setinputText("");
    }
  };

  return (
    <>
      <div className="chatContainor" ref={chatContainerRef}>
        <div className="chatHeader">
          <input
            type="text"
            placeholder="Ask anything to Lotus AI"
            className="searchBox"
            onChange={InputMsg}
            value={inputText}
            onKeyDown={Keyhandle}
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
