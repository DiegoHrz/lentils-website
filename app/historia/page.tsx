"use client";
import { useEffect, useState } from "react";

const Historia = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter);
    return () => {
      console.log("counter died");
    };
  }, [counter]);

  return (
    <div className="w-screen h-screen">
      <div className="w-screen h-screen">
        <div>Nuestra Historia al alcance de tus manos</div>
        <div>
          Aca le contamos la ardua tarea de brindar las mejores lentejas a la
          meza de cada peruano
        </div>
        <div>
          Empezamos desde pequeños sin tener conocimientos de nada y somos
          dioses jeje
          <div>yes</div>
        </div>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
        <div>{counter}</div>
      </div>
    </div>
  );
};

export default Historia;
