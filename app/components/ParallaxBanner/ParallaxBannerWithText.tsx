"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const ParallaxBannerWithText = () => {
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
    <div className="relative h-screen w-screen overflow-hidden -mt-24 ">
      {/*div que quiero que reciba el -z-20*/}
      <div
        className="absolute top-0 transform -translate-x-1/2 -z-20"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img
          src="/lentils-hand.avif"
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
      {/*div que no quiero que reciba el -z-20*/}
      <div className="flex items-center justify-center h-screen text-center w-full z-50">
        <div className="bg-transparent z-50 text-white">
          <div className="text-4xl font-semibold m-6">
            {" "}
            Lentejas Sol del Norte
          </div>
          <div className="m-6 font-serif text-2xl">
            La Calidad perfecta de Lentejas que toda familia necesita.
          </div>
          <div className="m-6 italic font-normal text-base mb-10">
            Hecho en el Peru. Para el mundo.
          </div>
          <div className="hover:cursor-pointer animate-pulse">
            {" "}
            <button
              type="button"
              className=" border-2 rounded-md pl-12 pr-12 pt-4 pb-4 text-sm font-semibold hover:bg-sky-600 hover:border-sky-600 cursor-pointer "
            ><Link href='/contacto' className="cursor-pointer">
              CONTACTANOS</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxBannerWithText;
