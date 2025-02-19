import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { useLoading } from "../../LoadingContext";
import myImg from "../../Assets/avatar.jpeg";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const menuItems = [
  { icon: "fa fa-home", title: "Home", path: "/home" },
  { icon: "fa fa-graduation-cap", title: "Education", path: "/education" },
  { icon: "fa fa-info-circle", title: "About", path: "/about" },
  { icon: "fa fa-briefcase", title: "Projects", path: "/project" },
  { icon: "fa fa-file-text", title: "Resume", path: "/resume" },
  { icon: "fa fa-comments", title: "Testimonials", path: "/testimonials" },
  { icon: "fa fa-envelope", title: "Contact", path: "/contact" },
];

function Menu() {
  const { handleLoading } = useLoading();

  useEffect(() => {
    handleLoading();
  }, []);

  return (
    <div id="home">
      <div className="page-home">
        {/* <Navbar
      fixed="top"
      expand="md"
      className={ "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          Hack <span>mack</span>
        </Navbar.Brand>
  
      </Container>
    </Navbar> */}
        <div class="container">
          <div class="background-img">
          <p className="header-text">
  {"HackMack".split("").map((char, index) => (
    <span key={index} className="char" style={{ animationDelay: `${index * 0.1}s` }}>
      {char}
    </span>
  ))}
</p>
            <div class="box">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div class="content">
                <p>
                  <img src={myImg} className="img-fluid" alt="avatar" />
                  Aamir Saleem Lone
                </p>
              </div>
            </div>

            <h1>FIND ME ON</h1>
            <p>
              I’d love to <span className="purple">connect</span> with you!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  // href={personalData.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  // href={personalData.socialLinks.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  // href={personalData.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  // href={personalData.socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>

            <div className="col-xs-12 col-md-12 col-lg-12">
              <div className="page-title home text-center">
                <span className="heading-page"> </span>
                <p className="mt20"></p>
              </div>
              <div className="hexagon-menu clear">
                {menuItems.map((item, index) => (
                  <div className="hexagon-item" key={index}>
                    <div className="hex-item">
                      <div />
                      <div />
                      <div />
                    </div>
                    <div className="hex-item">
                      <div />
                      <div />
                      <div />
                    </div>
                    <Link to={item.path} className="hex-content">
                      <span className="hex-content-inner">
                        <span className="icon">
                          <i className={`fa ${item.icon}`} />
                        </span>
                        <span className="title">{item.title}</span>
                      </span>
                      <svg
                        viewBox="0 0 173.20508075688772 200"
                        height={190}
                        width={164}
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient id="cyberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: "#00FFFF", stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: "#FF00FF", stopOpacity: 1 }} />
                          </linearGradient>
                        </defs>
                        <path
                          d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                          fill="#1e2530"
                          stroke="url(#cyberGradient)"
                        />
                      </svg>
                    </Link>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="overlay" /> */}
      </div>
    </div>
  );
}

export default Menu;
