import React, { useEffect, useState } from "react";
import AOS from "aos";
import Loader from "../../../common/Loader";
import Header from "../../../common/Header";
import { Link } from "react-router-dom";
import SectionTwo from "../../Home/SectionTwo";
import project1 from "../../../assets/images/project1.jpg";
import project2 from "../../../assets/images/project2.jpg";
import project3 from "../../../assets/images/project3.jpeg";
import SingleServicesImg3 from "../../../assets/images/single-services-project-img3.jpg";
import SinglePortfolioImg1 from "../../../assets/images/single-portfolio-over-img1.jpg";
import SinglePortfolioImg2 from "../../../assets/images/single-portfolio-over-img2.jpg";
import SeoImplement from "../../../assets/images/seo-implemnts.jpg";
import EffectiveImg from "../../../assets/images/effective-img.jpg";
import DigitalMarketingImg from "../../../assets/images/digital-marketing-img.jpg";
import NewsImg2 from "../../../assets/images/news-img2.jpg";
import BrandsMarqueSection from "../../../common/BrandsMarqueSection";
import TextMarqueAboutSection from "../../About/TextMarqueAboutSection";
import Footer from "../../../common/Footer";
import ProgressCircle from "../../../common/ProgressCircle";
const portfolioPageTwo=[
  {
    id: 1,
    title: 'Culture Cart',
    description: 'Team Project - E-commerce platform connecting Indian artisans with diaspora.',
    image: project1,
    github: 'https://github.com/username/culture-cart',
    live: 'https://culturecart.com'
  },
  {
    id: 2,
    title: 'TripExpense Manager',
    description: 'Group Semester Project -Android app for managing trip expenses among friends.',
    image: project2,
    github: 'https://github.com/username/tripexpense',
    live: 'https://tripexpense.com'
  },
  {
    id: 3,
    title: 'Wanderlust ',
    description: 'Full-stack Airbnb clone built with MERN stack.',
    image: project3,
    github: 'https://github.com/username/wanderlust-airbnb',
    live: 'https://wanderlustclone.com'
  }
];
const PortfolioPageTwo = () => {
  return (
    <section className="projects">
     <Header/>
      <div className="container">
      <h1 className="ui-ux" data-aos="fade-down">
              My Projects !
            </h1>
        <span> ___ </span>
        <div className="project-grid">
          {portfolioPageTwo.map((project)=>(
            <div className="project-card" key={project.id}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SectionTwo /> 
        {/* <!-- ====================================== Footer ===================================== --> */}
        <Footer />
        {/* <!-- ====================================== Progress Scroll Bottom To Top ===================================== --> */}
        <ProgressCircle />
        {/* <!-- ====================================== Progress Scroll Bottom To Top End ===================================== --> */}
        </section>
        );
};
export default PortfolioPageTwo;
