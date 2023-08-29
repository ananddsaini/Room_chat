import React, { useState, useEffect } from "react";
import { Chat } from "./Components/Chat"
import { Auth } from "./Components/Auth";
import { AppWrapper } from "./Components/AppWrappper";
import Cookies from "universal-cookie";
import "./App.css";

const cookies = new Cookies();

function ChatApp() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [isInChat, setIsInChat] = useState(null);
  const [room, setRoom] = useState("");
   
  if (!isAuth) {
    return (
      <AppWrapper
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        setIsInChat={setIsInChat}
      >
        <Auth setIsAuth={setIsAuth} />
      </AppWrapper>
    );
  }

  return (
    <AppWrapper isAuth={isAuth} setIsAuth={setIsAuth} setIsInChat={setIsInChat}>
      {!isInChat ? (
        <div className="room">
          <label>  Room Name: </label>
          <input placeholder="Enter room name here" onChange={(e) => setRoom(e.target.value)} />
          <button className="enterButton"
            onClick={() => {
              setIsInChat(true);
            }}
          >
            Enter
          </button>
        </div>
      ) : (
        <Chat room={room} />
      )}
    </AppWrapper>
  );
}

export default ChatApp;

