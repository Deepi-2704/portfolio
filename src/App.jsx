import React, { useEffect, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
import {
  Mail,
  Linkedin,
  Github,
  Layers,
  ListOrdered,
  Cloud,
  Globe,
  Download,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  Code,
  Palette,
  Database,
  Zap,
  Award,
  BookOpen,
  Target,
  Calendar,
  Star,
  CheckCircle,
  Link2,
} from "lucide-react";

import infoDoc from "./assets/imgs/infodoc.png";
import cgpa from "./assets/imgs/cgpa.png";
import me from "./assets/imgs/me.jpg";
import express from "./assets/imgs/express.svg"
import firebase from "./assets/imgs/firebase.svg"
import mongodb from "./assets/imgs/mongodb.svg"
import reactIcon from "./assets/imgs/react.svg"
import tailwind from "./assets/imgs/tailwind.svg"

// Mock data for images - replace with your actual imports
const mockImages = {
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  bootstrap:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  js: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  mysql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  figma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  nodejs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  infodoc: infoDoc,
  cgpa: cgpa,
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(50);

  const strings = [
    "FullStack Developer",
    "Associate Cloud Engineer",
    "Algorithmic Thinker",
    "Driven Tech Enthusiast",
    "Analytical Coder",
  ];

  useEffect(() => {
    // Simulate AOS animations with Intersection Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    // Observe all elements with data-aos attribute
    document.querySelectorAll("[data-aos]").forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const type = () => {
      const current = strings[currentIndex];

      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        setTypeSpeed(30);
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        setTypeSpeed(50);
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
      }
    };

    const timer = setTimeout(type, typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, typeSpeed, strings]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <MainContent
          currentText={currentText}
          setCurrentText={setCurrentText}
        />
        <AboutMe />
        <Skills />
        <Projects />
        <CurrentlyLearning />
        {/* <Platforms /> */}
        <Footer />
      </div>
    </div>
  );
};

const Header = ({ isMenuOpen, setIsMenuOpen }) => (
  <header className="relative z-20">
    <nav className="flex justify-between items-center px-6 py-4 md:px-12">
      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"></div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {[
          "ABOUT",
          "SKILLS",
          "PROJECTS",
          "LEARNING",
          // "PLATFORMS",
          "CONTACT",
        ].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-yellow-400 hover:text-orange-500 transition-all duration-300 font-medium tracking-wide hover:scale-105 transform relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Mobile Navigation Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-yellow-400 hover:text-orange-500 transition-colors p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm md:hidden">
          <div className="flex flex-col space-y-4 px-6 py-8">
            {["ABOUT", "SKILLS", "PROJECTS", "LEARNING", "CONTACT"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-yellow-400 hover:text-orange-500 transition-colors font-medium tracking-wide"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  </header>
);

const MainContent = ({ currentText, setCurrentText }) => (
  <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 text-center md:text-left relative gap-8 md:gap-12">
    {/* Image on the left */}
    <div className="flex-shrink-0" data-aos="fade-right">
      <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
      <div className="relative w-72 h-72 md:w-92 md:h-92 -full bg-gradient-to-br from-yellow-400 to-amber-600 p-1 animate-float">
        <div className="w-full h-full -full bg-yellow-200 flex items-center justify-center overflow-hidden">
          <img
            src={me}
            className="w-56 h-56 md:w-92 md:h-92 -full object-cover"
            alt="Sharan"
          />
        </div>
      </div>
    </div>

    <div>
      {/* Text content on the right */}
      <div data-aos="fade-left" className="flex-1">
        <h2 className="text-2xl md:text-3xl text-orange-500 mb-4 font-light tracking-wider">
          Hello! It's me,
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 mb-6 animate-pulse">
          Sathiyapriya Venkatesan
        </h1>
        <div className="flex items-center justify-center md:justify-start space-x-4 text-xl md:text-2xl text-yellow-400 font-light tracking-widest">
          <span className="text-yellow-400 font-bold text-2xl md:text-4xl h-10 md:h-12">
            {currentText}
            <span className="animate-pulse">|</span>
          </span>
        </div>
      </div>

      <SocialIcons />

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
        data-aos="fade-up"
      >
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-yellow-400" />
        </div>
      </div>
    </div>
  </section>
);

const SocialIcons = () => (
  <div className="flex space-x-6 mt-8" data-aos="fade-up">
    <a
      href="mailto:deepikavenkatesan32@gmail.com"
      className="p-3 border-2 border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-110 hover:rotate-12 group"
      target="_blank"
    >
      <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
    </a>
    <a
      href="https://www.linkedin.com/in/sathiyapriya-venkatesan-9a41a127b/"
      className="p-3 border-2 border-orange-500 rounded-full hover:bg-orange-500 hover:text-black transition-all duration-300 transform hover:scale-110 hover:rotate-12 group"
      target="_blank"
    >
      <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
    </a>
    <a
      href="https://github.com/Deepi-2704"
      className="p-3 border-2 border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-110 hover:rotate-12 group"
      target="_blank"
    >
      <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
    </a>
  </div>
);

const AboutMe = () => (
  <section id="about" className="py-20 px-6 md:px-12">
    <div className="max-w-6xl mx-auto">
      <div className="relative">
        {/* Glass morphism card */}
        <div
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl hover:bg-white/10 transition-all duration-500 hover:scale-[1.02]"
          data-aos="fade-up"
        >
          {/* Gradient overlay for extra glass effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-orange-500/5 rounded-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-8 text-center">
              About Me
            </h2>
  
            <div className="space-y-6">
              <p className="text-lg text-gray-200 leading-relaxed">
                I'm Sathiyapriya V, an aspiring{" "}
                <span className="text-yellow-400 font-semibold">
                  Software Engineer
                </span>{" "}
                passionate about Fullstack Development and Cloud Computing.
                Currently pursuing a B.Tech in Information Technology at K. S.
                Rangasamy College of Technology with a CGPA of 8.03, I
                specialize in Java, the MERN stack, and RESTful APIs, with
                hands-on experience using tools like GitHub, Figma, and Canva.
              </p>

              <p className="text-lg text-gray-200 leading-relaxed">
                My technical foundation is backed by certifications including
                Google Cloud's
                <span className="text-orange-500 font-semibold">
                  {" "}
                  Associate Cloud Engineer
                </span>
                , and Java and DSA credentials from Infosys Springboard. I've
                applied my skills in real-world projects such as a CGPA/SGPA
                Calculator, a personal portfolio website, and the frontend
                design of InfoDoc, an online medical consulting platform.
              </p>

              <p className="text-lg text-gray-200 leading-relaxed">
                I gained valuable exposure to cloud security through an
                internship with
                <span className="text-yellow-400 font-semibold">
                  {" "}
                  Zscaler Academy
                </span>
                , where I learned about encryption standards, threat models, and
                compliance frameworks. My achievements include being a finalist
                at the Dark Pattern Buster Hackathon 2024 (IIT-BHU), and a
                shortlisted participant at the National Cyber Security Conclave
                at NIT Calicut.
              </p>

              <p className="text-lg text-gray-200 leading-relaxed mb-8">
                Fluent in Tamil, English, and Telugu, I'm actively sharpening my
                problem-solving skills on LeetCode and enjoy exploring frontend
                design, scalable software development, and{" "}
                <span className="text-orange-500 font-semibold">
                  cloud-native solutions
                </span>
                .
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8"
              data-aos="fade-up"
            >
              <div className="flex items-center space-x-3">
                <BookOpen className="w-5 h-5 text-yellow-400" />
                <p className="text-yellow-400 text-lg font-medium">
                  Know more about me!
                </p>
              </div>

              <a
                href="https://drive.google.com/file/d/107jxez_xPn6Z6YqiAIG2RAJomp6Hyxxq/view?usp=sharing"
                className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full hover:from-orange-500 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>
            </div>

            <div className="flex items-center justify-center space-x-3 mt-8">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <p className="text-green-400 font-medium text-lg">
                Available for hire
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const skills = [
    { name: "React", icon: reactIcon, category: "Frontend" },
    { name: "Figma", icon: mockImages.figma, category: "Design" },
    { name: "Tailwind", icon: tailwind, category: "Design" },
    { name: "HTML", icon: mockImages.html, category: "Frontend" },
    { name: "CSS", icon: mockImages.css, category: "Frontend" },
    { name: "JavaScript", icon: mockImages.js, category: "Programming" },
    { name: "Node", icon: mockImages.nodejs, category: "Framework" },
    { name: "Express", icon: express, category: "Framework" },
    { name: "Bootstrap", icon: mockImages.bootstrap, category: "Design" },
    { name: "MySQL", icon: mockImages.mysql, category: "Database" },
    { name: "MongoDB", icon: mongodb, category: "Database" },
    { name: "Firebase", icon: firebase, category: "Database" },
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Design":
        return <Palette className="w-5 h-5" />;
      case "Frontend":
        return <Code className="w-5 h-5" />;
      case "Database":
        return <Database className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-12 bg-gradient-to-r from-black via-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-16"
          data-aos="fade-up"
        >
          Skills
        </h2>

        {/* Skill Tags */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-16"
          data-aos="fade-up"
        >
          {skills.map((skill, index) => (
            <span
              key={skill.name}
              className="px-6 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-lg font-semibold rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {skill.name}
            </span>
          ))}
        </div>

        {/* Detailed Skills - Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="flex items-center justify-between bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.02] border border-gray-700 hover:border-yellow-400/50 group"
              data-aos="fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <span className="text-xl font-medium text-white block">
                    {skill.name}
                  </span>
                  <div className="flex items-center space-x-1 text-gray-400">
                    {getCategoryIcon(skill.category)}
                    <span className="text-sm">{skill.category}</span>
                  </div>
                </div>
              </div>

              {/* Stars */}
              {/* <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 transition-all duration-200 hover:scale-125 ${
                      i < skill.rating 
                        ? 'text-yellow-400 fill-yellow-400' 
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CurrentlyLearning = () => {
  const learningItems = [
    {
      name: "MERN",
      icon: <Globe className="w-5 h-5" />,
      progress: 75,
      description: "Building fast and scalable MERN Application",
    },
    {
      name: "Linked Lists",
      icon: <Link2 className="w-5 h-5" />,
      progress: 50,
      description: "Understanding the concepts of Linear DS",
    },
    {
      name: "Stack",
      icon: <Layers />,
      progress: 30,
      description: "Understanding the concepts of Linear DS",
    },
    {
      name: "Queue",
      icon: <ListOrdered />,
      progress: 25,
      description: "Understanding the concepts of Linear DS",
    },
    {
      name: "Google Cloud Platform (GCP)",
      icon: <Cloud />,
      progress: 70,
      description:
        "Deep diving into GCP after completing Associate Cloud Engineer Certification",
    },
  ];

  return (
    <section id="learning" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
            Currently Learning
          </h2>
          <p className="text-xl text-gray-300">
            Expanding my skillset with these technologies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {learningItems.map((item, index) => (
            <div
              key={item.name}
              className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700 hover:border-orange-400/50 transition-all duration-300 hover:scale-[1.02] group"
              data-aos="fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                {/* <img
                  src={item.icon}
                  alt={item.name}
                  className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                /> */}
                {item.icon}
                <div>
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  {/* <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{item.timeline}</span>
                  </div> */}
                </div>
              </div>

              <p className="text-gray-300 mb-4">{item.description}</p>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-yellow-400">Progress</span>
                  <span className="text-sm text-orange-500">
                    {item.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "InfoDoc - Online doctor infosite in local area",
      image: mockImages.infodoc,
      description:
        "A comprehensive online platform connecting patients with local healthcare providers.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "#",
    },
    {
      title: "GPA Calculator for K.S.Rangasamy College of Technology",
      image: mockImages.cgpa,
      description:
        "An intuitive GPA calculation tool designed specifically for college students with grade tracking and semester management.",
      tech: ["JavaScript", "Bootstrap", "CSS"],
      link: "https://studentcgpacalculator.netlify.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-12 bg-gradient-to-r from-black via-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-16"
          data-aos="fade-up"
        >
          Projects
        </h2>

        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 hover:scale-[1.02] group"
              data-aos="fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <a href={project.link} target="_blank">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
              </a>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-yellow-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Platforms></Platforms>
    </section>
  );
};

const Platforms = () => {
  const platforms = [
    {
      name: "LeetCode",
      description: "Problem solving and algorithmic challenges",
      icon: <Code className="w-8 h-8" />,
      stats: "75+ problems solved",
      link: "https://leetcode.com/u/_SATHIYAPRIYA/",
      color: "from-orange-500 to-yellow-500",
    },
    {
      name: "HackerRank",
      description: "Programming skills and certifications",
      icon: <Target className="w-8 h-8" />,
      stats: "Gold badge in JavaScript",
      link: "https://hackerrank.com/your-profile",
      color: "from-green-500 to-teal-500",
    },
    {
      name: "CloudSkills Boost",
      description: "Cloud computing and Google Cloud Platform",
      icon: <Award className="w-8 h-8" />,
      stats: "90+ skill badges",
      link: "https://www.cloudskillsboost.google/public_profiles/e790f6cf-efc3-4e54-882a-5614a1107c66",
      color: "from-blue-500 to-purple-500",
    },
    // {
    //   name: "Salesforce",
    //   description: "Cloud computing and Google Cloud Platform",
    //   icon: <Award className="w-8 h-8" />,
    //   stats: "5 skill badges earned",
    //   link: "https://cloudskillsboost.google/your-profile",
    //   color: "from-blue-500 to-purple-500",
    // },
  ];

  return (
    <section id="platforms" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
            Coding Platforms
          </h2>
          <p className="text-xl text-gray-300">Where I practice and showcase my programming skills</p>
        </div> */}
        <p className="text-2xl font-semibold text-center mb-16 text-gray-300">
          Take a look into my other platform profiles...
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={platform.name}
              className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 hover:scale-[1.05] group cursor-pointer"
              data-aos="fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => window.open(platform.link, "_blank")}
            >
              <div className="text-center">
                <div
                  className={`inline-flex p-4 rounded-full bg-gradient-to-r ${platform.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {React.cloneElement(platform.icon, {
                    className: "w-8 h-8 text-white",
                  })}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                  {platform.name}
                </h3>

                <p className="text-gray-400 mb-4">{platform.description}</p>

                <div className="flex items-center justify-center space-x-2 text-orange-500 font-semibold">
                  <CheckCircle className="w-5 h-5" />
                  <span>{platform.stats}</span>
                </div>

                <div className="mt-4 flex items-center justify-center space-x-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Visit Profile</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer
    id="contact"
    className="py-20 px-6 md:px-12 bg-gradient-to-r from-gray-900 via-black to-gray-900"
  >
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-300 mb-2">
          For collaboration purposes, feel free to reach out!
        </p>
        <p className="text-lg text-gray-400">Contact me through</p>
      </div>

      <form className="space-y-6 mb-12" data-aos="fade-up">
        <div>
          <label className="block text-yellow-400 font-medium mb-2">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors duration-300 text-white"
            required
          />
        </div>

        <div>
          <label className="block text-yellow-400 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors duration-300 text-white"
            required
          />
        </div>

        <div>
          <label className="block text-yellow-400 font-medium mb-2">
            Message
          </label>
          <textarea
            placeholder="Your message"
            rows={5}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors duration-300 text-white resize-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg hover:from-orange-500 hover:to-yellow-400 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center space-x-2"
        >
          <Mail className="w-5 h-5" />
          <span>Send Message</span>
        </button>
      </form>

      <SocialIcons />

      <div className="text-center mt-12 pt-8 border-t border-gray-800">
        <p className="text-gray-500">
          © 2024 Sathiyapriya V. All rights reserved.
        </p>
        <p className="text-gray-600 mt-2 flex items-center justify-center space-x-2">
          <span>Made with</span>
          <span className="text-red-500 animate-pulse">❤️</span>
          <span>using React & Tailwind CSS</span>
        </p>
      </div>
    </div>
  </footer>
);

export default App;
