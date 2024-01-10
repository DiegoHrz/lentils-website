"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

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
    <div className="relative h-screen w-screen overflow-hidden -mt-24 -z-20">
      <div
        className="absolute top-0 transform -translate-x-1/2"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img
          src="/lentils.webp"
          alt=""
          className="w-screen h-screen opacity-80"
        />
        {/* <Image
          src="/legumes.jpeg"
          alt="Parallax Image"
          width={1200}
          height={800}
        /> */}
      </div>
      <div className="flex items-center justify-center h-screen text-center w-full">
        <div className="bg-transparent z-10 text-white" >
          <div className="text-4xl font-semibold">Journey on</div>
          <div>Premium travel goods for journeys near and far.</div>
          <div>Designed in Canada. Made for the world.</div>
          <div> <button type="button" className=" border-2 rounded-lg hover:text-sky-600 hover:border-sky-600 hover:cursor-pointer">Contactanos</button></div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxBanner;
