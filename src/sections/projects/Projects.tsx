import { useEffect, useState } from "react";
import type { Project } from "./projects.interface";
import ProjectImageRenderer from "./ProjectImageRenderer";
import { Parallax } from "react-scroll-parallax";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  return (
    <section className="p-10 bg-white min-h-screen overflow-x-hidden">
      <div className="space-y-12">
        {projects.map((project, index) => {
          const direction_img = index % 2 === 0 ? "right" : "left";
          const direction_text = direction_img === "right" ? "left" : "right";

          return (
            <div
              key={project.id}
              className={`p-6 flex flex-col lg:flex-row gap-8 ${
                direction_text === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              <Parallax
                translateX={
                  direction_text === "right"
                    ? [30, -5, "easeOutCirc"]
                    : [-30, 5, "easeOutCirc"]
                }
                shouldAlwaysCompleteAnimation
              >
                <div>
                  <h3 className="text-2xl font-semibold">
                    {project.role} at {project.company}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {project.from} – {project.to}
                  </p>

                  <ul
                    className="mt-4 list-none list-inside space-y-2 px-5"
                    style={{ fontFamily: "Exo" }}
                  >
                    {project.points.map((point) => (
                      <li key={point.id} className="leading-9">
                        <strong>{point.title}:</strong> {point.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </Parallax>

              <ProjectImageRenderer
                images={project?.images}
                direction={direction_img}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
