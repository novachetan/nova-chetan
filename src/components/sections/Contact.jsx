import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formData, import.meta.env.VITE_PUBLIC_KEY)
      .then(() => {
        toast.success("Message sent successfully 🚀");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        toast.error("Something went wrong ❌");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-black"
    >
      <Toaster position="top-right" />

      <div className="px-4 w-full max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* FORM */}
          <form
            className="space-y-6 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-lg"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              placeholder="Your Name"
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              placeholder="your@email.com"
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              placeholder="Your Message..."
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 py-3 rounded font-medium transition 
              hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message "}
            </button>
          </form>

          {/* SOCIAL LINKS */}
          <div className="flex flex-col justify-center gap-4">

            <a
              href="https://github.com/novachetan"
              target="_blank"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10
              hover:bg-white/10 hover:scale-[1.02] transition group"
            >
              <FaGithub className="text-2xl text-white group-hover:text-gray-300" />
              <div>
                <p className="text-white font-medium">GitHub</p>
                <p className="text-gray-400 text-sm">See my projects</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/chetan-pawar-a3990439a"
              target="_blank"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10
              hover:bg-white/10 hover:scale-[1.02] transition group"
            >
              <FaLinkedin className="text-2xl text-blue-400" />
              <div>
                <p className="text-white font-medium">LinkedIn</p>
                <p className="text-gray-400 text-sm">Connect with me</p>
              </div>
            </a>

            <a
              href="mailto:cp9265343480@email.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10
              hover:bg-white/10 hover:scale-[1.02] transition group"
            >
              <FaEnvelope className="text-2xl text-cyan-400" />
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-gray-400 text-sm">Send me a message</p>
              </div>
            </a>
           <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    px-6 py-3
    text-white
    font-medium
    rounded-xl
    border border-white/10
    bg-white/5
    backdrop-blur-md
    shadow-[0_8px_30px_rgba(0,0,0,0.2)]
    transition-all duration-300
    hover:bg-white/10
    hover:border-white/20
    hover:shadow-[0_8px_40px_rgba(59,130,246,0.25)]
    hover:-translate-y-0.5
  "
>
  Download Resume
</a>

          </div>
        </div>
      </div>
    </section>
  );
};