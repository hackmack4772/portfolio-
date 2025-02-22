import React, { useState, useEffect } from "react";
import { db } from "../../src/config/firebase";
import { collection, getDocs, query } from "@firebase/firestore";
import { Card, Button, Row, Col, Table } from "react-bootstrap";

const ContactUsListing = () => {
  const [contactUsData, setContactUsData] = useState([]);
  const [apiStatus, setApiStatus] = useState(false);

  const contactUsRef = collection(db, "contactMessages");

  useEffect(() => {
    const fetchSettings = async () => {
      // Fetch settings from Firestore
      const contactUsQuery = query(contactUsRef);
      const querySnapshot = await getDocs(contactUsQuery);
      const fetchedData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setContactUsData(fetchedData);
      console.log(fetchedData);
      setApiStatus(true);
    };
    fetchSettings();
  }, []);

  return (
    apiStatus && (
      <>
        <Card.Header>
          {" "}
          <h3>All Messages</h3>
        </Card.Header>
        <Table bordered hover>
          <thead>
            <tr>
              {/* <th>id</th> */}
              <th>Name</th>
              <th>Email</th>
              <th>message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contactUsData.map((contactUs) => (
              <tr key={contactUs.id}>
                <td>{contactUs.name}</td>
                <td>{contactUs.email}</td>
                <td>{contactUs.message}</td>

                <td>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleEditcontactUs(contactUs)}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDeletecontactUs(contactUs.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>{" "}
      </>
    )
  );
};

export default ContactUsListing;
