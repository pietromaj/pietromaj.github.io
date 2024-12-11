import './About.css';

function About() {
  return (
    <div className="about-container py-4">
       <section className="about-header">
        <h1>Full Stack Developer</h1>
        <p>Full Stack Developer with over 9 years of experience building and maintaining scalable systems, driving frontend architecture and code design decisions, and contributing to the success of startups and established companies</p>
      </section>

      <section className="experience">

        <div className="d-flex job-container">
          <div className="date-cell me-4">2021-2024</div>
          <div className="job filled">
            <h3>BS2 — Full Stack Developer / Front Tech Lead</h3>
            <ul>
              <li>Redesigned multiple frontend applications using Angular and contributed to the development of VueJS applications from scratch as part of a team.</li>
              <li>Developed and maintained backend APIs with Phoenix/Elixir, ensuring seamless service integration.</li>
            </ul>
            <div className="tech-stack">
              <span className="pill">Angular</span>
              <span className="pill">Phoenix</span>
              <span className="pill">Elixir</span>
            </div>
          </div>
        </div>

        <div className="d-flex job-container">
          <div className="date-cell me-4">2019-2021</div>
          <div className="job">
            <h3>Weel (acquired by BS2) — Full Stack Developer</h3>
            <ul>
              <li>Implemented new features for frontend (Angular) and backend (Phoenix/Elixir).</li>
              <li>Redesigned database architecture, facilitating migration from MongoDB to PostgreSQL.</li>
            </ul>
            <div className="tech-stack">
              <span className="pill">Angular</span>
              <span className="pill">PostgreSQL</span>
              <span className="pill">MongoDB</span>
            </div>
          </div>
        </div>

        <div className="d-flex job-container">
          <div className="date-cell me-4">2018-2019</div>
          <div className="job filled">
            <h3>Houzz — Full Stack Developer</h3>
            <ul>
              <li>Developed features and helped transition the app from Rails to Node.js.</li>
            </ul>
            <div className="tech-stack">
              <span className="pill">Node.js</span>
              <span className="pill">Rails</span>
            </div>
          </div>
        </div>

        <div className="d-flex job-container">
          <div className="date-cell me-4">2016-2018</div>
          <div className="job">
            <h3>IvyMark (acquired by Houzz) — Full Stack Developer</h3>
            <ul>
              <li>Developed IvyMark from the ground up, designing and implementing the entire DevOps pipeline, frontend (React & jQuery), and backend (Ruby on Rails) architectures.</li>
              <li>Architected and maintained the PostgreSQL database, integrated ElasticSearch, and implemented multiple third-party API integrations.</li>
              <li>Played a key role in building a scalable and robust platform, contributing to its eventual acquisition by Houzz.</li>
            </ul>
            <div className="tech-stack">
              <span className="pill">React</span>
              <span className="pill">jQuery</span>
              <span className="pill">Ruby on Rails</span>
              <span className="pill">PostgreSQL</span>
              <span className="pill">ElasticSearch</span>
            </div>
          </div>
        </div>

        <div className="d-flex job-container">
          <div className="date-cell me-4">2015-2016</div>
          <div className="job filled">
            <h3>ArtSetters (shifted to IvyMark) — QA / Full Stack Developer</h3>
            <ul>
              <li>Responsible for doing QA of the app and developing features.</li>
            </ul>
            <div className="tech-stack">
              <span className="pill">QA</span>
              <span className="pill">Ruby on Rails</span>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default About;


