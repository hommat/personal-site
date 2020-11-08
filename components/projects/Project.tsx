export interface ProjectProps {
  description: string;
  liveHref: string;
  codeHref: string;
}

export default function Project({ description, liveHref, codeHref }: ProjectProps) {
  return (
    <div className="project">
      <a href={liveHref} className="project__description">
        <p>{description}</p>
      </a>
      <div className="project__actions">
        <a href={liveHref} className="project__action">
          Live
        </a>
        <a href={codeHref} className="project__action">
          Code
        </a>
      </div>
    </div>
  );
}
