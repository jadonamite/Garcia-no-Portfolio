import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import "./Footer.css";

export default function Footer() {
   return (
      <div className="container">
         <div className="connect">
            <p className="footer-header">Let's connect</p>
            <p className="section-text">
               Say hello at{" "}
               <span className="inner-text-link">robertgarcia@gmail.com</span>
               <br />
               For more info here's my{" "}
               <span className="inner-text-link">resume</span>
            </p>

            <div className="contacts">
               <FaLinkedinIn />
               <FaGithub /> <FaXTwitter /> <FaInstagram />
            </div>
         </div>
         <div className="Newsletter">
            <p className="input-title">Name</p>
            <input type="text" name="Name" id="" placeholder="John Doe" />
            <p className="input-title">Email</p>
            <input
               type="email"
               name="Name"
               id=""
               placeholder="example@gmail.com"
            />
            <p className="input-title">Subject</p>
            <input type="text" name="Name" id="" placeholder="Subject" />

            <p className="input-title">Message</p>
            <textarea name="message" id="" cols="30" rows="8"></textarea>

            <button className="buton">submit</button>
         </div>
      </div>
   );
}
