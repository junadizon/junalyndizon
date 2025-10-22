import type { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description:
      "A statically exported portfolio built with Next.js, TypeScript, and GitHub Pages.",
    tags: ["Next.js", "TypeScript", "GitHub Pages"],
    demoUrl: "https://your-username.github.io/your-repo",
    repoUrl: "https://github.com/your-username/your-repo",
  },
  {
    title: "Weather Dashboard",
    description:
      "Responsive dashboard consuming a public weather API with caching and charts.",
    tags: ["React", "API", "Charts"],
    demoUrl: "https://example.com/weather",
    repoUrl: "https://github.com/your-username/weather-dashboard",
  },
  {
    title: "Todo App",
    description:
      "Accessible todo app featuring filters, local persistence, and keyboard shortcuts.",
    tags: ["React", "TypeScript", "Accessibility"],
    demoUrl: "https://example.com/todo",
    repoUrl: "https://github.com/your-username/todo",
  },
];


