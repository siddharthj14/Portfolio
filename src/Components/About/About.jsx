import React from "react";
import "./About.css";
import my_img1 from "../../assets/My_Picture.jpg";
import my_img2 from "../../assets/My_Picture2.jpg";

function About() {
  return (
    <section className="aboutSection" id="About">
      <h1>About Me</h1>
      <h2>Why Choose Me?</h2>
      <div className="aboutBox">
        <img src={my_img1} alt="Image 1" />
        <img src={my_img2} alt="Image 2" />
        <p>
          Hailing from Jaipur, Rajasthan, I am a devoted Full-Stack Web
          Developer currently pursuing a Bachelor's degree in Computer Science
          and Engineering at Vellore Institute of Technology. Specializing in
          the MERN Stack, I harbor a genuine passion for web development. Eager
          to broaden my skill set, I am on an unending journey to contribute to
          innovative projects and make a meaningful impact in the ever-evolving
          tech landscape. Join me as I navigate the exciting intersections of
          code and creativity, embracing continuous learning along the way. I'm
          always seeking opportunities to create innovative digital experiences,
          fueled by a commitment to excellence, with the aim to not only meet
          but exceed expectations.
        </p>
      </div>
    </section>
  );
}

export default About;
