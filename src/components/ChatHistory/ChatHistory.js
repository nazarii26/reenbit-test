import React from "react";
import "./../../App.scss";
import { useLocation, useParams } from "react-router-dom";

export const ChatHistory = () => {
  const { id } = useParams();
  const location = useLocation();
  const { user } = location.state ? location.state : "";
  //   console.log({ user });
  //   const { conversation } = user;
  const result = user.conversation.map((i) => i);
  console.log(result);

  const messages = () => {
    return user.conversation.map((item) => {
      item.authorId === id ? (
        <div className="chat__messageContent">
          <div className="chat__userMessage">
            <img className="avatar" src={user.avatar} alt="avatar" />
            <div className="chat__userMessageContent">
              <p className="chat__text">{item.message}</p>
            </div>
          </div>
          <p className="chat__date">{item.date}</p>
        </div>
      ) : (
        <div className="chat__myMessageItem">
          <div className="chat__myMessageBlock">
            <p className="chat__myText">{item.message}</p>
          </div>
          <p className="chat__myDate">{item.date}</p>
        </div>
      );
    });
  };

  return (
    <>
      <div className="chat">
        <div className="chat__user">
          <img className="avatar" src={user.avatar} alt="avatar" />
          <p className="name">{user.first_name + " " + user.last_name}</p>
        </div>
        <div className="chat__history">{() => messages()}</div>
        <div className="chat__input">
          <textarea
            className="sendMessage"
            id="sendMessage"
            placeholder="Type your message"
            rows="3"
          ></textarea>
          <button type="submit" class="send__button">
            <img src="http://cdn.onlinewebfonts.com/svg/img_130824.png" />
          </button>
          {/* <button className="button">*</button> */}
        </div>
      </div>
    </>
  );
};
