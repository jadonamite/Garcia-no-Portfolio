import React from "react";
import "./Hero.css";
import profileImage from "../../assets/image.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
export default function Hero() {
   return (
      <>
         <div className="hero">
            <div className="left">
               <p className="hero-header">
                  hi, i am <br />
                  robert garcia.
               </p>
               <p className="hero-text">
                  A Sydney based front-end developer passionate about building
                  accessible and user friendly websites.
               </p>

               <div className="contacts">
                  <div className="btn">
                     <a href="#" className="button">
                        Contact Me
                     </a>
                     <GoDotFill />
                  </div>
                  <div className="link-icons">
                     <FaGithub />
                  </div>
                  <div className="link-icons">
                     <FaLinkedinIn />
                  </div>
               </div>
            </div>

            <img src={profileImage} alt="" srcset="" className="profileImg" />
         </div>
      </>
   );
}
