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

      <div style={{ height: "40vh" }} className="w-screen bg-zinc-100  flex flex-col md:flex-row">
        <div className=" w-2/5  ">
          <div className=" h-full flex justify-center">
            <div className="flex flex-col justify-center items-start  h-full ">
              <div className="text-2xl mb-3 text-yellow-400 lg:block">
                ★★★★★
              </div>
              <div className="text-slate-600 text-4xl font-medium  ">
                1,000+
              </div>
              <div className="text-slate-600 text-4xl font-medium">
                5-star reviews
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/5 flex justify-center items-center">
          <div className=" flex flex-col justify-center items-center h-full m-2 ">
            <div className="flex justify-center items-center mb-2">
              <h1 className="text-yellow-900 text-lg font-serif italic">
                {" "}
                El Mejor Distribuidor Mayoristas de Menestras en el Perú
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <h2 className="text-neutral-500 text-lg  text-center">
                ¡Bienvenido a Lentejas Sol del Norte! Tu proveedor de confianza
                para las lentejas más frescas y sabrosas. Descubre la diferencia
                con Sol del Norte.
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Calidad */}
      <div
        style={{ height: "66vh", backgroundImage: 'url("/banner-2.jpeg")' }}
        className="w-screen bg-cover bg-center flex flex-col"
      >
        <div className="flex justify-center items-center h-full">
          <div className="flex-col justify-center items-center">
            <div className="w-full text-center text-yellow-900 text-4xl mb-12">
              Calidad de Nuestras Menestras
            </div>
            <div className="flex justify-center gap-14 ">
              {/* Calidad - Calidad Premium  */}
              <div className="w-1/4 ">
                <div className="flex justify-center h-1/3  mb-3">
                  <div className="flex justify-center h-full w-1/2  object-cover">
                    <img src="/supply-chain.png" alt="" />
                  </div>
                </div>

                <div className="w-full h-fit text-yellow-900 border rounded bg-slate-100 bg-opacity-40">
                  <div className="flex flex-col justify-center items-center text-center font-medium">
                    {" "}
                    <div className="italic font-medium text-2xl ">
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
              <div className="w-1/4 ">
                <div className="flex justify-center h-1/3  mb-3">
                  <div className="flex justify-center h-full w-1/2  object-cover">
                    <img src="/planting.png" alt="" />
                  </div>
                </div>

                <div className="w-full h-fit text-yellow-900 border rounded bg-slate-100 bg-opacity-40">
                  <div className="flex flex-col justify-center items-center text-center font-medium">
                    <div className="italic font-medium text-2xl ">
                      Origen Confiable:
                    </div>
                    <div>
                      Resalta la autenticidad y origen confiable de tus
                      productos para generar confianza.
                    </div>
                  </div>
                </div>
              </div>

              {/* Calidad - Atractivo para minoristas  */}
              <div className="w-1/4 ">
                <div className="flex justify-center h-1/3  mb-3">
                  <div className="flex justify-center h-full w-1/2  object-cover">
                    <img src="/value-chain.png" alt="" />
                  </div>
                </div>

                <div className="w-full h-fit text-yellow-900 border rounded bg-slate-100 bg-opacity-40">
                  <div className="flex flex-col justify-center items-center text-center font-medium">
                    <div className="italic font-medium text-2xl ">
                      Atractivas para Minoristas:
                    </div>
                    <div>
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
      <div
        style={{ height: "66.6666vh" }}
        className="w-screen bg-gray-50 flex "
      >
        <div className="flex w-2/6 h-5/6 justify-center items-center   ">
          <div className="flex justify-center  overflow-hidden items-center">
            <img src="/credit-card.png" alt="" className="h-1/2" />
          </div>
        </div>

        <div className="w-4/6 h-5/6 flex justify-center items-center">
          <div className=" flex flex-col justify-center items-center text-center w-4/5 ">
            <div className="flex justify-center w-fit h-fit items-center">
              <h2 className="text-yellow-900 text-4xl font-medium  flex justify-center">
                Solicita tu cotizacion
              </h2>
            </div>
            <div className="text-neutral-500 text-xl pt-3">
              <p>
                ¡Solicita tu cotización hoy! Descubre precios competitivos para
                las lentejas de Sol del Norte. Completa el formulario y conoce
                cómo ser tu proveedor de confianza.
              </p>
            </div>
            <div className="flex justify-between items-center   w-full">
              <form action="" className="text-gray-900 pt-16  w-full">
                <div className="flex justify-around  w-full ">
                  <div className=" flex flex-col">
                    <label htmlFor="" className="text-xl mb-2 font-medium">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="input-text"
                      id="input-nombre"
                      className="border-2 rounded-lg h-8 focus:border-sky-600"
                    />
                  </div>
                  <div className="  flex flex-col">
                    <label htmlFor="" className="text-xl mb-2 font-medium">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="border-2 rounded-lg h-8"
                    />
                  </div>
                  <div className="  flex flex-col">
                    <label htmlFor="" className="text-xl mb-2 font-medium">
                      Correo
                    </label>
                    <input
                      type="email"
                      name=""
                      id=""
                      className="border-2 rounded-lg h-8"
                    />
                  </div>
                  <div className="  flex flex-col">
                    <label htmlFor="" className="text-xl mb-2 font-medium">
                      Toneladas
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="border-2 rounded-lg h-8"
                    />
                  </div>
                </div>
                <div className=" flex justify-center items-center text-center">
                  <button className="w-full  border-2 text-sky-600 border-sky-600 mt-6 text-lg rounded-lg font-medium hover:bg-sky-600 hover:text-white">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* GIF DE AGRICULTURA */}
      <div className="relative  w-screen" style={{ height: "66.6666vh" }}>
        {/* Imagen de fondo */}
        <div className="object-cover h-full w-full">
          <img
            src="/giphylentils.gif"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>

        {/* Contenido encima de la imagen */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-4xl font-bold">Lentejas Sol del Norte</h1>
          <p className="text-lg">Calidad hasta en los pequeños detalles</p>
        </div>
      </div>

      {/* Nutricion */}
      <div className="w-screen bg-white flex  " style={{ height: "66.6666vh" }}>
        <div className="text-gray-700 w-1/2  flex justify-center items-center">
          <div className="w-3/4 ">
            <h1 className="text-yellow-900 text-5xl font-medium ">Nutricion</h1>
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
          </div>
        </div>

        <div className=" flex justify-center w-1/2 ">
          <div className="  overflow-hidden  w-4/6 h-full flex justify-center items-center ">
            <img src="./lentils-benefits.png" className="  " alt="" />
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
