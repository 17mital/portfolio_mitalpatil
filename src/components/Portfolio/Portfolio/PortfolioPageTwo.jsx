import React from "react"; 
import AOS from "aos";
import Loader from "../../../common/Loader";
import Header from "../../../common/Header";
import { Link } from "react-router-dom";
import SectionTwo from "../../Home/SectionTwo";
import project1 from "../../../assets/images/project1.jpg";
import project2 from "../../../assets/images/project2.jpg";
import project3 from "../../../assets/images/project3.jpeg";
import project4 from "../../../assets/images/project4.jpg";
import project5 from "../../../assets/images/project5.jpg";
import project6 from "../../../assets/images/project6.jpg";
import project7 from "../../../assets/images/project7.jpg";
import project8 from "../../../assets/images/project8.jpg";
import project9 from "../../../assets/images/project9.jpg";
import project10 from "../../../assets/images/project10.jpg";
import project11 from "../../../assets/images/project11.jpg";
import project12 from "../../../assets/images/project12.jpg";
import project13 from "../../../assets/images/project13.jpg";

import Footer from "../../../common/Footer";
import ProgressCircle from "../../../common/ProgressCircle";

const portfolioPageTwo = [
  {
    id: 1,
    title: "Culture Cart",
    description: "E-commerce platform connecting Indian artisans with diaspora.",
    image: project1,
    github: "https://github.com/username/culture-cart",
    live: "https://culturecart.com",
  },
  {
    id: 2,
    title: "TripExpense Manager",
    description: "Android app for managing trip expenses among friends.",
    image: project2,
    github: "https://github.com/username/tripexpense",
    live: "https://tripexpense.com",
  },
  {
    id: 3,
    title: "Wanderlust",
    description: "Full-stack Airbnb clone built with MERN stack.",
    image: project3,
    github: "https://github.com/17mital/Wanderlust",
    live: "https://sigma-project-bkyd.onrender.com/listings",
  },
  {
    id: 4,
    title: "Financial Advertisement Extractor",
    description: "OCR + LLaMA pipeline for extracting & classifying financial ads from newspapers.",
    image: project4,
    github: "https://github.com/mitalpatil/Finnacial_Advertisement_Extractor",
    live: "#",
  },
  {
    id: 5,
    title: "Medicare AI – Patient Onboarding & Diagnostics",
    description: "AI healthcare platform with FastAPI, OCR, MongoDB & LLM-based recommendations.",
    image: project5,
    github: "https://github.com/17mital/Medicare_Ai",
    live: "#",
  },
  {
    id: 6,
    title: "StyleHub E-commerce Website – 2025",
    description: "MERN-based e-commerce with role login, Razorpay, dashboards & AI chatbot.",
    image: project6,
    github: "https://github.com/17mital/E_commerce",
    live: "https://e-commerce-l5kq.vercel.app/",
  },
  {
    id: 7,
    title: "Samsung Support Chatbot",
    description: "Multilingual RAG chatbot with SST/TTS, GROC API & React frontend.",
    image: project7,
    github: "https://github.com/17mital/samsung-chatbot-support",
    live: "https://samsung-chatbot-support.vercel.app/",
  },
  {
    id: 8,
    title: "Healthcare Chatbot (RAG + OpenAI)",
    description: "Healthcare-focused chatbot using LangChain, OpenAI & Streamlit.",
    image: project8,
    github: "https://github.com/17mital/healthcare_chatbot",
    live: "#",
  },
  {
    id: 9,
    title: "Career Advisor Chatbot",
    description: "Flask + Firebase chatbot with Google login & NLP career guidance.",
    image: project9,
    github: "https://github.com/17mital/career-advisor-chatbot",
    live: "https://career-advisor-chatbot-omega.vercel.app/",
  },
  {
    id: 10,
    title: "AR/VR Mental Health App (Happiness Unlimited)",
    description: "Unity + MediaPipe app with AI-based mood analysis & gamified exercises.",
    image: project10,
    github: "https://github.com/17mital/Mental_Health_ARVR_App",
    live: "#",
  },
  {
    id: 11,
    title: "Smart Campus Navigator",
    description: "React + Leaflet + Dijkstra ML-enhanced campus navigation system.",
    image: project11,
    github: "https://github.com/17mital/Smart_campus_navigation",
    live: "#",
  },
  {
    id: 12,
    title: "Portfolio Website",
    description: "React-based personal portfolio showcasing skills & projects.",
    image: project12,
    github: "https://github.com/17mital/portfolio_mitalpatil",
    live: "https://portfolio-mitalpatil.vercel.app/",
  },
];

const PortfolioPageTwo = () => {
  return (
    <section className="projects">
      <Header />
      <div className="container">
        <h1 className="ui-ux" data-aos="fade-down">
          My Projects !
        </h1>
        <span> ___ </span>
        <div className="project-grid">
          {portfolioPageTwo.map((project) => (
            <div className="project-card" key={project.id}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SectionTwo />
      <Footer />
      <ProgressCircle />
    </section>
  );
};

export default PortfolioPageTwo;
