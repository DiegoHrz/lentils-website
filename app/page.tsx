import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
  //   e.preventDefault()
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="-mt-24 w-screen">
        <img src="./lentils.webp" alt="lentils" className="w-screen" />
      </div>
      <div className="w-screen">
        <h1 className="text-2xl">Nuestra Marca</h1>
        <div className="flex justify-between ">
          <div className="w-1/2">
            imagen
            <img src="" alt="" />
          </div>
          <div className="flex flex-col w-1/2">
            <div>e</div>
            <div>
              Bienvenido a Lentejas Sol del Norte, tu proveedor de confianza
              para las lentejas más frescas y sabrosas. Nuestra dedicación a la
              calidad y autenticidad nos convierte en la elección perfecta para
              los amantes de la buena comida. Descubre la diferencia con Sol del
              Norte.
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen">
        <h2>Calidad / Certificados del producto o marca</h2>
        <div>
          En Sol del Norte, nos comprometemos a ofrecer lentejas de la más alta
          calidad. Cada lenteja que llega a tu mesa ha pasado por rigurosos
          controles de calidad y está respaldada por certificaciones que
          garantizan su pureza y frescura. Cuidamos cada detalle, desde el campo
          hasta tu plato.
        </div>
      </div>
      <div className="w-screen bg-white">
        <div className="flex flex-row-reverse justify-center items-center">
          <div className="w-1/2">
            <img src="./lentils-benefits.png" alt="" />
          </div>
          <div className="text-gray-700 w-1/2 border flex justify-center">
            <div className="w-2/3 border">
              <h1 className="text-gray-700 text-5xl font-medium border">
                Nutricion
              </h1>
              <p className="pt-3 text-xl font-normal">
                Descubre los beneficios nutricionales de nuestras lentejas:
                ricas en proteínas, fibra y nutrientes esenciales. ¡Bienestar
                natural con Sol del Norte!
              </p>
              <br />
              <p>Conoce como prepararlas:</p>
              <p>
                <Link href="/recetas" className="text-sky-600 hover:underline">
                  Recetas y Cocina ➤
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen h-screen bg-gray-50 flex ">
        <div className="flex w-2/6 h-5/6 justify-center items-center   ">
          <div className="flex justify-center  overflow-hidden items-center">
            <img src="/credit-card.png" alt="" className="h-1/2" />
          </div>
        </div>

        <div className="w-4/6 h-5/6 flex justify-center items-center">
          <div className=" flex flex-col justify-center items-center text-center w-4/5 ">
            <div className="flex justify-center w-fit h-fit items-center">
              <h2 className="text-black text-4xl font-medium  flex justify-center">
                Solicita tu cotizacion
              </h2>
            </div>
            <div className="text-gray-950 text-xl pt-3">
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
                    <input type="text" name="" id="" className="border rounded-lg h-8 focus:border-sky-600"  />
                  </div>
                  <div className="  flex flex-col">
                    <label htmlFor="" className="text-xl mb-2 font-medium">
                      Empresa
                    </label>
                    <input type="text" name="" id="" className="border rounded-lg h-8" />
                  </div>
                  <div className="  flex flex-col">
                    <label htmlFor="" className="text-xl mb-2 font-medium">
                      Correo
                    </label>
                    <input type="email" name="" id="" className="border rounded-lg h-8" />
                  </div>
                  <div className="  flex flex-col">
                    <label htmlFor="" className="text-xl mb-2 font-medium">
                      Toneladas
                    </label>
                    <input type="text" name="" id="" className="border rounded-lg h-8" />
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

      <div className="w-screen">
        <h2>Contactanos</h2>
        <div>
          ¿Tienes preguntas o comentarios? Estamos aquí para ayudarte. Ponte en
          contacto con nuestro equipo amigable y profesional. Ya sea que
          necesites más información sobre nuestros productos o desees discutir
          una colaboración, estamos listos para escucharte.
        </div>
        <button className="border">
          <Link href="/contacto">Contacta ya!</Link>
        </button>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
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
