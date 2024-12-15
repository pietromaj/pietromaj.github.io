import './Projects.css';

function Projects() {
  return (
      <div className="d-flex flex-column py-4">
      
        <div className="d-flex mb-4 project-box">
          <img width="200px" height="200px" src="https://yt3.googleusercontent.com/_y_37O5zO7KFjv4rcPkKdzjkYNflKTVnRv4gazuntbBjWzi3978bS2kclb0hQ3DQJpr3FPisHg=s160-c-k-c0x00ffffff-no-rj" />
          <div className="p-3 project-text">
            <div className="project-title mb-2">Tudo Programado</div>

            <div>A YouTube channel where I share my passion for everything related to development. From gaming to business applications, image processing to advanced algorithms—the exploration never ends!</div>
          </div>
        </div>

        <div className="d-flex project-box">
          <div className="p-3 project-text">
            <div className="project-title mb-2">Indieflow</div>

            <div>Back when Corona hit hard, a couple of friends reached out to me with a challenge. They wanted to develop a new platform for independent musicians,
             where they could streamline their process of creating, publishing, and promoting their songs! They chose me because of my success story at Ivy, a startup 
             where I was working at the time. Leading the development from the first line of code to a multi-million exit, I had everything to drive Indieflow to the same success! 
             Since I was employed at the time, I started developing it during my night shifts and even took all my vacation time. But was all worth it!<br />

            Eventually, I had to step down for family reasons, but the company continues to make more innovations in the field!
            </div>
          </div>
          <img width="200px" height="200px" src="https://media.licdn.com/dms/image/v2/C4E0BAQE2HCsVp66KLg/company-logo_200_200/company-logo_200_200/0/1630646675425/indieflow_logo?e=1741824000&v=beta&t=F3OEhY89pYDcs6VJaGSc6FbKwT27Z-q1R8q-f2jW-vA" />
        </div>

      </div>
  );
}

export default Projects;
