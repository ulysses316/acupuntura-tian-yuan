import React from "react";
import Navbar from "@/components/common/Navbar";
import MainLayout from "@/components/layouts/MainLayout";
import Footer from "@/components/common/Footer";

export default function fisioterapia() {
   return (
      <>
         <Navbar />
         <MainLayout className="my-8 min-h-[69dvh] lg:px-52">
            <h1 className="py-3 text-center text-3xl font-bold">
               Fisioterapia y rehabilitación físca
            </h1>
            <p className="py-3 text-center text-lg">
               &quot;El arte y la ciencia del tratamiento por medio del ejercicio terapéutico,
               calor, frío, luz, agua, masaje y electricidad&quot; OMS
            </p>
            <div className="flex justify-center py-3">
               <img
                  className="w-full rounded-md xl:w-2/3"
                  src="/services/fisioterapia-1.webp"
                  alt=""
               />
            </div>
            <p className="py-3 text-lg">
               La fisioterapia tiene como objetivo mejorar la función articular, muscular y
               nerviosa, con la finalidad de recuperar y aumentar la calidad de vida de las
               personas; en las esferas de promoción, prevención, tratamiento o intervención,
               habilitación y rehabilitación. Estas esferas abarcan el bienestar físico,
               psicológico, emocional y social de un individuo.
            </p>
            <div className="flex justify-center py-3">
               <img
                  className="w-full rounded-md xl:w-2/3"
                  src="/services/fisioterapia-2.jpg"
                  alt=""
               />
            </div>
            <p className="py-3 text-center text-2xl font-bold">Tratamiento para lesiones como</p>
            <div className="flex items-center justify-center gap-64 py-3">
               <ul className="list-disc text-lg">
                  <li>Esguinces</li>
                  <li>Luxaciones</li>
                  <li>Fracturas</li>
                  <li>Artrosis</li>
                  <li>Bursitis</li>
                  <li>Tendinitis</li>
                  <li>Osteoporosis</li>
                  <li>Artritis reumatoide</li>
               </ul>

               <ul className="list-disc text-lg">
                  <li>Cervicalgias (dolor de cuello)</li>
                  <li>Ciátalgia</li>
                  <li>Lesiones deportivas</li>
                  <li>Parálisis facial.</li>
                  <li>Lesiones neuromusculares</li>
                  <li>Fibromialgia</li>
                  <li>Lumbalgias (dolor de espalda baja)</li>
               </ul>
            </div>
            <p className="py-3 text-center text-lg">
               En pacientes geriátricos ayuda a mejorar la capacidad de ser independientes para
               realizar sus actividades diarias, mejora el equilibrio y coordinación para evitar
               caídas y accidentes derivados de ellas, mejora su flexibilidad y retarda la pérdida
               de masa muscular
            </p>
         </MainLayout>
         <Footer />
      </>
   );
}
