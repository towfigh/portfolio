import { Parallax } from "react-scroll-parallax";

export default function Introduction() {
  return (
    <section className="py-15 bg-gray-900 text-white text-center">
      <Parallax scale={[0.8, 1, "easeOut"]}>
        <h2 className="text-3xl px-15 leading-12">
          Dedicated Frontend Developer with 8 years of experience in crafting
          intuitive and responsive user interfaces. Proficient in JavaScript,
          React, and modern web development tools. Skilled in leveraging design
          frameworks, state management techniques, and API integration to
          deliver high-quality web solutions. Strong collaborator with a passion
          for creating exceptional digital experiences.
        </h2>
      </Parallax>
    </section>
  );
}
