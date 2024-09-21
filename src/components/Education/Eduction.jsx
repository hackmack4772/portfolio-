import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faBook, faSchool } from '@fortawesome/free-solid-svg-icons';
import "./education.css"; // Import your custom CSS

const educationData = [
    {
        id: 1,
        title: "Master of Computer Application (MCA)",
        institution: "Swami Vivekanand Institute of Engineering & Technology, Rajpura, Punjab",
        year: "2023 - 2025",
        icon: faUserGraduate,
        score: "Expected Completion: July 2025",
        image: "https://images.collegedunia.com/public/college_data/images/campusimage/165245050801.00_05_46_42.Still008.jpg",
      },
  {
    id: 2,
    title: "Bachelors of Computer Application (BCA)",
    institution: "RIMT University, Mandi Gobindgarh, Punjab",
    year: "2019 - 2022",
    icon: faUserGraduate,
    score: "CGPA: 9.08",
    image: "https://rimt.ac.in/wp-content/uploads/2019/02/870x449-rimt-building.jpg",
  },
  {
    id: 3,
    title: "12th Standard",
    institution: "Government Higher Secondary School, Handwara",
    year: "2017 - 2018",
    icon: faBook,
    score: "Percentage: 80.4%",
    image: "https://content3.jdmagicbox.com/comp/kupwara/u6/9999p1955.1955.221122221134.x3u6/catalogue/govt-boys-higher-secondary-handwara-kupwara-secondary-schools-9d1de1o7ya.jpg",
  },
  {
    id: 4,
    title: "10th Standard",
    institution: "Government High School, Sanzipora",
    year: "2015 - 2016",
    icon: faSchool,
    score: "Percentage: 86.6%",
    image: "https://asianlite.uk/wp-content/uploads/2022/02/FKCFVQTaUAAPD55-1024x767.jpg",
  },
  {
    id: 5,
    title: "1st to 8th Standard",
    institution: "Army Goodwill School, Naugam",
    year: "2008 - 2015",
    icon: faSchool,
    image: "https://asianlite.uk/wp-content/uploads/2022/02/FKCFVQTaUAAPD55-1024x767.jpg",
  },

];

function Education() {
  const [activeCard, setActiveCard] = useState(1);

  const handleCardClick = (id) => {
    setActiveCard(id);
  };

  return (
    <section className="education" id="education">
      <div className="cards ms-5">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className={`education-card ${activeCard === edu.id ? "active" : ""}`}
            onClick={() => handleCardClick(edu.id)}
            style={{backgroundImage:``}}
          >edu.image !impotant
            <div className="label">{edu.id}</div>
            <div className="icon">
              <FontAwesomeIcon icon={edu.icon} />
            </div>
            <div className="info row justify-content-end">
              <div className="col-12 col-sm-6 col-lg-7 px-0">
                <h1>{edu.title}</h1>
                <h3>{edu.institution}</h3>
                <h5>{edu.year}</h5>
                <h5>{edu.score}</h5>
                <img src={edu.image} alt={`${edu.title} Image`} style={{ width: '100%', borderRadius: '10px' }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
