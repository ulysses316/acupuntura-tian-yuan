import React from "react";
import Navbar from "@/components/common/Navbar";
import MainLayout from "@/components/layouts/MainLayout";
import Footer from "@/components/common/Footer";

export default function moxibustion() {
   return (
      <>
         <Navbar />
         <MainLayout className="my-8 min-h-[69dvh] lg:px-52">
            <h1 className="py-3 text-center text-3xl font-bold">Moxibustion</h1>
            <p className="py-3 text-lg">
               Es parte integral de la medicina tradicional china, basada en la estimulación de
               puntos de acupuntura por medio del calor, a través de la combustión de una planta
               llamada {">artemisa vulgaris<"} , con una finalidad terapéutica; genera un efecto
               parecido que el calentamiento con láser, haciendo que los vasos sanguíneos se dilaten
               y lleven todos los componentes sanguíneos a la zona tratada
            </p>
            <div className="flex justify-center py-3">
               <img className="rounded-md w-full xl:w-2/3" src="/services/moxibustion-1.png" alt="" />
            </div>
         </MainLayout>
         <Footer />
      </>
   );
}
