import { Parallax } from "react-scroll-parallax";

export default function Hero() {
  return (
    <section className="relative h-screen w-full text-white overflow-hidden">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/img/hero.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-75" />
      </div>

      {/* Foreground content with parallax */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 mt-20 text-center">
        <Parallax speed={-20}>
          <p className="text-3xl mb-4">
            You can imagine it, I can make it real...
          </p>
          <p className="text-md mb-20 lg:mb-48">
            Turning your ideas into beautiful, functional web experiences
          </p>
          <h1 className="text-8xl font-bold mb-8">Hi, I'm Tofigh</h1>
          <p className="text-xl">A passionate frontend developer</p>
        </Parallax>
      </div>
    </section>
  );
}
