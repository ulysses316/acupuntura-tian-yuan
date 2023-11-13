import React from "react";
import Navbar from "@/components/common/Navbar";
import MainLayout from "@/components/layouts/MainLayout";
import Footer from "@/components/common/Footer";
import Head from "next/head";
export default function moxibustion() {
   return (
      <>
         <Head>
            <title>Moxibustion</title>
            <meta name="description" content="Es parte integral de la medicina tradicional china, basada en la estimulación de puntos de acupuntura por medio del calor." />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Moxibustion | Terapias TianYuan" />
            <meta property="og:description" content="Es parte integral de la medicina tradicional china, basada en la estimulación de puntos de acupuntura por medio del calor." />
            <meta property="og:image" content="/services/moxibustion-1.png" />

            <meta name="twitter:title" content="Moxibustion | Terapias TianYuan" />
            <meta name="twitter:description" content="Es parte integral de la medicina tradicional china, basada en la estimulación de puntos de acupuntura por medio del calor." />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:widgets:new-embed-design" content="on" />
            <meta name="twitter:image:src" content="/services/moxibustion-1.png" />
         </Head>

         <Navbar />
         <MainLayout className="my-8 lg:px-52">
            <h1 className="py-3 text-center text-3xl font-bold">Moxibustion</h1>
            <p className="py-3 text-justify text-lg">
               Es parte integral de la medicina tradicional china, basada en la estimulación de
               puntos de acupuntura por medio del calor, a través de la combustión de una planta
               llamada {">artemisa vulgaris<"} , con una finalidad terapéutica; genera un efecto
               parecido que el calentamiento con láser, haciendo que los vasos sanguíneos se dilaten
               y lleven todos los componentes sanguíneos a la zona tratada
            </p>
            <div className="flex justify-center py-3">
               <img
                  className="w-full rounded-md xl:w-2/3"
                  src="/services/moxibustion-1.png"
                  alt=""
               />
            </div>
         </MainLayout>
         <Footer />
      </>
   );
}
