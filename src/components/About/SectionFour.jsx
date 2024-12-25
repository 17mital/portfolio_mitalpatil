import React, { useEffect } from "react";
import AOS from "aos";
import WinnerAward1 from "../../assets/images/apancollege.png";
import WinnerAward2 from "../../assets/images/logo-coursera.png";
import WinnerAward3 from "../../assets/images/Great Learning_logo.png";
import WinnerAward4 from "../../assets/images/Great Learning_logo.png";

const SectionFour = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      {/* <!-- ====================================== About Section Four ===================================== --> */}
      <section className="section-awards overflow-hidden">
        <div className="container">
          <p className="our-services about-awards" data-aos="fade-up">
            Certification and Achievements
          </p>
          <h2 className="our-solution award-achievement" data-aos="fade-up">
            Workshops & Courses
          </h2>
          <div className="row awards-row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="box-item" data-aos="flip-up">
                <div className="flip-box">
                  <div className="flip-box-front">
                    <div className="inner">
                      <p className="award-yer">2024</p>
                      <img style={{width:"100px" , height:"100px"}}
                        className="winner-award"
                        src={WinnerAward1}
                        alt="winner-award4"
                      />
                      <p style={{fontSize:"20px"}} className="award-interior">Sigma-Full stack Web Devlopment</p>
                      <p className="award-winner-text">Certificate Of Completion</p>
                    </div>
                  </div>
                  <div className="flip-box-back">
                    <div className="inner">
                      <p className="flip-back-text">
                      Full Stack Web Development Comprehensive training in MERN stack under guidence of Shraddha Khapra mam and Aman Dhattarwal sir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="box-item" data-aos="flip-up">
                <div className="flip-box">
                  <div className="flip-box-front">
                    <div className="inner">
                      <p className="award-yer">2024</p>
                      <img style={{height:"80px"}}
                        className="winner-award"
                        src={WinnerAward2}
                        alt="winner-award2"
                      />
                      <p style={{fontSize:"20px"}} className="award-interior">Foundation of Project Management</p>
                      <p className="award-winner-text">Google</p>
                    </div>
                  </div>
                  <div className="flip-box-back">
                    <div className="inner">
                      <p className="flip-back-text">
                        It Eqquipped me with essential skills to manage project effectively and ensure successful project outcome !
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="box-item" data-aos="flip-up">
                <div className="flip-box">
                  <div className="flip-box-front">
                    <div className="inner">
                      <p className="award-yer">2023</p>
                      <img style={{height:"120px"}}
                        className="winner-award"
                        src={WinnerAward3}
                        alt="winner-award3"
                      />
                      <p style={{fontSize:"20px"}} className="award-interior">Python Programming</p>
                      <p className="award-winner-text">Certification of Completion</p>
                    </div>
                  </div>
                  <div className="flip-box-back">
                    <div className="inner">
                      <p className="flip-back-text">
                        Enhanced my understanding of Python Fundamentals, Problem solving and coding best practices!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="box-item" data-aos="flip-up">
                <div className="flip-box">
                  <div className="flip-box-front">
                    <div className="inner">
                      <p className="award-yer">2023</p>
                      <img style={{height:"120px"}}
                        className="winner-award"
                        src={WinnerAward4}
                        alt="winner-award4"
                      />
                      <p style={{fontSize:"20px"}} className="award-interior">C++ Programming</p>
                      <p className="award-winner-text">Certification of Completion</p>
                    </div>
                  </div>
                  <div className="flip-box-back">
                    <div className="inner">
                      <p className="flip-back-text">
                        Provides Comprehensive understanding of C++ fundamentals, including syntax , data structure , OOPS Concept!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== About Section Four End ===================================== --> */}
    </>
  );
};
export default SectionFour;
