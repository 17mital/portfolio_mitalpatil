import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import WordpressImg from "../../assets/images/java.png";
import ElementorImg from "../../assets/images/css.png";
import HtmlLogo from "../../assets/images/html-logo.png";
import JsLogo from "../../assets/images/js-logo.png";
import FigmaImg from "../../assets/images/Mern Stack.png";
import Diamond from "../../assets/images/c.png";
import PhotoShop from "../../assets/images/c++.png";
import IllustratorImg from "../../assets/images/python.png";

const SectionFour = () => {
  const [counted, setCounted] = useState(false);
  const countersRef = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 2000 });

    const handleScroll = () => {
      if (countersRef.current.length > 0) {
        const oTop = countersRef.current[0].offsetTop - window.innerHeight;
        if (!counted && window.scrollY > oTop) {
          countersRef.current.forEach((counter) => {
            const updateCount = () => {
              const target = +counter.getAttribute("data-count");
              const count = +counter.innerText;
              const speed = 200; // Change this value to adjust the speed
              const increment = target / speed;

              if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
              } else {
                counter.innerText = target;
              }
            };

            updateCount();
          });

          setCounted(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [counted]);
  return (
    <>
      {/* <!-- ====================================== Section Four ===================================== --> */}
      <section className="section-four overflow-hidden">
        <div className="container">
          <p className="our-services my_skills" data-aos="fade-up">
            MY SKILLS
          </p>
          <h2 className="our-solution my-expertise" data-aos="fade-down">
            My Expertise.
          </h2>
          <div className="skill-type-main">
            <div
              className="skills-box-main"
             
            >
              <img src={WordpressImg} alt="wordpress" />
                <h4> Java</h4>
            </div>
            <div
              className="skills-box-main"
            
            >
              <img src={ElementorImg} alt="elementor" />
                <h4>
                  CSS
                </h4>
            </div>
            <div
              className="skills-box-main"
             
            >
              <img src={HtmlLogo} alt="html-logo" />
              <h4>
                  Html
              </h4>
            </div>
            <div
              className="skills-box-main"
             
            >
              <img src={JsLogo} alt="js-logo" />
              <h4>
                  Javascript
              </h4>
            </div>
            <div
              className="skills-box-main"
              
            >
              <img style={{width:"65px",height:"65px"}} src={FigmaImg} alt="figma" />
              <h4>
                Mern Stack
              </h4>
            </div>
            <div
              className="skills-box-main"
             
            >
              <img src={Diamond} alt="diamond" />
              <h4>
                C
              </h4>
            </div>
            <div
              className="skills-box-main"
              
            >
              <img src={PhotoShop} alt="photoshop" />
              <h4>
                C++
              </h4>
            </div>
            <div
              className="skills-box-main"
             
            >
              <img src={IllustratorImg} alt="illustrator" />
              <h4>
                Python
              </h4>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Four End ===================================== --> */}
    </>
  );
};
export default SectionFour;
