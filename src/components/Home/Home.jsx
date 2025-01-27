import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import ContactForm from "./ContactForm";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Lottie from "react-lottie";
import animationData from "./l.json";
import VisitorCounter from "../VisitorCounter";
import { doc, getDoc } from "firebase/firestore"; // Firestore methods
import { db } from "../../config/firebase";
import { useLoading } from "../../LoadingContext";

function Home() {
  const [personalData, setPersonalData] = useState({
    name: "",
    description: "",
    tagline: "",
    socialLinks: {
      github: "",
      twitter: "",
      linkedin: "",
      instagram: "",
    },
  });

  const homeRef = doc(db, "home", "homeData"); // Reference to specific document in Firestore
  const { handleLoading } = useLoading();

  // Fetch personal data from Firestore
  const fetchHomeData = async () => {
    try {
      const docSnap = await getDoc(homeRef);

      if (docSnap.exists()) {
        setPersonalData(docSnap.data()); // Set fetched data into the state
      } else {
        console.log("No such document!");
      }
      handleLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchHomeData();
  }, []);

  const animationOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> {personalData.name}</strong>
              </h1>

              {/* <p>{personalData.description}</p>
              <h3>{personalData.tagline}</h3> */}

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type typewriterStrings={personalData.typewriterStrings} />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Lottie options={animationOptions1} className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />
      <Container fluid className="contact_us">
        <ContactForm />
        <Row>
          <Col md={11} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              I’d love to <span className="purple">connect</span> with you!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={personalData.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={personalData.socialLinks.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={personalData.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={personalData.socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
