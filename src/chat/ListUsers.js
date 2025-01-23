import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore"; // Firebase Firestore utilities
import { db } from "../config/firebase";
import "./ListUsers.css"; // Assuming styles are properly named for ListUsers
import { useNavigate } from "react-router-dom";

export default function ListUsers() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("token");

  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(db, "users");
        const usersSnapshot = await getDocs(usersCollection);
        const userList = usersSnapshot.docs.map((doc) => doc.id); // Get the document IDs as usernames
        setUsers(userList);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Failed to load users. Please try again later.");
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="whatsapp">
      <div className="whatsapp_main">
        <div className="row">
          <div className="col-lg-4">
            <div className="whatsapp_main_sidemenu">
              <div className="whatapp_main_sidemenu_top" style={{ padding: 5 }}>
                <div className="row">
                  <div className="avatar col-lg-4 col-md-4 col-sm-2">
                    <img
                      style={{ borderRadius: "50%", height: 62, width: 62 }}
                      src="https://img.icons8.com/bubbles/2x/user.png"
                      alt="User Avatar"
                    />
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-10">
                    <div className="row text-center my-3">
                      <div className="col-4">
                        <i style={{ color: "#777" }} className="fa fa-sync-alt" />
                      </div>
                      <div className="col-4">
                        <i style={{ color: "#777" }} className="fa fa-envelope" />
                      </div>
                      <div className="col-4">
                        <i style={{ color: "#777" }} className="fas fa-ellipsis-v" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="whatsapp_main_sidemenu_middle">
                <i className="fa fa-search" />
                <input type="search" name="search" />
              </div>
              <div className="whatapp_main_sidemenu_bottom">
                <div className="whatapp_main_sidemenu_bottom_chat">
                  <ul className="list-group">
                    {users.map((user) => (
                      user !== userName && (
                        <li
                          key={user}
                          className="list-group-item"
                          onClick={() => navigate(`/chat/${user}`)}
                        >
                          <div className="row">
                            <div className="col-3">
                              <img
                                src="http://www.top-madagascar.com/assets/images/admin/user-admin.png"
                                className="avatar"
                                alt="User Avatar"
                              />
                            </div>
                            <div className="col-9">
                              <h6 style={{ fontSize: 14 }} className="font-weight-bold">
                                {user}
                              </h6>
                              <p className="discription">
                                <span>
                                  <svg
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 18 18"
                                    width={18}
                                    height={18}
                                  >
                                    <path
                                      fill="#4FC3F7"
                                      d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"
                                    />
                                  </svg>
                                </span>{" "}
                                Message
                              </p>
                            </div>
                          </div>
                        </li>
                      )
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 pr-0 pl-0 m-0">
            <div className="whatsapp_main_body p-5">
              <div className="whatsapp_main_body_image">
                <img
                  src="https://web.whatsapp.com/img/c98cc75f2aa905314d74375a975d2cf2.jpg"
                  alt="WhatsApp"
                />
              </div>
              <div className="whatapp_main_body_content">
                <h1 style={{ color: "#4b5961", fontSize: 36, fontWeight: 100 }}>
                  Keep your phone connected
                </h1>
                <h6
                  style={{
                    fontSize: 10,
                    color: "#929fa6",
                    textAlign: "center",
                    lineHeight: 20
                  }}
                >
                  WhatsApp connects to your phone to sync messages. To reduce data
                  usage, connect your phone to Wi-Fi.
                </h6>
                <hr style={{ marginBottom: 34, backgroundColor: "#E1E9EB" }} />
                <p
                  style={{
                    fontSize: 14,
                    color: "#929fa6",
                    lineHeight: 20,
                    display: "inline-flex",
                    msFlexAlign: "center",
                    alignItems: "center"
                  }}
                >
                  <i className="mr-2 fa fa-laptop" />
                  WhatsApp is available for Windows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
