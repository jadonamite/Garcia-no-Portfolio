import React from "react";
import "./Featured.css";
import FeaturedImage1 from "../../assets/work.png";
import FeaturedImage2 from "../../assets/Fea.png";
import FeaturedImage3 from "../../assets/Featured-two.png";
import { FaGithub } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

export default function Featured() {
   return (
      <>
         <section className="featured">
            <section className="featured-title">
               <p className="footer-header">Featured Projects</p>
               <p className="hero-text">
                  Here are some of the selected projects that showcase my
                  passion for front-end development.
               </p>
            </section>
            <section className="works-card">
               <section className="featured-cards">
                  <div className="card">
                     <p className="card-title">Conceptual Work</p>
                     <div className="image-container">
                        <img src={FeaturedImage1} />
                     </div>
                  </div>
                  <div className="content">
                     <h3 className="section-headers">
                        Promotional landing page for our favorite show
                     </h3>
                     <p className="hero-text">
                        Teamed up with a designer to breathe life into a
                        promotional webpage for our beloved show, Adventure
                        Time. Delivered a fully responsive design with dynamic
                        content capabilities, seamlessly integrating a
                        newsletter feature to keep fans updated with the latest
                        adventures.
                     </p>

                     <div className="relative">
                        <p className="relative-title">Project info</p>
                        <div className="relative-text">
                           <p className="yearIT">Year</p>
                           <p className="year">2023</p>
                        </div>
                        <div className="relative-text">
                           <p className="yearIT">Role</p>
                           <p className="year">Front-end Developer</p>
                        </div>
                     </div>
                     <div className="relative-links">
                        <div className="rel-link abt-link ">
                           <a href="/about" className="">
                              Live Demo
                           </a>
                           <MdArrowOutward />
                        </div>
                        <div className="rel-link abt-link">
                           <a href="/about">See on Github</a>
                           <FaGithub />
                        </div>
                     </div>
                  </div>
               </section>
               <section className="featured-cards">
                  <div className="card">
                     <div className="image-container">
                        <img src={FeaturedImage3} />
                     </div>
                  </div>
                  <div className="content">
                     <h3 className="section-headers">
                        Blog site for World News
                     </h3>
                     <p className="hero-text">
                        Mastered CSS Grid complexities in building an innovative
                        news homepage, navigating intricate design decisions for
                        a seamless user experience. Leveraged the challenge to
                        enhance skills in front-end development.
                     </p>

                     <div className="relative">
                        <p className="relative-title">Project info</p>
                        <div className="relative-text">
                           <p className="yearIT">Year</p>
                           <p className="year">2023</p>
                        </div>
                        <div className="relative-text">
                           <p className="yearIT">Client</p>
                           <p className="year">World News</p>
                        </div>
                        <div className="relative-text">
                           <p className="yearIT">Role</p>
                           <p className="year">Front-end Developer</p>
                        </div>
                     </div>
                     <div className="relative-links">
                        <div className="rel-link abt-link ">
                           <a href="/about" className="">
                              View Project
                           </a>
                           <MdArrowOutward />
                        </div>
                     </div>
                  </div>
               </section>
               <section className="featured-cards">
                  <div className="card">
                     <p className="card-title">Challenge</p>
                     <div className="image-container">
                        <img src={FeaturedImage2} />
                     </div>
                  </div>
                  <div className="content">
                     <h3 className="section-headers">
                        E-commerce product page
                     </h3>
                     <p className="hero-text">
                        Successfully crafted an engaging product page featuring
                        a dynamic lightbox gallery and seamless cart
                        functionality, showcasing proficiency in JavaScript
                        development.
                     </p>

                     <div className="relative">
                        <p className="relative-title">Project info</p>
                        <div className="relative-text">
                           <p className="yearIT">Year</p>
                           <p className="year">2022</p>
                        </div>
                        <div className="relative-text">
                           <p className="yearIT">Role</p>
                           <p className="year">Front-end Developer</p>
                        </div>
                     </div>
                     <div className="relative-links">
                        <div className="rel-link abt-link ">
                           <a href="/about" className="">
                              Live Demo
                           </a>
                           <MdArrowOutward />
                        </div>
                        <div className="rel-link abt-link">
                           <a href="/about">See on Github</a>
                           <FaGithub />
                        </div>
                     </div>
                  </div>
               </section>
            </section>
         </section>
      </>
   );
}
