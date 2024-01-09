import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" flex justify-between p-2 w-screen fixed bg-amber-950 border bg-opacity-95 ">
      <div className="text-lg font-medium hover:cursor-pointer mt-3 ">
        <Link href="" className="">
          Lentejas Sol del Norte
        </Link>
      </div>
      <div className="border -mt-2 -mb-2">
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
            <li className="mt-3  mb-3  font-light">
              Recetas y Cocina
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
