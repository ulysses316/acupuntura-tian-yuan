import React from "react";
import Navbar from "@/components/common/Navbar";
import MainLayout from "@/components/layouts/MainLayout";
import Footer from "@/components/common/Footer";

export default function acupuntura() {
   return (
      <>
         <Navbar />
         <MainLayout className="my-8 lg:px-52 min-h-[69dvh]">
            <h1 className="text-center text-3xl font-bold py-3">Auriculoterapia</h1>
            <div className="flex items-center justify-center gap-16 py-2">
               <img
                  className="aspect-square w-24 md:w-56 rounded-full"
                  src="/services/auriculoterapia-1.png"
                  alt=""
               />
               <img
                  className="aspect-square w-24 md:w-56 rounded-full"
                  src="/services/auriculoterapia-2.png"
                  alt=""
               />
            </div>
            <p className="text-lg py-2">
               Es una modalidad de tratamiento de medicina tradicional china en la cual la
               superficie externa de la oreja o aurícula es estimulada con el objetivo de aliviar
               patologías en otras regiones del cuerpo, en donde se puede utilizar balines, agujas,
               semillas o tachuelas.
            </p>
            <p className="text-lg py-2">
               La respuesta se genera a través del plexo nervioso cervical, nervio vago, y
               trigémino.
            </p>
            <p className="text-lg py-2">
               Coadyuvante para insomnio, control del apetito, control de peso, estrés, dolor
               articular y muscular, dolor de cabeza, esguinces, ansiedad, parálisis facial, entre
               otras más.
            </p>
         </MainLayout>
         <Footer />
      </>
   );
}
