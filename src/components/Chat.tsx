import React, { useEffect, useState } from "react";
import SignOut from "./SignOut";
import { auth, db } from "../firebase";
import { query, collection, orderBy, onSnapshot, limit } from "firebase/firestore";
import SendMessages from "./SendMessages";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged, User } from "firebase/auth";

function Chat() {

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("timestamp"),
      limit(50)
    );
    onSnapshot(q, (QuerySnapshot) => {
      let messages: any = [];
      QuerySnapshot.docs.map((doc) => 
        messages.push({ ...doc.data(), id: doc.id })
      );
      setMessages(messages);
    });

  }, []);

  /* ↓ログインしているかどうかを判定する */
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {!loading && (
        <>
        {!user ? (
          <Navigate to={`/`} />
        ) : (
          <div className="chat">
            <div className="chat-form">
              <SignOut userName={auth.currentUser?.displayName}/>
              <div className="chat-form-body">
                <div className="chat-container">
                  <div className="chat-container-items">
                    <div className="chat-head">
                      <h1 className="title">chat application</h1>
                      <p className="subtitle">ここはリアルタイムチャットルームです</p>
                      <hr />
                    </div>
                    <div className="chat-text basic-padding ">
                      {messages.map(({ id, text, uid, username }) => (
                      <div key={id}>
                        <div 
                          className={` ${
                            uid === auth.currentUser?.uid ? "sent" : "received"
                          } ` }
                        >
                          <div>
                            <p className="chat-text-name">{username}</p>
                          </div>
                          <div>
                            <div className="msg send" >
                              <p className="chat-text-content">{text}</p>
                            </div>
                          </div>
                        </div >
                      </div>
                    ))}
                    </div>
                  </div>
                </div>
              </div>
              <SendMessages />
            </div>
          </div>
        )}
      </>
      )}
    </>
  );
}

export default Chat;

