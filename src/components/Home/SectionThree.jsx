import React, { useEffect, useState } from "react";
import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";
import { Link } from "react-router-dom";

const SectionThree = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleAccordionClick = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Web Development Mern stack",
      // content:
      //   "Project systematization is something I place a lot of emphasis on my passion Design Systems.",
      listItems: [
        "Web Interface Design",
        "Real life and Clone projects ",
        "Apna college Sigma batch certified for web development",
        "Offered MERN stack Teaching Assitant Internship",
      ],
    },
    {
      title: "Java DSA",
      // content:
      //   "Project systematization is something I place a lot of emphasis on. My passion Design Systems.",
      listItems: [
        "Problem Solving",
        "Currently learning through Apna College sigma Batch",
        
      ],
    },
    {
      title: "Python with Machine Learning",
      // content:
      //   "Project systematization is something I place a lot of emphasis on my passion Design Systems.",
      listItems: [
        "Self Thought Through youtube ",
        "Getting Direction of ML through Workshop from iit bombay sposerd by Amazon",
        "Focus on Integration with web project",
        "Python Intermediate Certified",
      ],
    },
    {
      title: "Mobile App Devlopment",
      // content:
      //   "Project systematization is something I place a lot of emphasis on. My passion Design Systems.",
      listItems: [
        "Intrest in Interface Design of mobile app",
        "Learn this Skill from College under Gudence of Professor",
        "Currently working on Project ",
        "Trip and Daily Expense Manager App as semester Project",
      ],
    },
  ];

  return (
    <>
      {/* <!-- ====================================== Section Three ===================================== --> */}
      <section className="section-three overflow-hidden">
        <div className="container">
          <div className="row services-section">
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <p className="our-services" data-aos="fade-up">
                My Works
              </p>
              <h2  className="our-solution" data-aos="fade-up">
                Lets Connect !
              </h2>
              <p className="uran odio" data-aos="fade-up">
              If you are looking for someone who is proactive, goal-oriented, and eager to contribute
              </p>
              <div className="services-circle-main">
                <div
                  className="view-work-circle btn btn1"
                  id="circle1"
                  data-aos="zoom-in-right"
                >
                  <Link to="/portfolio2" className="a1">
                    VIEW MY WORK
                  </Link>
                </div>
                <div className="contact-circle" data-aos="zoom-in-left">
                  <div className="view-work-circle btn btn2">
                    <Link to="/contact">CONTACT ME</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7">
              <div id="faq-sec">
                {accordionData.map((item, index) => (
                  <div
                    className="nested-accordion"
                    data-aos="fade-up"
                    key={index}
                  >
                    <h3
                      className={`boder-top ${
                        selectedIndex === index ? "selected" : ""
                      }`}
                      onClick={() => handleAccordionClick(index)}
                    >
                      {item.title}
                    </h3>
                    <div
                      className="comment"
                      style={{
                        display: selectedIndex === index ? "block" : "none",
                      }}
                    >
                      {item.content}
                      <ul className="accor-list">
                        {item.listItems.map((listItem, idx) => (
                          <li key={idx}>{listItem}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Three End===================================== --> */}
      {/* <!-- ====================================== User Branding Marquee Section ===================================== --> */}
      {/* <div className="header_full_sec overflow-hidden">
        <div className="logos">
          <div className="logos-slide">
            <div className="ticker__item">User Interface</div>
            <div className="ticker__item ticker__item_dark">
              User Experience
            </div>
            <div className="ticker__item">Branding</div>
            <div className="ticker__item ticker__item_dark">Marketing</div>
            <div className="ticker__item">User Interface</div>
            <div className="ticker__item ticker__item_dark">
              User Experience
            </div>
            <div className="ticker__item">Branding</div>
            <div className="ticker__item ticker__item_dark">Marketing</div>
            <div className="ticker__item">User Interface</div>
            <div className="ticker__item ticker__item_dark">
              User Experience
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- ====================================== User Branding Marquee Section End ===================================== --> */}
    </>
  );
};
export default SectionThree;
