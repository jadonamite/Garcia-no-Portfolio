import React from "react";
import "./About.css";

export default function About() {
   return (
      <section className="about">
         <p className="hero-header">About Me</p>
         <div className="section-text">
            <p className="section-headers">
               I am a front-end developer based in Sydney. Has Mechanical
               Engineering background.
            </p>
            <p className="hero-text">
               I am a front-end developer based in Sydney looking for exciting
               opportunities. Has Mechanical Engineering background. Likes to
               focus on accessibility when developing. Passionate and curious
               about solving problems. Currently, I’m exploring Reactjs, Webflow
               and a bit of Designing. While I am not programming, I enjoy
               playing football, photography and playing Valorant. Learning more
               to improve skill.
            </p>
            <a href="/about" className="abt-link">
               more about me
            </a>
         </div>
      </section>
   );
}
