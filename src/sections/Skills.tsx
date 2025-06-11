import { Parallax } from "react-scroll-parallax";

export default function Skills() {
  const skillsData = [
    { label: "HTML5", image: "html.png" },
    { label: "JavaScript", image: "js.png" },
    { label: "JQuery", image: "jquery.jpg" },
    { label: "ECMA Script", image: "es6.png" },
    { label: "NodeJS", image: "nodejs.png" },
    { label: "ReactJS", image: "react.png" },
    { label: "CSS", image: "css.png" },
    { label: "BootStrap", image: "bootstrap.png" },
    { label: "SemanticUI", image: "semanticui.png" },
    { label: "Less", image: "less.png" },
    { label: "Sass", image: "sass.png" },
    { label: "Material UI", image: "matui.png" },
    { label: "Wordpress", image: "wordpress.png" },
    { label: "PHP", image: "php.png" },
    { label: "AJAX", image: "ajax.png" },
    { label: "Figma", image: "figma.png" },
    { label: "MySQL", image: "mysql.jpg" },
    { label: "MongoDB", image: "mongodb.jpg" },
  ];

  return (
    <section className="py-20 bg-gray-100 text-center">
      <Parallax translateX={[-5, 0]} opacity={[0, 1.2]}>
        <h2 className="text-3xl font-bold mb-20">What I’m Good At?</h2>
      </Parallax>

      <div className="flex justify-center gap-10 flex-wrap">
        {skillsData.map((skill) => (
          <div className="col-lg-2 col-md-4 col-sm-6" key={skill?.image}>
            <Parallax scale={[0.1, 1, "easeOutBack"]}>
              <img
                alt={skill?.label}
                src={`/img/skills/${skill?.image}`}
                className="rounded-full transform transition-transform duration-800 hover:scale-110 cursor-pointer"
                style={{ width: "100px", height: "100px" }}
                draggable={false}
              />
            </Parallax>
            <p className="mt-3" style={{ fontFamily: "Exo" }}>
              {skill?.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
