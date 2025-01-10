import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpeg";
import Tilt from "react-parallax-tilt";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi there! I'm <span className="purple">Aamir Saleem Lone</span>,
              a passionate and driven developer hailing from the picturesque
              region of Jammu and Kashmir, India. With a keen interest in
              crafting innovative solutions, I specialize in&nbsp;
              <i>
                <b className="purple"> MERN Stack and Laravel development.</b>
              </i>
              <br />
              <br />
              My journey in tech has equipped me with strong skills in core languages like
              <i>
                <b className="purple"> JavaScript, C++, and PHP.</b>
              </i>
              <br />
              <br />
              I thrive on building dynamic and responsive web applications that deliver seamless user experiences. 
              My enthusiasm for&nbsp;
              <i>
                <b className="purple"> modern web technologies</b>
              </i>
              &nbsp; drives me to continuously explore and master frameworks like&nbsp;
              <i>
                <b className="purple"> React.js and Next.js.</b>
              </i>
              <br />
              <br />
              Beyond coding, I enjoy immersing myself in music, indulging in captivating movies, and hitting the volleyball court. 
              Let's connect and collaborate on exciting projects!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
    
      </Container>
    </Container>
  );
}

export default Home2;
