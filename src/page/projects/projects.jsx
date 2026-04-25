import "./projects.css";
import ProjectCards from "../../common/ProjectCards";

function projects() {
    return (
      <section id="projects" className="projects-section">
      <h2>Projects</h2>
        <div className="projects-container">
          <ProjectCards
            name="Tenki"
            desc="A weather information fetcher made in Vite-React."
            image="/src/assets/tenki.png"
            link="https://gelofi.github.io/tenki"
            alt="Tenki"
          />
          <ProjectCards
            name="Funkn"
            desc="A Discord music bot created in JavaScript."
            image="/src/assets/funkn.png"
            link="https://github.com/gelofi/funkn"
            alt="Funkn."
          />
          <ProjectCards
            name="Kko-hi"
            desc="A multi-purpose Discord bot created in Java."
            image="/src/assets/kko-hi.png"
            link="https://github.com/gelofi/kkohi-jda"
            alt="Kko-hi."
          />
          <ProjectCards
            name="Levelier"
            desc="A level-system Discord bot created in JavaScript."
            image="/src/assets/levelier.png"
            link="https://github.com/gelofi/Levelier"
            alt="Levelier."
          />
        </div>
      </section>
    );
}

export default projects;