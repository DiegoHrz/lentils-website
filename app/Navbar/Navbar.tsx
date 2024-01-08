import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" flex justify-between p-7 bg-stone-700">
      <div>Lentejas Sol del Norte</div>
      <div>
        <ul className="flex mr-3">
          <Link href="/">
            <li className="mr-20">Inicio</li>
          </Link>
          <Link href="">
            <li className="mr-20">Historia</li>
          </Link>
          <Link href="">
            <li className="mr-20">Productos</li>
          </Link>
          <Link href="">
            <li className="mr-20">Contacto</li>
          </Link>
          <Link href="">
            <li className="mr-10">Recetas y Cocina</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
