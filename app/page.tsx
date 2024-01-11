import Image from "next/image";
import Link from "next/link";
import ParallaxBannerWithText from "./components/ParallaxBanner/ParallaxBannerWithText";
import ParallaxBanner from "./components/ParallaxBanner/ParallaxBanner";

export default function Home() {
  // const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
  //   e.preventDefault()
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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

      <div style={{ height: "40vh" }} className="w-screen bg-zinc-100  flex r">
        <div className=" w-2/5  ">
          <div className=" h-full flex justify-center">
            <div className="flex flex-col justify-center items-start  h-full ">
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

              <div className="w-1/4 text-yellow-900 border rounded bg-slate-100 bg-opacity-40">
                {" "}
                <div className="flex flex-col justify-center items-center text-center font-medium">
                  {" "}
                  <div className="italic font-medium text-2xl">Calidad Premium:</div> Destaca la
                  calidad superior de tus lentejas, seleccionadas y cultivadas
                  cuidadosamente.
                </div>
              </div>

              <div className="w-1/4 text-yellow-900 border rounded bg-slate-100 bg-opacity-40">
                <div className="flex flex-col justify-center items-center text-center font-medium">
                  <div className="italic font-medium text-2xl">Origen Confiable:</div>Resalta la
                  autenticidad y origen confiable de tus productos para generar
                  confianza.
                </div>
              </div>

              <div className="w-1/4 text-yellow-900 border rounded bg-slate-100 bg-opacity-40">
                <div className="flex flex-col justify-center items-center text-center font-medium">
                  <div className="italic font-medium text-2xl text-yellow-900">Atractivas para Minoristas:</div>{" "}
                  Menciona características atractivas, como empaque llamativo y
                  versatilidad en la cocina.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nutricion */}
      <div
        className="w-screen bg-white flex  "
        style={{ height: "66.6666vh" }}
      >
        <div className="text-gray-700 w-1/2  flex justify-center items-center">
          <div className="w-3/4 ">
            <h1 className="text-yellow-900 text-5xl font-medium ">
              Nutricion
            </h1>
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

      {/* //Contacto */}
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
      </div>

      <div className=" mt-96 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
