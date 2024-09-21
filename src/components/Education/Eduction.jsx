import React, { useState } from "react";
import "./education.css"; // Import your custom CSS

const educationData = [
    {
        id: 1,
        title: "Master of Computer Application (MCA)",
        institution: "Swami Vivekanand Institute of Engineering & Technology, Rajpura, Punjab",
        year: "2023 - 2025",
        icon: <svg width={50} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-graduate" class="svg-inline--fa fa-user-graduate " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9l0 57.1c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-57.1L48 93.3l0 65.1 15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9l-32 0c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4l0-71.8C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7L30.7 512C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z"></path></svg>,
        score: "Expected Completion: July 2025",
        image: "https://images.collegedunia.com/public/college_data/images/campusimage/165245050801.00_05_46_42.Still008.jpg",
    },
    {
        id: 2,
        title: "Bachelors of Computer Application (BCA)",
        institution: "RIMT University, Mandi Gobindgarh, Punjab",
        year: "2019 - 2022",
        icon: <svg width={50}  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-graduate" class="svg-inline--fa fa-user-graduate " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9l0 57.1c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-57.1L48 93.3l0 65.1 15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9l-32 0c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4l0-71.8C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7L30.7 512C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z"></path></svg>,
        score: "CGPA: 9.08",
        image: "https://image.slidesharecdn.com/rimtuniversityppt-190826071935/85/Introduction-to-RIMT-University-1-320.jpg",
    },
    {
        id: 3,
        title: "12th Standard",
        institution: "Government Higher Secondary School, Handwara",
        year: "2017 - 2018",
        icon: <svg width={50}  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book" class="svg-inline--fa fa-book " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path></svg>,
        score: "Percentage: 80.4%",
        image: "https://content3.jdmagicbox.com/comp/kupwara/u6/9999p1955.1955.221122221134.x3u6/catalogue/govt-boys-higher-secondary-handwara-kupwara-secondary-schools-9d1de1o7ya.jpg",
    },
    {
        id: 4,
        title: "10th Standard",
        institution: "Government High School, Sanzipora",
        year: "2015 - 2016",
        icon: <svg width={50}  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="school" class="svg-inline--fa fa-school " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96 48 96C21.5 96 0 117.5 0 144L0 464c0 26.5 21.5 48 48 48l208 0 0-96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 96 208 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L473.7 96 337.8 5.4zM96 192l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zM96 320l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-16c0-8.8-7.2-16-16-16z"></path></svg>,
        score: "Percentage: 86.6%",
        image: "https://asianlite.uk/wp-content/uploads/2022/02/FKCFVQTaUAAPD55-1024x767.jpg",
    },
    {
        id: 5,
        title: "1st to 8th Standard",
        institution: "Army Goodwill School, Naugam",
        year: "2008 - 2015",
        icon: <svg width={50}  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="school" class="svg-inline--fa fa-school " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96 48 96C21.5 96 0 117.5 0 144L0 464c0 26.5 21.5 48 48 48l208 0 0-96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 96 208 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L473.7 96 337.8 5.4zM96 192l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zM96 320l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-16c0-8.8-7.2-16-16-16z"></path></svg>,
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
                        style={{ backgroundImage: `url(${edu.image})`, backgroundSize: 'cover', borderRadius: '10px' }} // Added background image styling
                    >
                        <div className="label">{edu.id}</div>
                        <div className="icon">
                            {edu.icon} 
                        </div>
                        <div className="info row justify-content-end">
                            <div className="col-12 col-sm-6 col-lg-7 px-0">
                                <h1 className="title">{edu.title}</h1>
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
