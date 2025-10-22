import Link from "next/link";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 12,
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <h3 style={{ margin: 0 }}>{project.title}</h3>
      <p style={{ margin: 0, color: "#aaa", lineHeight: 1.6 }}>{project.description}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {project.tags.map((t) => (
          <span
            key={t}
            style={{
              fontSize: 12,
              padding: "4px 8px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#bbb",
            }}
          >
            {t}
          </span>
        ))}
      </div>
      <div style={{ display: "flex", gap: 12 }}>
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            Source
          </a>
        )}
      </div>
    </div>
  );
}


