import React, { useEffect } from "react";
import AOS from "aos";
import TrophyImg from "../../assets/images/trophy.png";

const SectionTwo = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      {/* <!-- ====================================== About Section Two ===================================== --> */}
      <section style={{backgroundColor:"white"}} className="about-section-two overflow-hidden">
        <div className="container">
          {/* <div
            className="award-circle-main aos-init aos-animate"
            data-aos="zoom-in"
          >
            <div className="award-circle">
              <img src={TrophyImg} alt="trophy" />
            </div>
            <div>
              <h2 className="independent">Independent Of The Year</h2>
              <p className="annual">Annual Awards 2025</p>
            </div>
          </div> */}
          {/* <h3 className="self-taught aos-init aos-animate" data-aos="fade-up">
            <span>I'm Mital Patil</span> - a self though & self learned designer{" "}
            <span>based in USA</span>. I stsarted as a financial planner & social
            media marketer, but now I do mix of everything from{" "}
            <span>Product Design, Photography, Web Design </span>&{" "}
            <span>Graphic Design.</span>
          </h3> */}
          <p style={{color:"#664343"}} className="odio aos-init aos-animate" data-aos="fade-up">
          Take pride in my achievements, including earning a 5-Star Gold Badge in C++ on HackerRank and building impactful projects like WanderLust (an Airbnb clone) and a Trip & Daily Expense Tracker mobile app. Currently, I am enhancing my problem-solving skills by delving into Data Structures and Algorithms (DSA) using Java.In the future, I aim to deepen my expertise in machine learning, seeking to merge these skills with web development to create innovative solutions.Beyond academics and technology, I am an artist at heart, sharing my sketches, paintings, and doodles through my YouTube channel and Instagram art account. These platforms reflect my creativity, discipline, and attention to detail—traits I bring to every project and collaboration.
          </p>
        </div>
      </section>
      {/* <!-- ====================================== About Section Two End ===================================== --> */}
    </>
  );
};
export default SectionTwo;
