import React, { useEffect, useRef } from "react";
import AOS from "aos";
import MediaLineTop from "../../assets/images/media-line-top.svg";
import MediaLineBottom from "../../assets/images/media-line-bottom.svg";
import PolygonArrow from "../../assets/images/Polygon-arrow.svg";
import GirlImg from "../../assets/images/mital.png";
import ArrowMain from "../../assets/images/arrow-main.png";
import ClientImg1 from "../../assets/images/clients-img1.jpg";
import ClientImg2 from "../../assets/images/clients-img2.jpg";
import ClientImg3 from "../../assets/images/clients-img3.jpg";
import ClientImg4 from "../../assets/images/clients-img4.jpg";
import FlowerImg from "../../assets/images/flower.png";
import { Link } from "react-router-dom";

const SectionOne = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const workedBoxRef = useRef(null);
  const JessicaBiogiMainRef = useRef(null);
  const arrowRef = useRef(null);
  const layerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const ivalueX = (e.pageX * -1) / 60;
      const ivalueY = (e.pageY * -1) / 60;
      const cvalueX = (e.pageX * -1) / 80;
      const cvalueY = (e.pageY * -1) / 90;

      if (workedBoxRef.current) {
        workedBoxRef.current.style.transform = `translate3d(${ivalueX}px, ${ivalueY}px, 0)`;
      }
      if (JessicaBiogiMainRef.current) {
        JessicaBiogiMainRef.current.style.transform = `translate3d(${cvalueX}px, ${cvalueY}px, 0)`;
      }
      if (arrowRef.current) {
        arrowRef.current.style.transform = `translate3d(${cvalueX}px, ${cvalueY}px, 0)`;
      }
    };

    const layer = layerRef.current;
    if (layer) {
      layer.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (layer) {
        layer.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);
  return (
    <>
      {/* <!-- ====================================== Section One ===================================== --> */}
      <section className="section-main overflow-hidden" id="main">
        <div className="section-main-sub position-relative">
          <div className="media-main">
            {/* <img src={MediaLineTop} alt="media-line-top" /> */}
            <div>
              <Link to="https://www.linkedin.com/in/mitalpatil/">
              <svg
  className="icon"
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 20 20"
  fill="none"
>
  <g clipPath="url(#clip0_37_120)">
    <path
      d="M4.5 3.33333C5.32843 3.33333 6 2.66176 6 1.83333C6 1.0049 5.32843 0.333328 4.5 0.333328C3.67157 0.333328 3 1.0049 3 1.83333C3 2.66176 3.67157 3.33333 4.5 3.33333Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6.33333H3V17H6V6.33333Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 6.33333H13V8.33333H13.0333C13.5467 7.36667 14.88 6.33333 16.5 6.33333C19.1333 6.33333 19.6667 8.1 19.6667 10.3V17H16.5V11.0333C16.5 9.93333 16.5 8.5 15.0333 8.5C13.5667 8.5 13.3333 9.73333 13.3333 10.8V17H10V6.33333Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </g>
  <defs>
    <clipPath id="clip0_37_120">
      <rect width="20" height="20" fill="white" />
    </clipPath>
  </defs>
</svg>


              </Link>
            </div>
            <div>
              <Link to="https://github.com/17mital">
              <svg
  className="icon"
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 20 20"
  fill="none"
>
  <g clipPath="url(#clip0_37_120)">
    <path
      d="M10 1.66667C5.39772 1.66667 1.66667 5.39772 1.66667 10C1.66667 13.616 4.05172 16.5826 7.2193 17.656C7.61563 17.7386 7.75 17.5043 7.75 17.3013C7.75 17.1193 7.74202 16.648 7.7386 16.048C5.28573 16.6267 4.79058 14.7427 4.79058 14.7427C4.44865 13.7733 4.0047 13.524 4.0047 13.524C3.3577 13.0733 4.05008 13.082 4.05008 13.082C4.76973 13.136 5.17508 13.876 5.17508 13.876C5.83765 15.0387 6.98472 14.7 7.40458 14.508C7.46602 14.066 7.6493 13.77 7.8523 13.5827C5.76373 13.386 3.58037 12.5827 3.58037 8.982C3.58037 7.93733 3.95008 7.05333 4.56272 6.37C4.46937 6.156 4.15808 5.18667 4.66208 3.88C4.66208 3.88 5.49608 3.63733 7.75 4.85667C8.50365 4.65333 9.30372 4.55333 10.1037 4.55267C10.9037 4.55333 11.7037 4.65333 12.4573 4.85667C14.7107 3.63733 15.5447 3.88 15.5447 3.88C16.0487 5.18667 15.7374 6.156 15.644 6.37C16.2567 7.05333 16.6264 7.93733 16.6264 8.982C16.6264 12.592 14.4377 13.386 12.3447 13.576C12.6387 13.8253 12.887 14.304 12.887 15.0707C12.887 16.1387 12.877 16.9627 12.877 17.3013C12.877 17.5043 13.0114 17.7386 13.4077 17.656C16.5753 16.5826 18.9604 13.616 18.9604 10C18.9604 5.39772 15.2293 1.66667 10 1.66667Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </g>
  <defs>
    <clipPath id="clip0_37_120">
      <rect width="20" height="20" fill="white" />
    </clipPath>
  </defs>
</svg>
              </Link>
            </div>
            <div>
              <Link to="https://www.hackerrank.com/profile/patilmital4">
              <svg
  className="icon"
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 20 20"
  fill="none"
>
  <g clipPath="url(#clip0_37_120)">
    <path
      d="M10 0L18 5V15L10 20L2 15V5L10 0Z"
      fill="white"
    />
    <path
      d="M7.5 6H9.16667V9.16667H10.8333V6H12.5V14H10.8333V10.8333H9.16667V14H7.5V6Z"
      fill="black"
    />
  </g>
  <defs>
    <clipPath id="clip0_37_120">
      <rect width="20" height="20" fill="white" />
    </clipPath>
  </defs>
</svg>
              </Link>
            </div>
            {/* <div>
              <Link to="https://www.behance.net">
              <svg
  className="icon"
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 20 20"
  fill="none"
>
  <g clip-path="url(#clip0_37_120)">
    <path
      d="M15 10C15 13.866 11.866 17 8 17C4.13401 17 1 13.866 1 10C1 6.13401 4.13401 3 8 3"
      stroke="white"
      stroke-width="1.5"
    />
    <path
      d="M13 3L9 7L10.5 8.5L15 4L13 3Z"
      fill="white"
    />
    <path
      d="M15 4L10.5 8.5"
      stroke="white"
      stroke-width="1.5"
    />
  </g>
  <defs>
    <clipPath id="clip0_37_120">
      <rect width="20" height="20" fill="white" />
    </clipPath>
  </defs>
</svg>

              </Link>
            </div> */}
            <div>
              <Link to="https://www.youtube.com/@Mital_Patil">
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_37_136)">
                    <path
                      d="M1.66666 6.66666C1.66666 5.78261 2.01785 4.93476 2.64297 4.30964C3.26809 3.68452 4.11593 3.33333 4.99999 3.33333H15C15.884 3.33333 16.7319 3.68452 17.357 4.30964C17.9821 4.93476 18.3333 5.78261 18.3333 6.66666V13.3333C18.3333 14.2174 17.9821 15.0652 17.357 15.6903C16.7319 16.3155 15.884 16.6667 15 16.6667H4.99999C4.11593 16.6667 3.26809 16.3155 2.64297 15.6903C2.01785 15.0652 1.66666 14.2174 1.66666 13.3333V6.66666Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.33334 7.5L12.5 10L8.33334 12.5V7.5Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_37_136">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
            {/* <img src={MediaLineBottom} alt="media-line-bottom" /> */}
          </div>
          <div className="container2 position-relative overflow-hidden">
            <p className="main-text" data-aos="fade-down">
             I am MERN Stack Devloper &
            </p>
            <h1>
              <mark>Tech </mark> Enthusiast.
            </h1>
            <div className="home-girl-img-main">
              <div className="position-relative" ref={layerRef}>
                {/* <div className="JessicaBiogi-main" data-aos="fade-down">
                  <div
                    className="position-relative"
                    id="JessicaBiogi_main"
                    ref={JessicaBiogiMainRef}
                  >
                    <img
                      className="JessicaBiogi-svg"
                      src={PolygonArrow}
                      alt="Polygon-arrow"
                    />
                    <p className="jessica-biogi">Mital Patil</p>
                  </div>
                </div> */}
                <img style={{height:"400px"}}
                  className="home-girl-img"
                  src={GirlImg}
                  alt="girl"
                  data-aos="fade-up"
                />
                <img style={{marginRight:"-250px", height:"80px"}}
                  className="arrow-main"
                  id="arrow"
                  src={ArrowMain}
                  alt="arrow-main"
                  ref={arrowRef}
                />
                <div  style={{marginLeft:"-120px"}} id="worked_box" ref={workedBoxRef}>
                  <div className="worked-box" data-aos="fade-right">
                    <p style={{fontSize:"17px" ,color:"black" }} className="worked-more">Hello! I’m Mital 3rd year Computer Engineering Student . Aspiring Software Engineer and MERN Stack Web Developer Intrest in emerging new technologies .</p>
                    {/* <div className="client-img-main position-relative">
                      <img
                        className="client-img client-img1"
                        src={ClientImg1}
                        alt="clients-img1"
                      />
                      <img
                        className="client-img client-img2"
                        src={ClientImg2}
                        alt="clients-img2"
                      />
                      <img
                        className="client-img client-img3"
                        src={ClientImg3}
                        alt="clients-img3"
                      />
                      <img
                        className="client-img client-img4"
                        src={ClientImg4}
                        alt="clients-img4"
                      />
                      <p className="worked-more worked-more2">100+ Clients</p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="section-main-right-contain overflow-hidden">
            <div
              className="section-main-right-contain-sub"
              data-aos="fade-left"
            >
              <h2 className="total-project">700+</h2>
              <p className="project-complted">PROJECT COMPLETED</p>
            </div>
            <div className="flower-box" data-aos="fade-left">
              <img className="flower" src={FlowerImg} alt="flower" />
              <h2 className="Freelance">
                A <span>Freelance Designer and Developer based in USA.</span> I
                strives to build immersive and beautiful web applications
                through carefully crafted used-centric design.
              </h2>
            </div>
            <div className="mouse-scroll-box">
              <Link to="#section-two" className="mouse-main">
                <div className="mouse">
                  <svg
                    className="mouse-arrow-down"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="40"
                    viewBox="0 0 24 40"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_37_162)">
                      <path
                        d="M12 5L12 35"
                        stroke="#FFDB59"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 31L12 35"
                        stroke="#FFDB59"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 31L12 35"
                        stroke="#FFDB59"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_37_162">
                        <rect width="24" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h2 className="scroll-down">SCROLL DOWN</h2>
              </Link>
            </div>
          </div> */}
        </div>
      </section>
      {/* <!-- ====================================== Section One End ===================================== --> */}
    </>
  );
};
export default SectionOne;
