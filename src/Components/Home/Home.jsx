import React from "react";
import "./Home.css";
import developer_img from "../../assets/Developer.png";

function Home() {
  return (
    <section className="homeSection" id="Home">
      <div className="leftSection">
        <h1>
          Hello, I'm <span className="name">Siddharth Jain</span>
        </h1>
        <p className="intro">
          A passionate student interested in web development. I love creating
          visually appealing and interactive websites.
        </p>
        <div className="buttons">
          <a href="https://docs.google.com/document/d/1l-9cIs0_Xjpka92W2SiqYB_69xrAUBwUCjxB71blG-w/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className="btn">Download Resume</button>
          </a>
          <a href="#contactMe">
            <button className="btn">Hire Me!</button>
          </a>
        </div>
      </div>
      <div className="rightSection">
        <img src={developer_img} alt="Developer" />
      </div>
    </section>
  );
}

export default Home;
