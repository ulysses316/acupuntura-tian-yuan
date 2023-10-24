import React from "react";
import Navbar from "@/components/common/Navbar";
import MainLayout from "@/components/layouts/MainLayout";
import Footer from "@/components/common/Footer";

export default function acupuntura() {
   return (
      <>
         <Navbar />
         <MainLayout className="my-8 min-h-[69dvh] lg:px-52">
            <h1 className="py-3 text-center text-3xl font-bold">Auriculoterapia</h1>
            <div className="flex flex-col xl:flex-row justify-center gap-3 py-3">
               <img
                  className="w-full rounded-md xl:w-1/3"
                  src="/services/auriculoterapia-1.png"
                  alt=""
               />
               <img
                  className="w-full rounded-lg xl:w-1/3"
                  src="/services/auriculoterapia-2.png"
                  alt=""
               />
            </div>
            
            
            <p className="py-2 text-lg">
               Es una modalidad de tratamiento de medicina tradicional china en la cual la
               superficie externa de la oreja o aurícula es estimulada con el objetivo de aliviar
               patologías en otras regiones del cuerpo, en donde se puede utilizar balines, agujas,
               semillas o tachuelas.
            </p>
            <p className="py-2 text-lg">
               La respuesta se genera a través del plexo nervioso cervical, nervio vago, y
               trigémino.
            </p>
            <p className="py-2 text-lg">
               Coadyuvante para insomnio, control del apetito, control de peso, estrés, dolor
               articular y muscular, dolor de cabeza, esguinces, ansiedad, parálisis facial, entre
               otras más.
            </p>
         </MainLayout>
         <Footer />
      </>
   );
}
