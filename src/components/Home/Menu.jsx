import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

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
    return (
        <div className="home-section d-flex align-items-center justify-content-center" id="home">
            <div className="page-home">
                {/* <div className="overlay" /> */}
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                            <div className="page-title home text-center">
                                <span className="heading-page"> </span>
                                <p className="mt20"></p>
                            </div>
                            <div className="hexagon-menu clear">
                                {menuItems.map((item, index) => (
                                    <div className="hexagon-item ml-2 mb-5" key={index}>
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
                                                height={200}
                                                width={174}
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                                                    fill="#1e2530"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
