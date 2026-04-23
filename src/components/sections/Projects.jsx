import {RevealOnScroll} from "../RevealOnScroll";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";

export const Projects = () => {
  const projects = [
    {
      title: "Cloud Platform",
      desc: "Scalable cloud platform with secure APIs and real-time monitoring.",
      tech: ["React", "Node.js", "AWS", "MongoDB"],
      image: img3,
      link: "#",
    },
    {
      title: "E-commerce App",
      desc: "Modern shopping experience with payments and authentication.",
      tech: ["React", "Stripe", "Firebase"],
      image: img2,
      link: "#",
    },
    {
      title: "Portfolio Website",
      desc: "Interactive portfolio with animations and smooth UI.",
      tech: ["React", "Tailwind", "Framer Motion"],
      image: img4,
      link: "#",
    },
    {
      title: "Chat Application",
      desc: "Real-time chat app with socket communication.",
      tech: ["Node.js", "Socket.io", "Express"],
      image: img1,
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      <RevealOnScroll/>
      {/* 🌑 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black -z-10"></div>

      {/* 🌑 Dark overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl overflow-hidden 
              hover:-translate-y-2 hover:shadow-xl hover:border-blue-500/30 transition-all duration-300"
            >

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  View Project →
                </a>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};