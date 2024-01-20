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

      <div className="flex" style={{ height: "75vh" }}>
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
                  <textarea placeholder="Escribenos"></textarea>
                </div>
                <div className="border">
                  <input type="submit" value="Enviar" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div>
            <div>Contactanos</div>
            <div>
              <div>Telefono</div>
              <div>whatsapp</div>
              <div>Oficinas</div>
              <div>Correo de ventas</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen">
        <div>
          <div>¿ Tienes dudas o preguntas ?</div>
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
