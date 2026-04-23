import { useState, useEffect, useRef } from "react";

export const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 🧠 SIMPLE FRONTEND LOGIC (NO API)
  const getBotReply = (text) => {
    const msg = text.toLowerCase();

    if (msg.includes("portfolio")) {
      return "This portfolio is built using React and modern UI animations.";
    }

    if (msg.includes("cloud")) {
      return "Cloud project is a file storage UI with upload and management features.";
    }

    if (msg.includes("chat")) {
      return "Chat project is a real-time messaging UI concept.";
    }

    if (msg.includes("ecommerce") || msg.includes("store")) {
      return "E-commerce project includes product listing and cart UI design.";
    }

    if (msg.includes("skills")) {
      return "Skills include React, JavaScript, Tailwind CSS, and UI design.";
    }

    return "I can only provide information about portfolio projects.";
  };

  const sendMessage = (text = input) => {
    if (!text.trim()) return;

    const userMsg = { role: "user", text };
    setMessages((prev) => [...prev, userMsg]);

    setInput("");
    setLoading(true);

    setTimeout(() => {
      const reply = getBotReply(text);

      setMessages((prev) => [
        ...prev,
        { role: "bot", text: reply },
      ]);

      setLoading(false);
    }, 500);
  };

  const quickAsk = (q) => sendMessage(q);

  return (
    <>
      {/* Floating Button (GLASS ONLY) */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 w-14 h-14 rounded-full
        bg-white/10 backdrop-blur-xl border border-white/20
        text-white text-2xl shadow-md hover:scale-110 transition"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-5 w-80 h-[420px]
        bg-white/10 backdrop-blur-2xl border border-white/20
        rounded-2xl shadow-xl flex flex-col overflow-hidden text-white">

          {/* Header */}
          <div className="p-3 font-medium border-b border-white/10 backdrop-blur-xl">
            Portfolio Assistant
          </div>

          {/* Quick Buttons */}
          <div className="flex gap-1 p-2 flex-wrap">
            {["Cloud", "Chat", "Portfolio", "Store"].map((item) => (
              <button
                key={item}
                onClick={() => quickAsk(item)}
                className="text-xs px-2 py-1 rounded-md
                bg-white/5 border border-white/10
                hover:bg-white/10 transition"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Messages */}
          <div className="flex-1 p-2 overflow-y-auto space-y-2">

            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-xl text-sm max-w-[75%]
                  bg-white/10 border border-white/10 backdrop-blur-md`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="text-xs text-white/50 animate-pulse">
                Typing...
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-2 border-t border-white/10 flex gap-2">

            <input
              className="flex-1 bg-white/5 text-white placeholder-white/40
              border border-white/10 px-3 py-1 rounded-md
              focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about projects..."
            />

            <button
              onClick={() => sendMessage()}
              className="bg-white/10 border border-white/10
              px-3 rounded-md hover:bg-white/20 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};