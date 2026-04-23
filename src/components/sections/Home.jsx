import { useEffect, useState } from "react";
import UnicornScene from "unicornstudio-react";

export const Home = () => {
  const titleText = "Hi, I’m Chetan Pawar";
  const descText =
    "Hi, I’m a web developer who enjoys building clean, responsive, and user-friendly websites.";

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    let i = 0;
    let j = 0;

    const typeTitle = () => {
      if (i < titleText.length) {
        setTitle(titleText.slice(0, i + 1));
        i++;
        setTimeout(typeTitle, 80);
      } else {
        typeDesc();
      }
    };

    const typeDesc = () => {
      if (j < descText.length) {
        setDesc(descText.slice(0, j + 1));
        j++;
        setTimeout(typeDesc, 40);
      }
    };

    typeTitle();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      
      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <UnicornScene
          projectId="ZZ6CtOPrxgLyS7bQyUDH"
          width="100%"
          height="100%"
          scale={1}
          dpi={1}
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.9/dist/unicornStudio.umd.js"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">

        {/* TITLE */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          <span className="text-white">{title.slice(0, 7)}</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-300">
            {title.slice(7)}
          </span>
          <span className="animate-pulse">|</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 min-h-[80px] px-2">
          {desc}
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">

          <a
            href="#projects"
            className="w-full sm:w-auto bg-blue-500 text-white py-3 px-6 rounded font-medium transition 
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,139,246,0.4)]"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto border border-blue-500/50 text-blue-400 py-3 px-6 rounded font-medium 
            transition hover:-translate-y-0.5 hover:bg-blue-500/10"
          >
            Contact Me
          </a>

        </div>

        
      
      </div>
    </section>
  );
};