import './ProjectList.css';

export const ProjectList = ({ projects }) => {
    return (
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img src={project.img} alt={`Project ${index}`} />
            <p>{project.category}</p>
          </div>
        ))}
      </div>
    );
  };
  