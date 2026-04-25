function ProjectCards({ name, desc, image, link, alt }) {
    return (
      <div className="project-card">
        <img src={image} alt={alt}></img>
        <a href={link} target="_blank">
          <h3>{name}</h3>
          <p>{desc}</p>
        </a>
      </div>
    );
}

export default ProjectCards;