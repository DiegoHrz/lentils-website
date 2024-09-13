"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import menuHamburguesaBlanco from "../../public/menu-hamburguesa-blanco.svg";
import menuHamburguesaMarron from "../../public/menu-hamburguesa-brown.svg";

const Navbar: React.FC = () => {
  const path: string = usePathname();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);


  const [menuOpenned, setMenuOpenned] = useState<boolean>(false);


  useEffect(() => {
    const handleScroll = () => {
      //se obtiene la posición de scroll vertical
      const scrollPosition: number = window.scrollY;

      setIsScrolled(scrollPosition > 0);
    };
    //Cada vez que se genere el evento de scroll (el usuario scrollee) se ejecuta el handle
    window.addEventListener("scroll", handleScroll);

    // Limpiar el event listener al desmontar el componente como cuando uno navega a otra pagina
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //useEffect para que se de el reload de frente a la parte superior de la pantalla
  useEffect(() => {
    const handleReload = () => window.scrollTo(0, 0);

    // Añade el manejador de eventos para antes de la recarga de la página
    window.addEventListener("beforeunload", handleReload);

    // Limpia el manejador de eventos al desmontar el componente
    return () => window.removeEventListener("beforeunload", handleReload);
  }, []);

  const homepage: boolean = path === "/";

  const fixedHomePage: string = homepage ? "fixed" : isScrolled ? "fixed" : "";

  const navbarStyle: string = isScrolled
    ? " bg-white text-amber-800"
    : "bg-transparent text-white bg-opacity-95 hover:bg-white hover:text-brown hover:text-amber-800";

  const topContainerStyle: React.CSSProperties = {
    marginTop: isScrolled ? "500px" : "0", // Ajusta según sea necesario
  };

  //funcion para q al darle clic al icono de menu hamburguesa se vuelva en true y este se abra
  const handlerMenu = () => {
    setMenuOpenned(true);
  };

  return (
    <div>
      <div className={`${fixedHomePage} z-50 `}>
        <div className="flex justify-center items-center bg-yellow-900 w-screen font-light text-xs p-2 text-white">
          Envios a toda Latinoamerica , Canada y USA.
        </div>
        <div
          className={`flex justify-between p-3 w-screen ${navbarStyle} bg-opacity-95 m-0 ${fixedHomePage}`}
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
            {/* HIDDEN PARA QUE EL MENU NO SE VEA Y LG:FLEX PARA Q SE VEA FLEX EN DISPOSITIVOS LARGOS */}
            <ul className="hidden lg:flex  lg:mr-3 ">
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

          <div className="lg:hidden cursor-pointer" onClick={handlerMenu}>
            {isScrolled ? (
              <Image
                src={menuHamburguesaMarron}
                alt="Menu Button"
                className="lg:hidden cursor-pointer"
              />
            ) : (
              <Image
                src={menuHamburguesaBlanco}
                alt="Menu Button"
                className="lg:hidden cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
      <div style={{ height: isScrolled ? "103px" : "0" }}></div>
    </div>
  );
};

export default Navbar;
