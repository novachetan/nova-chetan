import {
  FaReact,
  FaVuejs,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiDocker,
} from "react-icons/si";

export const About = () => {
  const frontendSkills = [
    { name: "React", icon: <FaReact /> },
    { name: "Vue", icon: <FaVuejs /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "RESTful API", icon: <FaJs /> },
  ];

  const designSkills = [
    { name: "Figma", icon: <FaFigma /> },
    { name: "UI/UX", icon: <FaFigma /> },
    { name: "Framer Motion", icon: <FaReact /> },
    { name: "GSAP", icon: <FaJs /> },
  ];

  // Card styles
  const cardBase =
    "group relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2";

  const glowEffect =
    "before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-r before:from-blue-500/40 before:via-cyan-400/30 before:to-purple-500/40 before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100 before:-z-10";

  const chipStyle =
    "flex items-center gap-2 px-3 py-1 rounded-full text-sm transition-all hover:scale-105";

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-5xl mx-auto w-full">

        {/* Title */}
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>

        {/* Main Card */}
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg">

             <p className="text-gray-300 text-center mb-10 leading-relaxed text-sm md:text-base">
                  I’m a passionate web developer focused on building 
                 <span className="glow"> modern</span>, 
               <span className="glow"> responsive</span>, and 
               user-friendly applications. I enjoy working with 
               <span className="glow"> new technologies</span>, 
               creating <span className="glow"> smooth animations</span>, 
               and improving user experience.
             </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Frontend */}
            <div className={`${cardBase} ${glowEffect} hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]`}>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, index) => (
                  <span
                    key={index}
                    className={`${chipStyle} bg-blue-500/10 text-blue-400 hover:bg-blue-500/20`}
                  >
                    {tech.icon}
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className={`${cardBase} ${glowEffect} hover:shadow-[0_0_35px_rgba(34,197,94,0.25)]`}>
              <h3 className="text-xl font-semibold mb-4 text-green-400">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, index) => (
                  <span
                    key={index}
                    className={`${chipStyle} bg-green-500/10 text-green-400 hover:bg-green-500/20`}
                  >
                    {tech.icon}
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Design */}
            <div className={`${cardBase} ${glowEffect} hover:shadow-[0_0_35px_rgba(236,72,153,0.25)]`}>
              <h3 className="text-xl font-semibold mb-4 text-pink-400">
                Design
              </h3>
              <div className="flex flex-wrap gap-2">
                {designSkills.map((tech, index) => (
                  <span
                    key={index}
                    className={`${chipStyle} bg-pink-500/10 text-pink-400 hover:bg-pink-500/20`}
                  >
                    {tech.icon}
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Education + Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

          {/* Education */}
          <div className={`${cardBase} ${glowEffect} hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]`}>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Education
            </h3>
            <ul className="text-gray-300 space-y-2 text-sm md:text-base">
              <li>
                <strong>B.E in Computer Engineering</strong>
                <br />
                 Gangamai College of Engineering • 2023 – Present
              </li>
            </ul>
          </div>

          {/* Experience */}
          <div className={`${cardBase} ${glowEffect} hover:shadow-[0_0_35px_rgba(34,197,94,0.25)]`}>
            <h3 className="text-xl font-semibold mb-4 text-green-400">
              Experience
            </h3>
            <ul className="text-gray-300 space-y-2 text-sm md:text-base">
              <li>
                Freelance Web Developer
                <br />
                Built responsive websites and UI components
              </li>
              <li>
                Personal Projects
                <br />
                Portfolio, animations, and modern UI experiments
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};