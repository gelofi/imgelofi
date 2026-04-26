import "./projects.css"; // the CSS

// assets/photos
import tenki from "../../assets/tenki.png";
import kkohi from "../../assets/kko-hi.png";
import funkn from "../../assets/funkn.png";
import levelier from "../../assets/levelier.png";
import substack from "../../assets/substack.png";

import ProjectCards from "../../common/ProjectCards"; // the project card component builder

function projects() {
    return (
      <section id="projects" className="projects-section">
      <h2>projects</h2>
        <div className="projects-container">
          <ProjectCards
            name="tenki"
            desc="a weather information fetcher made in Vite-React."
            image={tenki}
            link="https://gelofi.github.io/tenki"
            alt="tenki"
          />
          <ProjectCards
            name="funkn"
            desc="a Discord music bot created in JavaScript."
            image={funkn}
            link="https://github.com/gelofi/funkn"
            alt="Funkn."
          />
          <ProjectCards
            name="kko-hi"
            desc="a multi-purpose Discord bot created in Java."
            image={kkohi}
            link="https://github.com/gelofi/kkohi-jda"
            alt="Kko-hi"
          />
          <ProjectCards
            name="levelier"
            desc="a level-system Discord bot created in JavaScript."
            image={levelier}
            link="https://github.com/gelofi/Levelier"
            alt="levelier"
          />
          <ProjectCards
            name="notes from a restless mind"
            desc="my substack profile, i post my thoughts and feelings there."
            image={substack}
            link="https://writeangelo.substack.com/"
            alt="notes from a restless mind"
          />
        </div>
      </section>
    );
}

export default projects;