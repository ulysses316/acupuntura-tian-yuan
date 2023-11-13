import React from "react";
import Navbar from "@/components/common/Navbar";
import MainLayout from "@/components/layouts/MainLayout";
import Footer from "@/components/common/Footer";
import Head from "next/head";
export default function acupuntura() {
   return (
      <>
         <Head>
            <title>Auriculoterapia</title>
            <meta name="description" content="Es una modalidad de tratamiento de medicina tradicional china en la cual la superficie externa de la oreja o aurícula es estimulada con el objetivo de aliviar patologías en otras regiones del cuerpo, en donde se puede utilizar balines, agujas, semillas o tachuelas." />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Auriculoterapia | Terapias TianYuan" />
            <meta property="og:description" content="Es una modalidad de tratamiento de medicina tradicional china en la cual la superficie externa de la oreja o aurícula es estimulada con el objetivo de aliviar patologías en otras regiones del cuerpo, en donde se puede utilizar balines, agujas, semillas o tachuelas." />
            <meta property="og:image" content="/services/auriculoterapia-1.png" />

            <meta name="twitter:title" content="Auriculoterapia | Terapias TianYuan" />
            <meta name="twitter:description" content="Es una modalidad de tratamiento de medicina tradicional china en la cual la superficie externa de la oreja o aurícula es estimulada con el objetivo de aliviar patologías en otras regiones del cuerpo, en donde se puede utilizar balines, agujas, semillas o tachuelas." />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:widgets:new-embed-design" content="on" />
            <meta name="twitter:image:src" content="/services/auriculoterapia-1.png" />
         </Head>

         <Navbar />
         <MainLayout className="my-8 lg:px-52">
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
