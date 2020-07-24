import React, { useState } from "react";
import CustomForm from "../components/customForm/customForm";
import UserInfo from "../components/userInfo/userInfo";
import ChatRoom from "../components/chatRoom/chatRoom";

const MainController = () => {
  const [page, setPage] = useState("createUser");
  const [userName, setUsername] = useState("");
  const [roomName, setRoomName] = useState("");

  const inputUserNameChangeHandler = (value) => {
    setUsername(value);
  };

  const submitCreateUserButtonHandler = () => {
    setPage("userInfo");
  };

  const inputRoomNameChangeHandler = (value) => {
    setRoomName(value);
  };

  const submitNewRoomHandler = () => {
    setPage("createRoom");
  };

  const submitJoinChatRoomHandler = () => {
    console.log(page);
    setPage("joinRoom");
  };

  const backToUserInfo = () => {
    setPage("userInfo");
  };

  const submitCreateRoomHandler = () => {
    setPage("chatRoom");
  };

  const getRenderPage = (page) => {
    switch (page) {
      case "createUser":
        return (
          <CustomForm
            title="ชื่อของคุณ"
            inputText={userName}
            hideBackButton
            hideSubmitButton={userName.length === 0}
            inputChangeHandler={inputUserNameChangeHandler}
            submitHandler={submitCreateUserButtonHandler}
            submitText="ยืนยัน"
          />
        );
      case "userInfo":
        return (
          <UserInfo
            userName={userName}
            submitNewRoomHandler={submitNewRoomHandler}
            submitJoinChatRoomHandler={submitJoinChatRoomHandler}
          />
        );
      case "createRoom":
        return (
          <CustomForm
            title="สร้างห้องใหม่"
            inputText={roomName}
            submitText="ยืนยัน"
            inputChangeHandler={inputRoomNameChangeHandler}
            submitHandler={submitCreateRoomHandler}
            backPageHandler={backToUserInfo}
          />
        );
      case "joinRoom":
        return (
          <CustomForm
            title="เข้าร่วมแชท"
            placeholder="ชื่อห้อง"
            submitText="เข้าร่วม"
            inputText={roomName}
            inputChangeHandler={inputRoomNameChangeHandler}
            submitHandler={submitCreateRoomHandler}
            backPageHandler={backToUserInfo}
          />
        );
      case "chatRoom":
        return <ChatRoom roomName={roomName} />;
    }
  };

  return getRenderPage(page);
};

export default MainController;
