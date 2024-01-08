import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" flex justify-between p-5 border">
      <div className="text-2xl font-semibold hover:cursor-pointer mt-3 ">
        <Link href="" className="">
          Lentejas Sol del Norte
        </Link>
      </div>
      <div className="border">
        <ul className="flex mr-3 ">
          <Link
            href="/"
            className="group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mr-20"
          >
            <li className="mt-3 mb-3 text-2xl font-semibold ">Inicio</li>
          </Link>
          <Link
            href="/historia"
            className="group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mr-20"
          >
            <li className="mt-3 mb-3 text-2xl font-semibold">Historia</li>
          </Link>
          <Link
            href="/productos"
            className="group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mr-20"
          >
            <li className="mt-3  mb-3 text-2xl font-semibold">Productos</li>
          </Link>
          <Link
            href="/contacto"
            className="group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mr-20"
          >
            <li className="mt-3  mb-3 text-2xl font-semibold">Contacto</li>
          </Link>
          <Link
            href="/recetas"
            className="group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mr-10"
          >
            <li className="mt-3  mb-3 text-2xl font-semibold">
              Recetas y Cocina
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
