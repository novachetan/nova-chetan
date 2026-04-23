import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, {
  opacity: 0,
  y: 200,
  duration: 2,
});
  }, []);

  return (
    <h1
      ref={textRef}
      className="text-4xl font-bold"
    >
      Welcome to My Portfolio
    </h1>
  );
};