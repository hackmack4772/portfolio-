import React, { useState, useEffect, useRef } from "react";
import { addDoc, collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./config/firebase";
import { query, onSnapshot, orderBy } from "firebase/firestore";
import "react-chat-elements/dist/main.css";
import { MessageBox, Input, Button } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import "./Chat.css"; // Custom styles for centering and differentiation
import { FaEdit, FaTrashAlt, FaTrash } from "react-icons/fa";
import ListUsers from "./ListUsers";
import Login from "./Login";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [senderId, setSenderId] = useState("");
  const [receiverId, setReceiverId] = useState("");
  const [seenMessages, setSeenMessages] = useState({});
  const [editingMessage, setEditingMessage] = useState(null);
  const [username, setUsername] = useState("");
  const [enterClicked, setEnterClicked] = useState("");
  const [showPopup, setShowPopup] = useState(true);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const chatEndRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const chatRef = useRef(null)
  useEffect(() => {
    const initializeIds = async () => {
      const ip = await fetch('https://api.ipify.org?format=json')
        .then(res => res.json())
        .then(data => data.ip);
      
      // Generate a random ID (for example using Firebase Auth UID or other means)
      const randomId = `${Math.random().toString(36).substring(2, 15)}-${Math.random().toString(36).substring(2, 15)}`;
      
      // Store username and IP as password (using the randomId as user ID)
      const uniqueUsername = `${username}_${ip}_${randomId}`;
      setSenderId(uniqueUsername);

      // Save to localStorage
      localStorage.setItem('userDetails', JSON.stringify({ username, ip, randomId }));

      // Firebase Document: Check if the document exists, otherwise create it
      const senderDoc = await getDoc(doc(db, "users", uniqueUsername));
      if (!senderDoc.exists()) {
        await setDoc(doc(db, "users", uniqueUsername), { occupied: true });
      }

      // Listen for changes in the users collection
      const usersQuery = query(collection(db, "users"));
      const unsubscribe = onSnapshot(usersQuery, (snapshot) => {
        const usersList = snapshot.docs.map((doc) => doc.id);
        setUsers(usersList.filter(user => user !== uniqueUsername));
      });

      return () => unsubscribe();
    };

    if (username) {
      initializeIds();
      setShowPopup(false);
    }
  }, [enterClicked]);

  const handleSendMessage = async () => {
    if (message.trim() === "") return;
    try {
      if (editingMessage) {
        await updateDoc(doc(db, "chatMessages", editingMessage.id), {
          message,
          edited: true,
        });
        setEditingMessage(null);
      } else {
        const newMessage = {
          senderId,
          receiverId,
          message,
          timestamp: new Date(),
          deletedForEveryone: false,
          deletedForMe: false,
        };
        await addDoc(collection(db, "chatMessages"), newMessage);
      }
      setMessage("");
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  const handleEditMessage = (msg) => {
    setMessage(msg.message);
    setEditingMessage(msg);
  };

  const handleDeleteMessageForMe = async (msg) => {
    try {
      await updateDoc(doc(db, "chatMessages", msg.id), {
        deletedForMe: true,
      });
    } catch (error) {
      console.error("Error deleting message for me: ", error);
    }
  };

  const handleDeleteMessageForEveryone = async (msg) => {
    try {
      await updateDoc(doc(db, "chatMessages", msg.id), {
        deletedForEveryone: true,
      });
    } catch (error) {
      console.error("Error deleting message for everyone: ", error);
    }
  };

  useEffect(() => {
    if (receiverId) {
      const messagesQuery = query(
        collection(db, "chatMessages"),
        orderBy("timestamp", "asc")
      );
      const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
        const messages = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setChatMessages(messages.filter((msg) => !msg.deletedForMe && (msg.senderId === senderId || msg.receiverId === senderId)));
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
      });

      return () => unsubscribe();
    }
  }, [senderId, receiverId]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const getStatus = (msg) => {
    if (msg.senderId === senderId) {
      return msg.seen ? "seen" : "double-tick";
    } else {
      return "single-tick";
    }
  };

  const handleUsernameSubmit = () => {
    if (username.trim() !== "") {
      setShowPopup(false);
    }
    setEnterClicked(true)
  };

  const handleUserSelect = (user) => {
    setReceiverId(user);
    setSelectedUser(user);
  };
  const formatTime = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000); // Convert seconds to milliseconds

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${hours}:${minutes} ${ampm}`;
  };
  return (
    <div className="chat-box-container">
      {showPopup && (
        <Login username={username} setUsername={setUsername} handleUsernameSubmit={handleUsernameSubmit} />
      )}
      {!showPopup && !selectedUser && (
        <ListUsers users={users} handleUserSelect={handleUserSelect} />
      )}
      {!showPopup && selectedUser && (
        <div
          id="chat-app"
          className={`chat-app is-active ${isActive ? "is-active" : ""}`}
          ref={chatRef}
        >
          <div className="chat-app_toggle " onClick={handleSendMessage}>
            <svg
              fill="#000000"
              height="64px"
              width="30px"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 512.001 512.001"
            >
              <g>
                <g>
                  <g>
                    <path
                      d="M483.927,212.664L66.967,25.834C30.95,9.695-7.905,42.024,1.398,80.367l21.593,89.001
            c3.063,12.622,11.283,23.562,22.554,30.014l83.685,47.915c6.723,3.85,6.738,13.546,0,17.405l-83.684,47.915
            c-11.271,6.452-19.491,17.393-22.554,30.015L1.398,431.633c-9.283,38.257,29.507,70.691,65.569,54.534l416.961-186.83
            C521.383,282.554,521.333,229.424,483.927,212.664z M468.609,265.151l-416.96,186.83c-7.618,3.417-15.814-3.398-13.845-11.516
            l21.593-89.001c0.647-2.665,2.383-4.975,4.761-6.337l83.685-47.915c31.857-18.239,31.887-64.167,0-82.423l-83.685-47.916
            c-2.379-1.362-4.115-3.672-4.761-6.337L37.804,71.535c-1.945-8.016,6.128-14.975,13.845-11.514L468.61,246.85
            C476.522,250.396,476.542,261.596,468.609,265.151z"
                    />
                    <path
                      d="M359.268,238.907l-147.519-66.1c-9.444-4.231-20.523-0.005-24.752,9.435c-4.231,9.44-0.006,20.523,9.434,24.752
            L305.802,256l-109.37,49.006c-9.44,4.231-13.664,15.313-9.434,24.752c4.231,9.443,15.312,13.663,24.752,9.435l147.519-66.101
            C373.996,266.495,374.006,245.51,359.268,238.907z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>

          <div className="chat-app_box">
            <div className="chat-app_header">
              {/* <div className="close" onClick={handleCloseClick}></div> */}
              <div className="branding">
                <div className="avatar is-online">
                  <img
                    src="https://avatars.githubusercontent.com/u/120358827?v=4&size=64"
                    alt=""
                  />
                </div>
                <div className="content">
                  <p className="title">Aamir Saleem lone</p>
                </div>
              </div>
            </div>

            <div className="chat-app_content">
              <div className="messages">
                {chatMessages.map((msg) => (
                  <div
                    className={
                      msg.senderId === senderId ? "message" : "message reply"
                    }
                  >
                    <p className="text">
                      {msg.deletedForEveryone
                        ? "This message was deleted"
                        : msg.message}
                    </p>
                    <span className="timestamp">{formatTime(msg.timestamp)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="chat-app_footer">
              <input
                type="text"
                className="form-control"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
