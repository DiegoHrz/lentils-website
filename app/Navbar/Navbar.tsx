const Navbar = () => {
  return (
    <div className=" flex justify-between m-10 bg-stone-700">
      <div>Lentejas Sol del Norte</div>
      <div>
        <ul className="flex mr-3">
          <li className="mr-20">Inicio</li>
          <li className="mr-20">Historia</li>
          <li className="mr-20">Productos</li>
          <li className="mr-20">Contacto</li>
          <li className="mr-10">Recetas y Cocina</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
