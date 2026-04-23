import React, { useEffect, useState, useMemo } from "react";

export const MeteorEffect = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ⭐ Stars (stable positions)
  const stars = useMemo(() => {
    const createStars = (count, speed) =>
      new Array(count).fill(0).map((_, i) => ({
        id: speed + "-" + i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        speed,
      }));

    return [
      ...createStars(20, 0.02),
      ...createStars(15, 0.05),
      ...createStars(10, 0.1),
    ];
  }, []);

  // ☄️ Meteors (stable positions)
  const meteors = useMemo(() => {
    return new Array(6).fill(0).map((_, i) => ({
      id: i,
      top: Math.random() * 50,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 2 + Math.random() * 3,
    }));
  }, []);

  return (
    <div className="space-container">
      
      {/* ⭐ Stars */}
      {stars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={{
            top: star.top + "%",
            left: star.left + "%",
            transform: `translateY(${scrollY * star.speed}px)`
          }}
        />
      ))}

      {/* ☄️ Meteors */}
      {meteors.map((m) => (
        <span
          key={m.id}
          className="meteor"
          style={{
            top: m.top + "%",
            left: m.left + "%",
            animationDelay: m.delay + "s",
            animationDuration: m.duration + "s"
          }}
        />
      ))}

    </div>
  );
};