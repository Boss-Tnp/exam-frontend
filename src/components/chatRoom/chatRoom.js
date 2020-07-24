import React, { useState } from "react";
import "./chatRoom.scss";
import Input from "../ui/input/input";

const ChatRoom = ({ roomName }) => {
  const [msg, setMsg] = useState("");

  const inputChangeHandler = (value) => {
    setMsg(value);
  };

  return (
    <div className="container-chat-room">
      <div className="room-no fade-from-bottom">ห้อง {roomName}</div>
      <div className="chat-list fade-from-right">
        <div className="chat-text">
          <div className="sender">
            <div className="sender-text">
              สวัสดี
              <span className="sender-name">คุณ eiei</span>
            </div>
          </div>
        </div>
        <div className="input-text fade-from-bottom-input">
          <Input val={msg} inputChangeHandler={inputChangeHandler} showHint />
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
