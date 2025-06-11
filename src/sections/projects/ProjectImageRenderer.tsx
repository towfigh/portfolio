import { useState, useEffect } from "react";
import type { ProjectImage } from "./projects.interface";
import { Parallax } from "react-scroll-parallax";

interface Props {
  images: ProjectImage[];
  direction: "left" | "right";
}

const FADE_DURATION = 300; // in ms

const ProjectImageRenderer = ({ images, direction = "right" }: Props) => {
  const [currImage, setCurrImage] = useState<ProjectImage>(images?.[0]);
  const [opacity, setOpacity] = useState(1);
  const [nextImage, setNextImage] = useState<ProjectImage | null>(null);

  const translateX: any =
    direction === "right"
      ? [100, 10, "easeOutBack"]
      : [-100, -10, "easeOutBack"];

  const changeImage = (img: ProjectImage) => {
    if (img.img === currImage.img) return;

    setOpacity(0);
    setNextImage(img);
  };

  useEffect(() => {
    if (opacity === 0 && nextImage) {
      const timeout = setTimeout(() => {
        setCurrImage(nextImage);
        setOpacity(1);
        setNextImage(null);
      }, FADE_DURATION);

      return () => clearTimeout(timeout);
    }
  }, [opacity, nextImage]);

  return (
    <div className="flex flex-col items-center">
      <Parallax translateX={translateX}>
        <div className="relative w-[300px] h-[150px] lg:w-[700px] lg:h-[450px]">
          <img
            src={`src/assets/img/projects/${currImage?.img}`}
            alt={currImage?.title}
            draggable={false}
            className="absolute transition-opacity duration-300"
            style={{
              top: "25px",
              left: "70px",
              width: "560px",
              height: "330px",
              borderRadius: "2px",
              zIndex: 2,
              opacity: opacity,
            }}
          />

          <img
            src="src/assets/img/laptop.png"
            draggable={false}
            className="absolute top-0 left-0 w-[300px] h-[150px] lg:w-[700px] lg:h-[450px]"
            style={{
              zIndex: 1,
            }}
          />
        </div>

        <p className="text-center font-medium mt-2">{currImage?.title}</p>

        <div className="flex gap-2 mt-4 flex-wrap justify-center">
          {images.map((img) => (
            <img
              key={img.img}
              src={`src/assets/img/projects/${img.img}`}
              alt={img.title}
              title={img.title}
              draggable={false}
              onClick={() => changeImage(img)}
              className={`h-12 w-18 object-cover cursor-pointer border-2 rounded-sm transition-all ${
                currImage?.img === img.img
                  ? "border-black-500 shadow-xl/30 h-12 w-22"
                  : "border-gray-300"
              }`}
            />
          ))}
        </div>
      </Parallax>
    </div>
  );
};

export default ProjectImageRenderer;
