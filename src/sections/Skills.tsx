export default function Skills() {
  const skillsData = [
    { label: "HTML5", image: "html.png" },
    { label: "JavaScript", image: "js.png" },
    { label: "JQuery", image: "jquery.jpg" },
    { label: "ECMA Script", image: "es6.png" },
    { label: "NodeJS", image: "nodejs.png" },
    { label: "ReactJS", image: "react.png" },
    { label: "CSS", image: "css.png" },
    { label: "BootStrap", image: "BootStrap.png" },
    { label: "SemanticUI", image: "SemanticUI.png" },
    { label: "Less", image: "less.png" },
    { label: "Sass", image: "sass.png" },
    { label: "Material UI", image: "matui.png" },
    { label: "Wordpress", image: "wordpress.png" },
    { label: "PHP", image: "php.png" },
    { label: "AJAX", image: "AJAX.png" },
    { label: "Figma", image: "figma.png" },
    { label: "MySQL", image: "mysql.jpg" },
    { label: "MongoDB", image: "mongodb.jpg" },
  ];

  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-20">What I’m Good At?</h2>

      <div className="flex justify-center gap-10 flex-wrap">
        {skillsData.map((skill) => (
          <div className="col-lg-2 col-md-4 col-sm-6">
            <img
              alt="HTML5"
              src={`src/assets/img/Skills/${skill?.image}`}
              className="rounded-full transform transition-transform duration-800 hover:scale-110 cursor-pointer"
              style={{ width: "100px", height: "100px" }}
              draggable={false}
            />
            <p className="mt-3">{skill?.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
