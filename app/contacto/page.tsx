const Contacto = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center">
        <div className="text-4xl font-semibold m-6">
          <p>Contactanos</p>
        </div>
        <div className="m-6 font-serif text-2xl">
          Encantados de contactar contigo en todo momento
        </div>
        <div className="bg-white w-full text-yellow-900 flex justify-center m-6 italic font-normal text-base mb-10">
          Datos de contacto Importaciones Dionys Representado por Intercompany &
          Sr de Huánca Disponibles para consultas, compras y solicitudes de
          cotizaciones
        </div>
      </div>

      <div className="flex border mx-14" style={{ height: "100vh" }}>
        <div className="w-3/5">
          <div className="">
            <div className="m-10 ">
              <form action="" className="">
                <div className="flex flex-col border mx-3 my-5  rounded-lg">
                  <label htmlFor="" className="m-3 text-sm">
                    {" "}
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="bg-black m-3"
                    placeholder="Ingresa tu Nombre"
                  />
                </div>
                <div className="flex">
                  <div className="flex flex-col border mx-3 my-5 rounded-lg w-1/2">
                    <label htmlFor="" className="m-3 text-sm">
                      Correo Electronico
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Ingresa tu Correo"
                      className="bg-black m-3"
                    />
                  </div>
                  <div className="flex flex-col border mx-3 my-5 rounded-lg w-1/2">
                    <label htmlFor="" className="m-3 text-sm">
                      Celular
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Ingresa tu Numero"
                      className="bg-black m-3"
                    />
                  </div>
                </div>
                <div className="flex flex-col border mx-3 my-5 rounded-lg">
                  <label htmlFor="" className="m-3 text-sm">
                    Asunto
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Ingresa el Asunto"
                    className="bg-black m-3"
                  />
                </div>
                <div className="flex flex-col border mx-3 my-10 rounded-lg">
                  <label htmlFor="" className="m-3 text-sm">
                    Mensaje
                  </label>
                  <textarea
                    placeholder="Escribenos"
                    className="bg-black m-3"
                  ></textarea>
                </div>
                <div className="mx-3 my-6">
                  <div>
                    <input type="checkbox" name="" id="" />{" "}
                    <label htmlFor="">Aceptar Teminos y Condiciones</label>
                  </div>
                  <div>
                    <input type="checkbox" name="" id="" />{" "}
                    <label htmlFor="">
                      Aceptar recibir notificaciones de actualizaciones en
                      novedades
                    </label>
                  </div>
                </div>
                <div className="border   flex justify-center items-center rounded-lg mx-3">
                  <input type="submit" value="Enviar" className="" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-2/5">
          <div className="border h-full flex justify-center items-start">
            <div className="border ">
              <div className="text-yellow-900 text-4xl font-medium  flex m-10">
                Contactanos
              </div>
              <div className="text-yellow-900 text-lg font-serif italic font-medium  flex m-10">
                Listos para resolver todas tus dudas y hacer ventas contigo en
                todo momento
              </div>
              <div className="ml-20">
                <div className="my-24">
                  <a href="">Telefono: (01) 5050505</a>
                </div>
                <div className="my-24">
                  <a href="">Whatsapp: +51 974377347</a>
                </div>
                <div className="my-24">
                  <a href="">Oficinas: Av Siempreviva 241</a>
                </div>
                <div className="my-24">
                  <a href="">Correo: tusventasfavoritas@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen">
        <div className="h-screen">
          <div className="h-screen">¿ Tienes dudas o preguntas ?</div>
          <div>
            Puedes llamarnos a los siguientes número telefónicos (+51) 1 323
            8817 de nuestra tienda principal en lima o envíanos un email a
            ventas@grupodionys.com.pe donde también podrás solicitar
            cotizaciones
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
