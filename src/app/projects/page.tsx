import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section style={{ display: "grid", gap: 16 }}>
      <h1>Projects</h1>
      <div
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />)
        )}
      </div>
    </section>
  );
}


