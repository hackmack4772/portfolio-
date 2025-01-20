import React, { useState, useEffect, useRef } from "react";
import { addDoc, collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./config/firebase"; 
import { query, onSnapshot, orderBy } from "firebase/firestore";
import "react-chat-elements/dist/main.css"; 
import { MessageBox, Input, Button } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import "./Chat.css"; // Custom styles for centering and differentiation
import { FaEdit, FaTrashAlt, FaTrash } from "react-icons/fa";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [senderId, setSenderId] = useState("");
  const [receiverId, setReceiverId] = useState("");
  const [seenMessages, setSeenMessages] = useState({});
  const [editingMessage, setEditingMessage] = useState(null);
  const [username, setUsername] = useState("");
  const [receiverUsername, setReceiverUsername] = useState("");
  const [showPopup, setShowPopup] = useState(true);
  const chatEndRef = useRef(null);

  useEffect(() => {
    const initializeIds = async () => {
      let localSenderId = localStorage.getItem("senderId");
      let localReceiverId = localStorage.getItem("receiverId");

      if (!localSenderId) {
        localSenderId = username || "user123";
        localStorage.setItem("senderId", localSenderId);
      }

      const senderDoc = await getDoc(doc(db, "users", localSenderId));
      if (!senderDoc.exists()) {
        await setDoc(doc(db, "users", localSenderId), { occupied: true });
      }

      if (!localReceiverId || localReceiverId === localSenderId) {
        localReceiverId = receiverUsername || "user456";
        const receiverDoc = await getDoc(doc(db, "users", localReceiverId));
        if (receiverDoc.exists() && receiverDoc.data().occupied) {
          localReceiverId = "user789"; // Assign a different ID if occupied
        }
        localStorage.setItem("receiverId", localReceiverId);
        await setDoc(doc(db, "users", localReceiverId), { occupied: true });
      }

      setSenderId(localSenderId);
      setReceiverId(localReceiverId);
    };

    if (username && receiverUsername) {
      initializeIds();
      setShowPopup(false);
    }
  }, [username, receiverUsername]);

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
    const messagesQuery = query(
      collection(db, "chatMessages"),
      orderBy("timestamp", "asc")
    );
    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const messages = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setChatMessages(messages.filter((msg) => !msg.deletedForMe));

      const seen = {};
      messages.forEach((msg) => {
        if (msg.receiverId === senderId && !msg.seen) {
          seen[msg.id] = true;
          setDoc(doc(db, "chatMessages", msg.id), { seen: true }, { merge: true });
        }
      });
      setSeenMessages(seen);
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    });

    return () => unsubscribe();
  }, [senderId]);

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
    if (username.trim() !== "" && receiverUsername.trim() !== "") {
      setShowPopup(false);
    }
  };

  return (
    <div className="chat-box-container">
      {showPopup && (
        <div className="username-popup">
          <div className="username-popup-inner">
            <h3>Enter your username and the receiver's username</h3>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Your Username"
            />
            <input
              type="text"
              value={receiverUsername}
              onChange={(e) => setReceiverUsername(e.target.value)}
              placeholder="Receiver's Username"
            />
            <button onClick={handleUsernameSubmit}>Submit</button>
          </div>
        </div>
      )}
      {!showPopup && (
        <div className="chat-container">
          <h3>Chat</h3>
          <div className="chat-messages">
            {chatMessages.map((msg) => (
              <div key={msg.id} className="message-container">
                <MessageBox
                  position={msg.senderId === senderId ? "right" : "left"}
                  type="text"
                  text={msg.deletedForEveryone ? "This message was deleted" : msg.message}
                  date={msg.timestamp.toDate()}
                  className={
                    msg.senderId === senderId ? "message-sender" : "message-receiver"
                  }
                  status={getStatus(msg)}
                />
                {msg.senderId === senderId && !msg.deletedForEveryone && (
                  <div className="message-actions">
                    <button onClick={() => handleEditMessage(msg)}><FaEdit /></button>
                    <button onClick={() => handleDeleteMessageForMe(msg)}><FaTrashAlt /></button>
                    <button onClick={() => handleDeleteMessageForEveryone(msg)}><FaTrash /></button>
                  </div>
                )}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="chat-input">
            <Input
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              rightButtons={
                <Button
                  text={editingMessage ? "Update" : "Send"}
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                />
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
