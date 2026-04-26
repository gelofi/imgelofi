import "./projects.css";
import tenki from "../../assets/tenki.png";
import kkohi from "../../assets/kko-hi.png";
import funkn from "../../assets/funkn.png";
import levelier from "../../assets/levelier.png";
import substack from "../../assets/substack.png";

import ProjectCards from "../../common/ProjectCards";

function projects() {
    return (
      <section id="projects" className="projects-section">
      <h2>Projects</h2>
        <div className="projects-container">
          <ProjectCards
            name="Tenki"
            desc="A weather information fetcher made in Vite-React."
            image={tenki}
            link="https://gelofi.github.io/tenki"
            alt="Tenki"
          />
          <ProjectCards
            name="Funkn"
            desc="A Discord music bot created in JavaScript."
            image={funkn}
            link="https://github.com/gelofi/funkn"
            alt="Funkn."
          />
          <ProjectCards
            name="Kko-hi"
            desc="A multi-purpose Discord bot created in Java."
            image={kkohi}
            link="https://github.com/gelofi/kkohi-jda"
            alt="Kko-hi."
          />
          <ProjectCards
            name="Levelier"
            desc="A level-system Discord bot created in JavaScript."
            image={levelier}
            link="https://github.com/gelofi/Levelier"
            alt="Levelier."
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