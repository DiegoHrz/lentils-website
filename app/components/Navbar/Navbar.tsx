"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  // State para el scroll
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      //se obtiene la posición de scroll vertical
      const scrollPosition = window.scrollY;

      setIsScrolled(scrollPosition > 0);
    };
    //Cada vez que se genere el evento de scroll (el usuario scrollee) se ejecuta el handle
    window.addEventListener("scroll", handleScroll);

    // Limpiar el event listener al desmontar el componente como cuando uno navega a otra pagina
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const homepage:boolean = path === "/";

  const navbarStyleHomePage = homepage ? "" : "mt-16";

  const navbarStyle = isScrolled
    ? " bg-white text-brown text-amber-800"
    : "bg-transparent bg-opacity-95 hover:bg-white hover:text-brown hover:text-amber-800";

  return (
    <div className="fixed z-50">
      <div className="flex justify-center items-center bg-yellow-900 w-screen font-light text-xs p-2 ">
        Envios a toda Latinoamerica , Canada y USA.
      </div>
      <div
        className={`flex justify-between p-3 w-screen fixed ${navbarStyle} bg-opacity-95 m-0 ${navbarStyleHomePage}`}
      >
        <div className="flex items-center m-0">
          <div className="flex flex-col justify-center items-center text-center text-lg font-medium hover:cursor-pointer  h-fit m-0">
            <h1>
              <Link href="" className="text-sm">
                LENTEJAS DEL SOL DEL NORTE
              </Link>
            </h1>
          </div>
        </div>
        <div className=" m-0">
          <ul className="flex  mr-3 ">
            <Link
              href="/"
              className="group rounded-lg border border-transparent transition-colors  hover:underline mr-20"
            >
              <li className="mt-3  mb-3  font-medium text-sm hover:text-amber-950">
                INICIO
              </li>
            </Link>
            <Link
              href="/historia"
              className="group rounded-lg border border-transparent transition-colors hover:underline mr-20"
            >
              <li className="mt-3  mb-3  font-medium text-sm hover:text-amber-950">
                HISTORIA
              </li>
            </Link>
            <Link
              href="/productos"
              className="group rounded-lg border border-transparent transition-colors  hover:underline mr-20 hover:border-b-text-sky-600"
            >
              <li className="mt-3  mb-3  font-medium text-sm hover:text-amber-950">
                PRODUCTOS
              </li>
            </Link>
            <Link
              href="/contacto"
              className="group rounded-lg border border-transparent transition-colors  hover:underline mr-20"
            >
              <li className="mt-3  mb-3  font-medium text-sm hover:text-amber-950">
                CONTACTO
              </li>
            </Link>
            <Link
              href="/recetas"
              className="group rounded-lg border border-transparent transition-colors  hover:underline mr-20"
            >
              <li className="mt-3  mb-3  font-medium text-sm hover:text-amber-950">
                RECETAS Y COCINA
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
