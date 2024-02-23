import Link from "next/link";
import ParallaxBannerWithText from "../components/ParallaxBanner/ParallaxBannerWithText";

export default function Home() {
  // const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
  //   e.preventDefault()
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Inicio */}
      {/* <div className="-mt-24 w-screen h-screen">
        <img
          src="./lentils-banner-inicio.jpeg"
          alt="lentils"
          className="w-screen h-fit "
        />
      </div> */}
      <ParallaxBannerWithText />

      {/* Marca */}

      <div className="w-screen md:h-[40vh] bg-zinc-100  flex flex-col md:flex-row gap-6  md:gap-0 py-12 lg:py-0">
        <div className="w-full  md:w-2/5 flex justify-center items-center">
          <div className=" h-full flex justify-center w-3/5">
            <div className="flex flex-col justify-center items-center md:items-start  h-full ">
              <div className="text-2xl mb-3 text-yellow-400 ">★★★★★</div>
              <div className="text-slate-600 text-4xl font-medium  ">
                1,000+
              </div>
              <div className="text-slate-600 text-4xl font-medium">
                5-star reviews
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen md:w-3/5 flex justify-center items-center ">
          <div className="w-full flex flex-col justify-center items-center h-full gap-4 md:gap-0">
            <div className="flex justify-center items-center mb-2 w-full ">
              <div className="w-11/12 text-yellow-900 text-lg font-serif italic text-center ">
                {" "}
                El Mejor Distribuidor Mayoristas de Menestras en el Perú
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              <div className="text-neutral-500 text-md md:text-lg  text-center w-5/6 md:w-full">
                ¡Bienvenido a Lentejas Sol del Norte! Tu proveedor de confianza
                para las lentejas más frescas y sabrosas. Descubre la diferencia
                con Sol del Norte.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calidad */}
      <div
        style={{ backgroundImage: 'url("/banner-2.jpeg")' }}
        className="w-screen bg-cover bg-center flex flex-col md:h-[66vh] py-12 lg:py-0"
      >
        <div className="flex md:flex-row justify-center items-center h-full">
          <div className="flex flex-col justify-center items-center">
            <div className="w-full text-center text-yellow-900 text-3xl font-semibold md:font-normal md:text-4xl mb-12">
              Calidad de Nuestras Menestras
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-14 ">
              {/* Calidad - Calidad Premium  */}
              <div className="md:w-1/4 flex flex-col justify-center items-center md:block ">
                <div className="flex justify-center h-1/3  mb-3">
                  <div className="flex justify-center h-full w-1/4 md:w-1/2  object-cover">
                    <img src="/supply-chain.png" alt="" />
                  </div>
                </div>

                <div className="w-5/6 md:w-full text-yellow-900 border rounded-lg  bg-slate-100 bg-opacity-50 md:bg-opacity-40">
                  <div className="flex flex-col justify-center items-center text-center font-medium">
                    {" "}
                    <div className="italic font-medium text-2xl text-amber-950 md:text-amber-900">
                      Calidad Premium:
                    </div>
                    <div>
                      Destaca la calidad superior de tus lentejas, seleccionadas
                      y cultivadas cuidadosamente.
                    </div>
                  </div>
                </div>
              </div>

              {/* Calidad - Origen Confiable  */}
              <div className="md:w-1/4 flex flex-col justify-center items-center md:block ">
                <div className="flex justify-center h-1/3  mb-3">
                  <div className="flex justify-center h-full w-1/4 md:w-1/2 object-cover">
                    <img src="/planting.png" alt="" />
                  </div>
                </div>

                <div className="w-5/6 md:w-full text-yellow-900 border rounded-lg  bg-slate-100 bg-opacity-50 md:bg-opacity-40">
                  <div className="flex flex-col justify-center items-center text-center font-medium">
                    <div className="italic font-medium text-2xl text-amber-950 md:text-amber-900">
                      Origen Confiable:
                    </div>
                    <div className="pb-0 lg:pb-6 ">
                      Resalta la autenticidad y origen confiable de tus
                      productos para generar confianza.
                    </div>
                  </div>
                </div>
              </div>

              {/* Calidad - Atractivo para minoristas  */}
              <div className="md:w-1/4 flex flex-col justify-center items-center md:block ">
                <div className="flex justify-center h-1/3  mb-3">
                  <div className="flex justify-center h-full w-1/4 md:w-1/2  object-cover">
                    <img src="/value-chain.png" alt="" />
                  </div>
                </div>

                <div className="w-5/6 md:w-full  border rounded-lg bg-slate-100 bg-opacity-50 md:bg-opacity-40">
                  <div className="flex flex-col justify-center items-center text-center font-medium">
                    <div className="italic font-medium text-2xl text-amber-950 md:text-amber-900">
                      Atractivas para Minoristas:
                    </div>
                    <div className="text-yellow-900">
                      Menciona características atractivas, como empaque
                      llamativo y versatilidad en la cocina.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cotizacion */}
      <div className="w-screen bg-gray-50 flex md:h-[66.6666vh]">
        <div className="flex md:w-2/6 md:h-5/6 justify-center items-center">
          <div className="flex justify-center  overflow-hidden items-center">
            <img
              src="/credit-card.png"
              alt=""
              className="h-1/2 hidden md:block"
            />
          </div>
        </div>

        <div className="md:w-4/6 h-full flex justify-center items-center py-16 md:py-0 border">
          <div className="h-5/6 flex flex-col justify-center items-center text-center w-full border ">
            <div className="text-yellow-900 text-4xl font-medium flex justify-center items-center pb-10 md:pb-0">
              Solicita tu cotizacion
            </div>
            <div className="flex justify-center  overflow-hidden items-center">
              <img
                src="/credit-card.png"
                alt=""
                className="h-1/2 w-11/12 md:hidden mb-10 md:m-0"
              />
            </div>
            <div className="text-neutral-500 text-base md:text-xl pt-3 w-full">
              ¡Solicita tu cotización hoy! Descubre precios competitivos para
              las lentejas de Sol del Norte. Completa el formulario y conoce
              cómo ser tu proveedor de confianza.
            </div>
            <div className="flex justify-between items-center  w-screen md:w-11/12">
              <form action="" className="text-gray-900 pt-16  w-full ">
                <div className="flex flex-col md:flex-row justify-around items-center md:gap-2 border">
                  <div className=" flex flex-col w-4/5 md:w-full">
                    <label htmlFor="" className="text-xl mb-2 font-medium">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="input-text"
                      id="input-nombre"
                      className="border-2 rounded-lg h-8 focus:border-sky-600 w-full"
                    />
                  </div>
                  <div className="  flex flex-col w-4/5 md:w-full">
                    <label htmlFor="" className="text-xl mb-2 font-medium">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="border-2 rounded-lg h-8 w-full"
                    />
                  </div>
                  <div className="  flex flex-col w-4/5 md:w-full">
                    <label htmlFor="" className="text-xl mb-2 font-medium">
                      Correo
                    </label>
                    <input
                      type="email"
                      name=""
                      id=""
                      className="border-2 rounded-lg h-8 w-full"
                    />
                  </div>
                  <div className="  flex flex-col w-4/5 md:w-full">
                    <label htmlFor="" className="text-xl mb-2 font-medium">
                      Toneladas
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="border-2 rounded-lg h-8 w-full"
                    />
                  </div>
                </div>
                <div className=" flex justify-center items-center text-center w-screen md:w-full">
                  <button className="w-4/5 md:w-full  border-2 text-sky-600 border-sky-600 mt-6 text-lg rounded-lg font-medium hover:bg-sky-600 hover:text-white">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* GIF DE AGRICULTURA */}
      <div className="relative  w-screen h-[66.666vh]">
        {/* Imagen de fondo */}
        <div className="object-cover h-full w-full">
          <img
            src="/giphylentils.gif"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>

        {/* Contenido encima de la imagen */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white ">
          <div className="text-4xl font-bold pb-6 md:pb-0 -mx-6 md:mx-0">
            Lentejas Sol del Norte
          </div>
          <div className="text-md md:text-lg -px md:px-0 -mx-14 md:mx-0">
            Calidad hasta en los pequeños detalles
          </div>
        </div>
      </div>

      {/* Nutricion */}
      <div className="w-screen bg-white flex flex-col md:flex-row md:h-[66.66vh] py-10 md:py-0 ">
        <div className="text-gray-700 w-screen md:w-1/2  flex flex-col md:flex-row justify-center items-center ">
          <div className="md:w-3/4 text-center md:text-start">
            <div className="text-yellow-900 text-4xl md:text-5xl font-medium pb-5 md:pb-0">
              Nutricion
            </div>
            <p className="pt-3 text-base md:text-xl font-normal text-neutral-500 px-10 md:px-0 pb-8 md:pb-0">
              Descubre los beneficios nutricionales de nuestras lentejas: ricas
              en proteínas, fibra y nutrientes esenciales. ¡Bienestar natural
              con Sol del Norte!
            </p>
            <br />
            <div className="hidden md:block">
              <p className="  italic">Conoce como prepararlas:</p>
              <p>
                <Link
                  href="/recetas"
                  className="text-sky-600 cursor-pointer hover:underline"
                >
                  Recetas y Cocina ➤
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col md:flex-row justify-center items-center md:w-1/2 pb-8 md:pb-0">
          <div className="  overflow-hidden w-[85vw] md:w-4/6 h-full flex justify-center items-center ">
            <img
              src="./lentils-benefits.png"
              className="pb-14 md:pb-0"
              alt=""
            />
          </div>
          <div className="flex gap-4 md:hidden">
            <p className="text-black  italic">Conoce como prepararlas:</p>
            <p>
              <Link
                href="/recetas"
                className="text-sky-600 cursor-pointer underline "
              >
                Recetas y Cocina
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* //Contacto  
      <div className="w-screen bg" style={{ height: "66.6666vh" }}>
        <div
          className="bg-cover bg-center h-full "
          style={{ backgroundImage: 'url("/legumes.jpeg")' }}
        >
          <div className="h-full w-full  flex justify-center">
            <div className=" flex flex-col justify-center items-center w-1/2 h-full ">
              <div className="flex justify-center items-center ">
                <h2 className=" text-6xl font-medium  flex justify-center text-gray-50">
                  Contactanos
                </h2>
              </div>
              <div className=" text-xl pt-3 flex justify-center bg-slate-600 border bg-opacity-65 rounded-lg mt-6 text-center">
                ¿Tienes preguntas o comentarios? Estamos aquí para ayudarte.
                Contáctanos para obtener más información sobre nuestros
                productos o discutir una colaboración. Estamos listos para
                escucharte.
              </div>
              <div className="w-1/2">
                <button className="w-full   text-sky-600  mt-6 text-lg font-medium  hover:underline hover:cursor-pointer">
                  <Link href="/contacto" className="w-full">
                    Contacta ➤
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
}
