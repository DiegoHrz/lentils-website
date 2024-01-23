const Contacto = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center items-center">
        <div className="text-yellow-900 text-5xl font-medium mt-14 ">
          <p>Contactanos</p>
        </div>
        <div className="m-6 font-serif text-xl text-neutral-500">
          Encantados de contactar contigo en todo momento
        </div>
        <div className="bg-white w-full text-yellow-900 flex justify-center m-6 italic font-normal text-base mb-10">
          Datos de contacto Importaciones Dionys Representado por Intercompany &
          Sr de Huánca Disponibles para consultas, compras y solicitudes de
          cotizaciones
        </div>
      </div>

      {/* <h1 className="text-yellow-900 text-5xl font-medium ">Nutricion</h1>
            <p className="pt-3 text-xl font-normal text-neutral-500 ">
              Descubre los beneficios nutricionales de nuestras lentejas: ricas
              en proteínas, fibra y nutrientes esenciales. ¡Bienestar natural
              con Sol del Norte!
            </p>
            <br />
            <p className="  italic">Conoce como prepararlas:</p>
            <p>
              <Link
                href="/recetas"
                className="text-sky-600 cursor-pointer hover:underline"
              >
                Recetas y Cocina ➤
              </Link>
            </p>
          </div> */}

      <div className="flex  rounded-lg mx-14" style={{ height: "100vh" }}>
        <div className="w-3/5 bg-neutral-50  rounded-2xl">
          <div className="  rounded-lg">
            <div className="m-10 ">
              <form action="" className="">
                <div className="flex flex-col border mx-3 my-5  rounded-lg bg-white text-black">
                  <label htmlFor="" className="m-3 text-sm">
                    {" "}
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className=" m-3"
                    placeholder="Ingresa tu Nombre"
                  />
                </div>
                <div className="flex">
                  <div className="flex flex-col border mx-3 my-5 rounded-lg w-1/2 bg-white text-black">
                    <label htmlFor="" className="m-3 text-sm ">
                      Correo Electronico
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Ingresa tu Correo"
                      className=" m-3"
                    />
                  </div>
                  <div className="flex flex-col border mx-3 my-5 rounded-lg w-1/2 bg-white text-black">
                    <label htmlFor="" className="m-3 text-sm ">
                      Celular
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Ingresa tu Numero"
                      className=" m-3"
                    />
                  </div>
                </div>
                <div className="flex flex-col border mx-3 my-5 rounded-lg bg-white text-black">
                  <label htmlFor="" className="m-3 text-sm ">
                    Asunto
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Ingresa el Asunto"
                    className=" m-3"
                  />
                </div>
                <div className="flex flex-col border mx-3 my-10 rounded-lg bg-white text-black">
                  <label htmlFor="" className="m-3 text-sm ">
                    Mensaje
                  </label>
                  <textarea
                    placeholder="Escribenos"
                    className=" m-3"
                  ></textarea>
                </div>
                <div className="mx-3 my-6">
                  <div>
                    <input type="checkbox" name="" id="" />{" "}
                    <label htmlFor="" className="text-black text-sm">
                      Aceptar Teminos y Condiciones
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" name="" id="" />{" "}
                    <label htmlFor="" className="text-black text-sm">
                      Aceptar recibir notificaciones de actualizaciones en
                      novedades
                    </label>
                  </div>
                </div>
                <div className="border   flex justify-center items-center rounded-lg mx-3 bg-white text-black">
                  <input type="submit" value="Enviar" className="" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-2/5">
          <div className=" h-full flex justify-center items-start">
            <div className=" ">
              <div className="text-yellow-900 text-4xl font-medium  flex m-10">
                Contactanos
              </div>
              <div className="text-yellow-900 text-lg font-serif italic font-medium  flex m-10">
                Listos para resolver todas tus dudas y hacer ventas contigo en
                todo momento
              </div>
              <div className="ml-20 text-black">
                <div className="my-20">
                  <a href="" className="flex justify-start items-center"><div className="border rounded-full w-10 h-10 mr-4 flex justify-center items-center">☎️</div>  Telefono: (01) 5050505</a>
                </div>
                <div className="my-20">
                  <a href="" className="flex justify-start items-center"> <div className="border rounded-full w-10 h-10 mr-4 flex justify-center items-center">✆</div> Whatsapp: +51 974377347</a>
                </div>
                <div className="my-20">
                  <a href="" className="flex justify-start items-center"><div className=" border rounded-full w-10 h-10 mr-4 flex justify-center items-center">📍</div>Oficinas: Av Siempreviva 241</a>
                </div>
                <div className="my-20">
                  <a href="" className="flex justify-start items-center"><div className=" border rounded-full w-10 h-10 mr-4 flex justify-center items-center">✉️</div>Correo: tusventasfavoritas@gmail.com</a>
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
