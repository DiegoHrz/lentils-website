"use client";
import { useEffect, useState } from "react";

const ParallaxBanner = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen w-screen  -mt-24">
      <div
        className="absolute top-0 transform -translate-x-1/2"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img
          src="/lentils.webp"
          alt=""
          className="w-screen h-screen "
        />
        {/* <Image
          src="/legumes.jpeg"
          alt="Parallax Image"
          width={1200}
          height={800}
        /> */}
      </div>
    </div>
  );
};

export default ParallaxBanner;
