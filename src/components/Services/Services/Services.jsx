import React, { useEffect, useState } from "react";
import AOS from "aos";
import { Link, useLocation, NavLink } from "react-router-dom";
import BiogiLogo from "../../../assets/images/logo.svg";
import Resume from "../../../assets/pdf/mital_resume.pdf";
import Loader from "../../../common/Loader";
import SectionOne from "../SectionOne";
import BrandsMarqueSection from "../../../common/BrandsMarqueSection";
import SectionTwo from "../SectionTwo";
import MarqueSection from "../../../common/MarqueSection";
import SectionThree from "../SectionThree";
import TextMarqueAboutSection from "../../About/TextMarqueAboutSection";
import Footer from "../../../common/Footer";
import GalleryImg1 from "../../../assets/images/gallery/gallery-img1.jpg";
import GalleryImg2 from "../../../assets/images/gallery/gallery-img2.jpg";
import GalleryImg3 from "../../../assets/images/gallery/gallery-img3.jpg";
import GalleryImg4 from "../../../assets/images/gallery/gallery-img4.jpg";
import GalleryImg5 from "../../../assets/images/gallery/gallery-img5.jpg";
import GalleryImg6 from "../../../assets/images/gallery/gallery-img6.jpg";
import GalleryImg7 from "../../../assets/images/gallery/gallery-img7.jpg";
import GalleryImg8 from "../../../assets/images/gallery/gallery-img8.jpg";
import ProgressCircle from "../../../common/ProgressCircle";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const location = useLocation();
  const [activeItem, setActiveItem] = useState("/");
  const [isFixed, setIsFixed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [subActiveIndex, setSubActiveIndex] = useState(null);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  const isActive = (path) => (activeItem === path ? "menu-active" : "");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 20) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    setSubActiveIndex(null); // Reset sub menu when main menu is toggled
  };

  const toggleSubAccordion = (index) => {
    setSubActiveIndex(subActiveIndex === index ? null : index);
  };
  return (
    <>
      <Loader />
      <div className="site_contain">
        {/* <!-- ====================================== Header Menu ===================================== --> */}
        <header
          id="top-navbar"
          className={`top-navbar ${isFixed ? "fixed" : ""}`}
        >
          <div className="container">
            <div className="top-navbar_full">
              <div className="back-btn">
                <Link to="/">
                  <img src={BiogiLogo} alt="logo" />
                </Link>
              </div>
              <div className="hell">
                <ul className="top-navbar-title">
                  <li>
                    <NavLink to="/" activeClassName="active">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" activeClassName="active">
                      About
                    </NavLink>
                  </li>
                  <li className="drop-svg dropdown dropdown-7 services-active">
                    <NavLink to="/services" activeClassName="active">
                      Services
                    </NavLink>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_25_56)">
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                    <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                      <li className="dropdown-submenu">
                        <Link className="sub-menu-arrow-main" to="#">
                          Services
                        </Link>
                        <ul className="dropdown-submenu-main id-portfolio">
                          <li className="dropdown_item-submenu">
                            <Link to="/services">Services Default</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/services2">Services Row</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/services3">Services 3 Grid</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/services4">Services 2 Grid</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/services5">FullScreen</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <Link className="sub-menu-arrow-main" to="#">
                          Single Services
                        </Link>
                        <ul className="dropdown-submenu-main id-single-portfolio">
                          <li className="dropdown_item-submenu">
                            <Link to="/single_services">Standard</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/single_services2">Youtube Video</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/single_services3">Vimeo Video</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/single_services4">Gallery Slider</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/single_services5">
                              Sound Cloud Music
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="drop-svg dropdown dropdown-7">
                    <NavLink to="/portfolio" activeClassName="active">
                      Portfolio
                    </NavLink>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_25_56)">
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                    <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                      <li className="dropdown-submenu">
                        <Link className="sub-menu-arrow-main" to="#">
                          Portfolio
                        </Link>
                        <ul className="dropdown-submenu-main id-portfolio">
                          <li className="dropdown_item-submenu">
                            <Link to="/portfolio">Portfolio Default</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/portfolio2">Portfolio Grid</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/portfolio3">Portfolio Split</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/portfolio4">Portfolio Split Video</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/portfolio5">Portfolio Split Slider</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/portfolio6">Portfolio Full Screen</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/portfolio7">Split Gallery</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/portfolio8">Grid Gallery</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/portfolio9">FullScreen Gallery</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <Link className="sub-menu-arrow-main" to="#">
                          Single Portfolio
                        </Link>
                        <ul className="dropdown-submenu-main id-single-portfolio">
                          <li className="dropdown_item-submenu">
                            <Link to="/single_portfolio">Standard</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/single_portfolio2">Portfolio V.2</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/single_portfolio3">Youtube Video</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/single_portfolio4">Vimeo Video</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/single_portfolio5">Gallery Slider</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/single_portfolio6">
                              Sound Cloud Music
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="drop-svg dropdown dropdown-7">
                    <NavLink to="/blog" activeClassName="active">
                      Blog
                    </NavLink>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_25_56)">
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                    <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                      <li className="dropdown-submenu">
                        <Link className="sub-menu-arrow-main" to="#">
                          Blog
                        </Link>
                        <ul className="dropdown-submenu-main id-portfolio">
                          <li className="dropdown_item-submenu">
                            <Link to="/blog">Blog Default</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/blog2">Blog 2 Grid</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/blog3">Blog 3 Grid</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/blog4">Blog Right Sidebar</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/blog5">Blog Left Sidebar</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/blog6">Blog Fullwidth</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/blog7">Blog list</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/blog8">Compact Metro</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <Link className="sub-menu-arrow-main" to="#">
                          Single Blog
                        </Link>
                        <ul className="dropdown-submenu-main id-single-portfolio">
                          <li className="dropdown_item-submenu">
                            <Link to="/single_blog">Standard</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/single_blog2">Single Blog V.2</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/single_blog3">Youtube Video</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/single_blog4">Vimeo Video</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/single_blog5">Gallery Slider</Link>
                          </li>
                          <li className="dropdown_item-submenu">
                            <Link to="/single_blog6">Sound Cloud Music</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/contact">
                      {" "}
                      <NavLink to="/contact" activeClassName="active">
                        Contact
                      </NavLink>
                    </Link>
                  </li>
                </ul>
                <Link to={Resume} rel="noreferrer" target="_blank">
                  <div className="cv-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_25_74)">
                        <path
                          d="M12 3V15"
                          stroke="#0F141C"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 11L12 15L8 11"
                          stroke="#0F141C"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21C14.3869 21 16.6761 20.0518 18.364 18.364C20.0518 16.6761 21 14.3869 21 12"
                          stroke="#0F141C"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </div>
                </Link>
                <div className="outer-menu">
                  <input
                    className="checkbox-toggle"
                    type="checkbox"
                    name="checkbox"
                  />
                  <div className="hamburger">
                    <div></div>
                  </div>
                  {/* <!-- ====================================== Side Menu ===================================== --> */}
                  <div className="menu">
                    <div>
                      <nav>
                        <div className="container">
                          <div className="row sidemenu-main">
                            <div className="col-lg-2">
                              <div className="menu-text">
                                <div className="side-menu-text">
                                  <p>MENU</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-7 side-menu-scroll">
                              <div className="heading2">
                                <Link to="/">Home</Link>
                              </div>
                              <div className="heading2">
                                <Link to="/about">About</Link>
                              </div>
                              <div className="accordion">
                                <div
                                  className={`heading2 heading ${
                                    activeIndex === 0 ? "active" : ""
                                  }`}
                                  onClick={() => toggleAccordion(0)}
                                >
                                  Portfolio
                                </div>
                                <div
                                  className={`contents ${
                                    activeIndex === 0 ? "show" : ""
                                  }`}
                                >
                                  <ul>
                                    <li>
                                      <Link to="/portfolio">
                                        Portfolio Default
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/portfolio2">
                                        Portfolio Grid
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/portfolio3">
                                        Portfolio Split
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/portfolio4">
                                        Portfolio Split Video
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/portfolio5">
                                        Portfolio Split Slider
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/portfolio6">
                                        Portfolio Full Screen
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/portfolio7">
                                        Split Gallery
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/portfolio8">Grid Gallery</Link>
                                    </li>
                                    <li>
                                      <Link to="/portfolio9">
                                        Full Screen Gallery
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className={`heading2 heading ${
                                    activeIndex === 1 ? "active" : ""
                                  }`}
                                  onClick={() => toggleAccordion(1)}
                                >
                                  Single Portfolio
                                </div>
                                <div
                                  className={`contents ${
                                    activeIndex === 1 ? "show" : ""
                                  }`}
                                >
                                  <ul>
                                    <li>
                                      <Link to="/single_portfolio">
                                        Standard
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/single_portfolio2">
                                        Portfolio V.2
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/single_portfolio3">
                                        Youtube Video
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/single_portfolio4">
                                        Vimeo Video
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/single_portfolio5">
                                        Gallery Slider
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/single_portfolio6">
                                        Sound Cloud Music
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className={`heading2 heading ${
                                    activeIndex === 2 ? "active" : ""
                                  }`}
                                  onClick={() => toggleAccordion(2)}
                                >
                                  Services
                                </div>
                                <div
                                  className={`contents ${
                                    activeIndex === 2 ? "show" : ""
                                  }`}
                                >
                                  <ul>
                                    <li>
                                      <Link to="/services">
                                        Services Default
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/services2">Services Row</Link>
                                    </li>
                                    <li>
                                      <Link to="/services3">
                                        Services 3 Grid
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/services4">
                                        Services 2 Grid
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/services5">FullScreen</Link>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className={`heading2 heading ${
                                    activeIndex === 3 ? "active" : ""
                                  }`}
                                  onClick={() => toggleAccordion(3)}
                                >
                                  Single Services
                                </div>
                                <div
                                  className={`contents ${
                                    activeIndex === 3 ? "show" : ""
                                  }`}
                                >
                                  <ul>
                                    <li>
                                      <Link to="/single_services">
                                        Standard
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/single_services2">
                                        Youtube Video
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/single_services3">
                                        Vimeo Video
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/single_services4">
                                        Gallery Slider
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/single_services5">
                                        Sound Cloud Music
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className={`heading2 heading ${
                                    activeIndex === 4 ? "active" : ""
                                  }`}
                                  onClick={() => toggleAccordion(4)}
                                >
                                  Blog
                                </div>
                                <div
                                  className={`contents ${
                                    activeIndex === 4 ? "show" : ""
                                  }`}
                                >
                                  <ul>
                                    <li>
                                      <Link to="/blog">Blog Default</Link>
                                    </li>
                                    <li>
                                      <Link to="/blog2">Blog 2 Grid</Link>
                                    </li>
                                    <li>
                                      <Link to="/blog3">Blog 3 Grid</Link>
                                    </li>
                                    <li>
                                      <Link to="/blog4">
                                        Blog Right Sidebar
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/blog5">Blog Left Sidebar</Link>
                                    </li>
                                    <li>
                                      <Link to="/blog6">Blog Fullwidth</Link>
                                    </li>
                                    <li>
                                      <Link to="/blog7">Blog list</Link>
                                    </li>
                                    <li>
                                      <Link to="/blog8">Compact Metro</Link>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className={`heading2 heading ${
                                    activeIndex === 5 ? "active" : ""
                                  }`}
                                  onClick={() => toggleAccordion(5)}
                                >
                                  Single Blog
                                </div>
                                <div
                                  className={`contents ${
                                    activeIndex === 5 ? "show" : ""
                                  }`}
                                >
                                  <ul>
                                    <li>
                                      <Link to="/single_blog">Standard</Link>
                                    </li>
                                    <li>
                                      <Link to="/single_blog2">
                                        Single Blog V.2
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/single_blog3">
                                        Youtube Video
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/single_blog4">
                                        Vimeo Video
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/single_blog5">
                                        Gallery Slider
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/single_blog6">
                                        Sound Cloud Music
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="heading2">
                                <Link to="/contact">Contact</Link>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="cont-info">
                                <div className="item">
                                  <p className="sub-title-address">Address</p>
                                  <p className="geek-alto">
                                    121 Parkview St.
                                    <br />
                                    California, USA
                                  </p>
                                </div>
                                <div className="item">
                                  <p className="sub-title-address">
                                    Contact Us
                                  </p>
                                  <p>
                                    <Link to="/mailto:biogi@mail.com">
                                      biogi@mail.com
                                    </Link>
                                  </p>
                                  <p className="underline">
                                    <Link to="tel:+1451356888">
                                      +1 451 356 888
                                    </Link>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </nav>
                    </div>
                  </div>
                  {/* <!-- ====================================== Side Menu End===================================== --> */}
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <!-- ====================================== Header Menu End===================================== --> */}
        {/* <!-- ====================================== Services Section One ===================================== --> */}
        <SectionOne />
        {/* <!-- ====================================== Services Section One End ===================================== --> */}
        {/* <!-- ====================================== Brands Marquee Section Start ===================================== --> */}
        <BrandsMarqueSection />
        {/* <!-- ====================================== Brands Marquee Section End ===================================== --> */}
        {/* <!-- ====================================== Services Section Two ===================================== --> */}
        <SectionTwo />
        {/* <!-- ====================================== Services Section Two End ===================================== --> */}
        {/* <!-- ====================================== User Branding Marquee Section ===================================== --> */}
        <MarqueSection />
        {/* <!-- ====================================== User Branding Marquee Section ===================================== --> */}
        {/* <!-- ====================================== Section Three Start===================================== --> */}
        <SectionThree />
        {/* <!-- ====================================== Section Three End===================================== --> */}
        {/* <!-- ====================================== text Marquee Section Start ===================================== --> */}
        <TextMarqueAboutSection />
        {/* <!-- ====================================== text Marquee Section End ===================================== --> */}
        {/* <!-- ====================================== Footer ===================================== --> */}
        <Footer />
        {/* <!-- ====================================== Progress Scroll Bottom To Top ===================================== --> */}
        <ProgressCircle />
        {/* <!-- ====================================== Progress Scroll Bottom To Top End ===================================== --> */}
        {/* <!-- ======================================= gallery ================================== --> */}
        <div id="popup2" className="popup-container popup-style-2">
          <div className="popup-content">
            <Link to="#pop" className="close">
              &times;
            </Link>
            <main className="main">
              <h2 className="mobile_app">Mobile App for Car Rental</h2>
              <div className="container">
                <div className="card">
                  <div className="card-image">
                    <Link
                      to={GalleryImg1}
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                    >
                      <img src={GalleryImg1} alt="gallery-img1" />
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <Link
                      to={GalleryImg2}
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                    >
                      <img src={GalleryImg2} alt="gallery-img2" />
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <Link
                      to={GalleryImg3}
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                    >
                      <img src={GalleryImg3} alt="gallery-img3" />
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <Link
                      to={GalleryImg4}
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                    >
                      <img src={GalleryImg4} alt="gallery-img4" />
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <Link
                      to={GalleryImg5}
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                    >
                      <img src={GalleryImg5} alt="gallery-img5" />
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <Link
                      to={GalleryImg6}
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                    >
                      <img src={GalleryImg6} alt="gallery-img6" />
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <Link
                      to={GalleryImg7}
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                    >
                      <img src={GalleryImg7} alt="gallery-img7" />
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <Link
                      to={GalleryImg8}
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                    >
                      <img src={GalleryImg8} alt="gallery-img8" />
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <Link
                      to={GalleryImg3}
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                    >
                      <img src={GalleryImg3} alt="gallery-img3" />
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
