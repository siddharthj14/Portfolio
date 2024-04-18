import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="projectSection" id="Projects">
      <div className="projects">
        <h1>Projects</h1>
        <ProjectCard
          title="Memory Card Game"
          description="A fun memory card game built with HTML, CSS, and JavaScript."
          WebsiteLink="https://siddharthj14.github.io/Flip-Card-Game/"
          GithubLink="https://github.com/siddharthj14/Flip-Card-Game"
        />
        <ProjectCard
          title="Tic Tac Toe Game"
          description="A classNameic Tic Tac Toe game implemented using HTML, CSS, and
            JavaScript."
          WebsiteLink="https://siddharthj14.github.io/Tic-Tac-Toe/"
          GithubLink="https://github.com/siddharthj14/Tic-Tac-Toe"
        />
        <ProjectCard
          title="Stone Paper Scissor Game"
          description="An interactive Stone Paper Scissor game implemented using HTML, CSS,
            and JavaScript."
          WebsiteLink="https://siddharthj14.github.io/Stone-Paper-Scissors-Game/"
          GithubLink="https://github.com/siddharthj14/Stone-Paper-Scissors-Game"
        />
        <ProjectCard
          title="The Simon Game"
          description="A classNameic Simon game with a modern twist, built with HTML, CSS,
            JavaScript, and jQuery."
          WebsiteLink="https://siddharthj14.github.io/The-Simon-Game/"
          GithubLink="https://github.com/siddharthj14/The-Simon-Game"
        />
        <ProjectCard
          title="TinDog - Tinder for Dogs"
          description="A playful website for connecting dogs and their owners, created
            using HTML, CSS, Bootstrap, and JavaScript."
          WebsiteLink="https://siddharthj14.github.io/TinDog/"
          GithubLink="https://github.com/siddharthj14/TinDog"
        />
        <ProjectCard
          title="Keeper App"
          description="Developed a note-taking application using HTML, CSS, JavaScript and React.js"
          WebsiteLink="https://siddharthj14.github.io/Keeper-app/"
          GithubLink="https://github.com/siddharthj14/Keeper-app"
        />
      </div>
    </section>
  );
}

export default Projects;
