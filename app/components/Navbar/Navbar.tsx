import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" flex justify-between p-1 w-screen fixed bg-amber-950  bg-opacity-95 m-0 ">
      <div className="flex items-center m-0">
        <div className="flex flex-col justify-center items-center text-center text-lg font-medium hover:cursor-pointer  h-fit m-0">
          <h1>
            <Link href="" className="">
              Lentejas Sol del Norte
            </Link>
          </h1>
        </div>
      </div>
      <div className=" m-0">
        <ul className="flex  mr-3 ">
          <Link
            href="/"
            className="group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mr-20"
          >
            <li className="mt-3  mb-3  font-light">Inicio</li>
          </Link>
          <Link
            href="/historia"
            className="group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mr-20"
          >
            <li className="mt-3  mb-3  font-light">Historia</li>
          </Link>
          <Link
            href="/productos"
            className="group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mr-20"
          >
            <li className="mt-3  mb-3  font-light">Productos</li>
          </Link>
          <Link
            href="/contacto"
            className="group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mr-20"
          >
            <li className="mt-3  mb-3  font-light">Contacto</li>
          </Link>
          <Link
            href="/recetas"
            className="group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mr-10"
          >
            <li className="mt-3  mb-3  font-light">Recetas y Cocina</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
