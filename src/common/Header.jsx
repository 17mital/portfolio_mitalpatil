import React, { useEffect, useState } from "react";
// import BiogiLogo from "../assets/images/logomital.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import Resume from "../assets/Mital_Patil_Resumeall.pdf";

const Header = () => {
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
      {/* <!-- ====================================== Main Menu ===================================== --> */}
      <header
        id="top-navbar"
        className={`top-navbar ${isFixed ? "fixed" : ""}`}
      >
        <div className="container">
          <div className="top-navbar_full">
            <div className="back-btn">
              <Link style={{textDecoration:'none'}} to="/">
              <h3 style={{color:'#17153B'}}>Mital Patil</h3>
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
                {/* <li className="drop-svg dropdown dropdown-7">
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
                          <Link to="/single_services5">Sound Cloud Music</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>  */}
                <li className="drop-svg dropdown dropdown-7">
                  <NavLink to="/portfolio2" activeClassName="active">
                    Projects
                  </NavLink>
                  {/* <svg
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
                  </svg> */}
                  {/* <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                    <li className="dropdown-submenu">
                      <Link className="sub-menu-arrow-main" to="#">
                        Portfolio
                      </Link>
                      <ul className="dropdown-submenu-main id-portfolio">
                        {/* <li className="dropdown_item-submenu">
                          <Link to="/portfolio">Portfolio Default</Link>
                        </li> 
                        <li className="dropdown_item-submenu">
                          <Link to="/portfolio2">Portfolio Grid</Link>
                        </li>
                        {/* <li className="dropdown_item-submenu">
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
                          <Link to="/single_portfolio6">Sound Cloud Music</Link>
                        </li>
                      </ul>
                    </li> 
                  </ul> */}
                </li>
                {/* <li className="drop-svg dropdown dropdown-7">
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
                </li> */}
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
                            <div className="heading2">
                              <Link to="/portfolio2">Projects</Link>
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
                                  Shirpur 
                                  <br />
                                  Dist-Dhule , Maharashtra , India
                                </p>
                              </div>
                              <div className="item">
                                <p className="sub-title-address">Contact Us</p>
                                <p>
                                  <Link to="/mailto:biogi@mail.com">
                                    patilmital4@gmail.com
                                  </Link>
                                </p>
                                <p className="underline">
                                  <Link to="tel:+1451356888">
                                    +91 9699657433
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
                 {/* <!-- ====================================== Side Menu End===================================== -->  */}
              </div>
            </div>
          </div>
        </div>
      </header>
       {/* <!-- ====================================== Main Menu End===================================== -->  */}
    </>
  );
};
export default Header;
