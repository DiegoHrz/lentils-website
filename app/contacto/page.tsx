import { useForm } from "react-hook-form";

const Contacto = () => {
  useForm
  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center items-center">
        <div className="text-yellow-900 text-5xl font-medium mt-14 ">
          <p>Contactanos</p>
        </div>
        <div className="m-6 w-screen font-serif text-md md:text-xl text-neutral-500  md:block flex justify-center items-center text-center">
          <div className="w-4/5 md:w-screen flex justify-center items-center ">
            Encantados de contactar contigo en todo momento
          </div>
        </div>
        <div className="bg-white w-4/5 md:w-full text-center text-yellow-900 flex justify-center m-6 italic font-normal text-sm md:text-base mb-10 ">
          Datos de contacto Importaciones Dionys Representado por Intercompany &
          Sr de Huánca Disponibles para consultas, compras y solicitudes de
          cotizaciones.
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

      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch  rounded-lg lg:mx-14 md:h-[100vh]">
        <div className="w-11/12 lg:w-4/6 bg-neutral-50  rounded-2xl">
          <div className="  rounded-lg w-full">
            <div className="lg:m-14 ">
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
                <div className="flex gap-1 md:gap-0">
                  <div className="flex flex-col border ml-3 lg:mx-3 my-5 rounded-lg w-3/5 lg:w-2/3 bg-white text-black">
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
                  <div className="flex flex-col border mx-3 my-5 rounded-lg w-1/3 lg:w-1/3 bg-white text-black">
                    <label htmlFor="" className="m-3 text-sm ">
                      Celular
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Tu Numero"
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
                    cols={5}
                    rows={3}
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
                  <input
                    type="submit"
                    value="Enviar"
                    className="border-2 w-full text-sky-600 border-sky-600 text-lg rounded-lg font-medium hover:bg-sky-600 hover:text-white"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-3/6">
          <div className=" h-full flex justify-center items-start mt-28">
            <div className=" ">
              <div className="text-red-800 text-2xl font-medium  flex border-b-4 w-1/6 ml-10 border-amber-800">
                Encuentranos
              </div>
              <div className="text-yellow-900 text-lg font-serif italic font-medium  flex m-10">
                Listos para resolver todas tus dudas y hacer ventas contigo en
                todo momento
              </div>
              <div className="ml-12 text-black flex flex-col gap-8">
                <div className="">
                  <a href="" className="flex justify-start items-center">
                    <div className="border rounded-full w-14 h-14 mr-4 flex justify-center items-center text-xl">
                      ☎️
                    </div>{" "}
                    Telefono: (01) 5050505
                  </a>
                </div>
                <div className=" ">
                  <a href="" className="flex justify-start items-center">
                    {" "}
                    <div className="border rounded-full w-14 h-14 mr-4 flex justify-center items-center text-xl">
                      ✆
                    </div>{" "}
                    Whatsapp: +51 974377347
                  </a>
                </div>
                <div className="">
                  <a href="" className="flex justify-start items-center">
                    <div className=" border rounded-full w-14 h-14 mr-4 flex justify-center items-center text-xl">
                      📍
                    </div>
                    Oficinas: Av Siempreviva 241
                  </a>
                </div>
                <div className="">
                  <a href="" className="flex justify-start items-center">
                    <div className=" border rounded-full w-14 h-14 mr-4 flex justify-center items-center text-xl">
                      ✉️
                    </div>
                    Correo: tusventasfavoritas@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[25vh] border-red-500 border-2">
        <div className=" text-black flex flex-col h-full">
          <div className="h-2/5 flex justify-center items-center">
            ¿Tienes más dudas o preguntas?
          </div>
          <div className="text-black h-3/5">
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
