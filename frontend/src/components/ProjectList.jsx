import projects from "../data/projectData";

export default function ProjectList() {
  const listData = projects.map((project, i) => {
    return (
      <li key={i}>
        <p>
          [{project.date}]{" "}
          {project.hasUrl ? (
            <a
              href={project.url}
              className="underline hover:text-sky-500 hover:cursor-pointer dark:hover:text-sky-400"
              target="_blank"
            >
              {project.name}
            </a>
          ) : (
            <>{project.name}</>
          )}
          {project.active ? null : "*"} - {project.description}
        </p>
      </li>
    );
  });

  return <>{listData}</>;
}
