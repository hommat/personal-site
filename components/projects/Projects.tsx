import Project from 'components/projects/Project';

export default function Projects() {
  return (
    <div className="container">
      <section className="section projects" id="projects">
        <h3 className="section__heading">Some of my projects</h3>
        <div className="projects__grid">
          {new Array(6).fill(0).map((_, index) => (
            <Project
              key={index}
              codeHref="github.com"
              description="This is project description"
              liveHref="google.com"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
