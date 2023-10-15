import React from "react";
import Navbar from "@/components/common/Navbar";
import MainLayout from "@/components/layouts/MainLayout";
import Footer from "@/components/common/Footer";
import { BsTelephoneFill } from "react-icons/bs";

export default function acupuntura() {
   return (
      <>
         <Navbar />
         <MainLayout className="my-8 lg:px-52">
            <h1 className="text-center text-3xl font-bold">Acupuntura</h1>
            <div className="mt-8 flex flex-col items-center justify-center gap-6 py-3">
               <img
                  className="aspect-square w-56 rounded-full border"
                  src="/services/20231014-acupuntura-1.png"
                  alt=""
               />
               <p className="text-lg">
                  La acupuntura es una terapia, que pertenece a uno de los 7 pilares de la medicina
                  tradicional china, donde se utilizan agujas especiales que se aplican en puntos
                  específicos para modular el organismo y generar una respuesta con una finalidad
                  terapéutica.
               </p>
            </div>
            <p className="py-3 text-lg">
               Según la OMS, sirve como tratamiento curativo para 43 enfermedades y coadyuvante para
               más de 300.
            </p>
            <p className="py-3 text-lg">
               Es una medicina con una historia de mas de 3 mil años, originaria de China; sin
               embargo, en la época moderna cuenta con diversas investigaciones científicas que
               respaldan su eficacia.
            </p>
            <p className="py-3 text-lg">Entre las enfermedades que puede tratar son:</p>
            
            {/* <div className="flex justify-center py-3">
               <img
                  className="w-full max-w-[500px]"
                  src="/services/tratamientos-acupuntura.png"
                  alt=""
               />
            </div> */}

            <div className="flex flex-col items-center justify-center py-3">
               <div className="flex items-center justify-center gap-4">
                  <img className="w-10 sm:w-16" src="/logo.png" alt="" />
                  <h2 className="text-center text-xl sm:text-2xl font-bold text-primary-blue-alter">
                     Terapias integrativas Tian Yuan
                  </h2>
                  <img className="w-12 sm:w-20" src="/logo2.png" alt="" />
               </div>
               <h3 className="text-xl font-bold">Acupuntura</h3>
               <p className="py-3 text-center font-light uppercase">
                  Entre las enfermedades que puede tratar son:
               </p>

               <div className="flex flex-col gap-4 xl:w-1/2">
                  <div className="rounded-full border-4 border-primary-blue-alter px-4 py-2 text-center font-bold">
                     <p className="text-sm lg:text-lg">
                        Osteomioarticulares: Dolor muscular, Dolor en articulaciones, Esguinces,
                        Ciática, Lumbalgia, Cervicalgia, Artritis reumatoide, Gota, Fibromialgia,
                        Hombro doloroso, Dolor rodilla.
                     </p>
                  </div>
                  <div className="rounded-full border-4 border-primary-blue-alter px-4 py-2 text-center font-bold">
                     <p className="text-sm lg:text-lg">
                        Digestivas: Colitis, Gastritis, Reflujo, Gastroesofagico, Hernias,
                        Estreñimiento
                     </p>
                  </div>
                  <div className="rounded-full border-4 border-primary-blue-alter px-4 py-2 text-center font-bold">
                     <p className="text-sm lg:text-lg">
                        Ginecológicas: Dismenorrea (dolor o cólicos menstruales), Quistes benignos
                        en mama y útero, Síndrome de ovario poliquístico, Síntomas de Menopausia.
                     </p>
                  </div>
                  <div className="rounded-full border-4 border-primary-blue-alter px-4 py-2 text-center font-bold">
                     <p className="text-sm lg:text-lg">
                        Metabólicas: Diabetes, Síndrome metabólico, Obesidad.
                     </p>
                  </div>
                  <div className="rounded-full border-4 border-primary-blue-alter px-4 py-2 text-center font-bold">
                     <p className="text-sm lg:text-lg">
                        Cardiovasculares y respiratorias: Hipertensión arterial, Asma, Insuficiencia
                        venosa, Secuela de COVID
                     </p>
                  </div>
                  <div className="rounded-full border-4 border-primary-blue-alter px-4 py-2 text-center font-bold">
                     <p className="text-base lg:text-lg">
                        Cefalea (dolor de cabeza) Secuelas de accidente cerebral vascular Insomnio.
                        Estrés, Ansiedad y Depresión. Parálisis facial periférica. Control de peso.
                        Enfermedades pediátricas. Etc..
                     </p>
                  </div>
               </div>
               <div className="flex items-center gap-4 py-3">
                  <BsTelephoneFill className="text-3xl text-primary-blue-alter" />
                  <div>
                     <a className="text-center" href="tel:5558263542">
                        <h3 className="text-md font-bold md:text-xl">Solicita tu cita al</h3>
                        <h3 className="text-md font-bold md:text-xl">(55) 5826-3542</h3>
                     </a>
                  </div>
               </div>
               <p className="text-md text-center font-bold md:text-xl">
                  @terapias intregraticas Tian Yuan
               </p>
            </div>
         </MainLayout>
         <Footer />
      </>
   );
}
