import React from "react";
import Button from "../ui/button/button";

const UserInfo = ({
  userName,
  submitNewRoomHandler,
  submitJoinChatRoomHandler,
}) => {
  return (
    <div className="mlr fade-from-bottom">
      <div className="title-section">คุณ {userName}</div>
      <div className="large-button-section">
        <Button text="สร้างห้องใหม่" submitHandler={submitNewRoomHandler} />
        <Button
          text="เข้าร่วมแชท"
          textButton
          submitHandler={submitJoinChatRoomHandler}
        />
      </div>
    </div>
  );
};

export default UserInfo;
