import React from "react";
import Navbar from "@/components/common/Navbar";
import MainLayout from "@/components/layouts/MainLayout";
import Footer from "@/components/common/Footer";

export default function fisicos() {
   return (
      <>
         <Navbar />
         <MainLayout className="my-8 min-h-[69dvh] lg:px-52">
            <h1 className="py-3 text-center text-3xl font-bold">Medios físicos</h1>
            <p className="py-3 text-lg">
               Son aquellos elementos físicos externos al cuerpo que el profesional de la salud
               ocupa para intervenir en el paciente con finalidad terapéutica; van a controlar el
               proceso inflamatorio, favorecen la recuperación de tejidos y ayudan a mejorar la
               funcionalidad del órgano o extremidad que ha sido afectada.
            </p>
            <div className="flex justify-center py-3">
               <img
                  className="rounded-md xl:w-1/3"
                  src="/services/medios-fisicos.png"
                  alt=""
               />
            </div>
            <p className="py-3 text-lg">
               Son dirigidos, dosificados, y especializados hacia cada paciente de acuerdo a sus
               necesidades
            </p>

            <ul className="list-disc text-lg pl-4">
               <li>Tens</li>
               <li>Radiofrecuencia</li>
               <li>Ultrasonido</li>
               <li>Compresas</li>
               <li>Electroacupuntura</li>
            </ul>
         </MainLayout>
         <Footer />
      </>
   );
}
