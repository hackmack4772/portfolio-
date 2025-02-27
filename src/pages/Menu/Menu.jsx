import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./menu.css";
import { useLoading } from "../../Context/LoadingContext";
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
      <div className="page-menu">
        <div className="container">
          <div className="background-img">
            <p className="header-text">
              {"HackMack".split("").map((char, index) => (
                <span key={index} className={`char ${index>3 &&"header-other-part"}`} >
                  {char}
                </span>
              ))}
            </p>
            <div className="box">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div className="content">
                <p>
                  <img src={myImg} className="img-fluid" alt="avatar" />
                  <h5>Aamir Saleem Lone</h5>
                  <p  className="job-profile">MERN Stack Developer</p>
                </p>
              </div>
            </div>

            <h1 className="purple">FIND ME ON</h1>
            <p>
              I’d love to <span className="purple">connect</span> with you!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hackmack4772"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub color="#8f10b7" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/hackmack4772"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter color="#8f10b7" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aamir-saleem-lone/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn color="#8f10b7" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/aamir-saleem-lone"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram color="#8f10b7" />
                </a>
              </li>
            </ul>

            <div className="col-xs-12 col-md-12 col-lg-12">
              <div className="page-title menu text-center">
                <span className="heading-page"> </span>
                <p className="mt20"></p>
              </div>
              <div className="hexagon-menu clear">
                {menuItems.map((item, index) => {
                  const ParentTag = item.title === "Home" ? "a" : Link;
                  return (
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
                      <ParentTag
                        to={item.title !== "Home" ? item.path : undefined}
                        href={item.title === "Home" ? item.path : undefined}
                        className="hex-content"
                      >
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className={`fa ${item.icon}`} />
                          </span>
                          <span className="title">{item.title}</span>
                        </span>
                        <svg
                          viewBox="0 0 173.20508075688772 200"
                          // height={190}
                          // width={164}
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
                      </ParentTag>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
