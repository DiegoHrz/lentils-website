const Contacto = () => {
  return (
    <div>
      <div>
        <p>Contactanos</p>
      </div>
      <div>Descripcion de contactanos</div>
      <div className="" style={{ height: "75vh" }}>
        form
        <div className="w-1/2">
          <div>
            <div>
              <form action="" className="">
                <div className="flex flex-col">
                  <label htmlFor=""> Nombre Completo</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Correo Electronico</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Celular</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Asunto</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Mensaje</label>
                  <input type="text" name="" id="" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
      <div>Dudas o preguntas</div>
    </div>
  );
};

export default Contacto;
