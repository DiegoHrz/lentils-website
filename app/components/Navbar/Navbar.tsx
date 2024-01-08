import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" flex justify-between p-5 bg-">
      <div className="text-2xl font-semibold hover:cursor-pointer">
        <Link href=''>Lentejas Sol del Norte</Link>
        </div>
      <div className="">
        <ul className="flex mr-3">
          <Link href="/" className="roup rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <li className="mr-20 mb-3 text-2xl font-semibold g">Inicio</li>
          </Link>
          <Link href="/historia">
            <li className="mr-20 mb-3 text-2xl font-semibold">Historia</li>
          </Link>
          <Link href="/productos">
            <li className="mr-20 mb-3 text-2xl font-semibold">Productos</li>
          </Link>
          <Link href="/contacto">
            <li className="mr-20 mb-3 text-2xl font-semibold">Contacto</li>
          </Link>
          <Link href="/recetas">
            <li className="mr-10 mb-3 text-2xl font-semibold">Recetas y Cocina</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
