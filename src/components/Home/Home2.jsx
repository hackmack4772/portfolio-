import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { doc, getDoc } from "firebase/firestore"; // Firestore methods
import { db } from "../../config/firebase";

function Home2() {
  const [home2Data, setHome2Data] = useState({
    heading: "",
    introduction: "",
    skills: "",
    hobbies: "",
    imageUrl: "",
  });

  const home2Ref = doc(db, "home", "home2"); // Reference to the home2 document

  // Fetch Home2 data from Firestore
  const fetchHome2Data = async () => {
    try {
      const docSnap = await getDoc(home2Ref);
      if (docSnap.exists()) {
        setHome2Data(docSnap.data()); // Set fetched data into the state
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching Home2 data: ", error);
    }
  };

  useEffect(() => {
    fetchHome2Data();
  }, []);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {home2Data.heading && `${home2Data.heading} `}
              <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              {home2Data.introduction && home2Data.introduction}
              <br />
              <br />
              {home2Data.skills && (
                <>
                  My skills include:{" "}
                  <i>
                    <b className="purple">{home2Data.skills}</b>
                  </i>
                  <br />
                  <br />
                </>
              )}
              {home2Data.skills2 && (
                <>
                  <i>
                    <b className="purple">{home2Data.skills2}</b>
                  </i>
                  <br />
                  <br />
                </>
              )}
              {home2Data.hobbies && (
                <>
                  In my free time, I enjoy:{" "}
                  <i>
                    <b className="purple">{home2Data.hobbies}</b>
                  </i>
                </>
              )}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={home2Data.imageUrl || "defaultImageUrl"} // Default image if none provided
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
