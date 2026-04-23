export const ProjectCard = ({ title, description, image, tech }) => {
  return (
    <div className="group relative w-full max-w-sm rounded-2xl overflow-hidden backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300">

      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 text-white">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-3">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-white/20 border border-white/30"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Button */}
        <button className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-medium hover:opacity-90 transition">
          View Project
        </button>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition"></div>
    </div>
  );
};