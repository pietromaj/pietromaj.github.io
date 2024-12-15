import './ProjectBox.css';

interface Project {
  title: string;
  img: string;
  body: string;
  link: string;
}

function ProjectBox({ project }: { project: Project }) {
  return (
    <a href={project.link}>
      <div className="project-image-wrapper">
        <img className="project-image" src={project.img} />
        <div className="text-box"   dangerouslySetInnerHTML={{ __html: project.body }}></div>
      </div>
    </a>
  );
}

export default ProjectBox;
