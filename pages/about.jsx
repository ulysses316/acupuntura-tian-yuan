import React from "react";
import Navbar from "@/components/common/Navbar";
import MainLayout from "@/components/layouts/MainLayout";
import Footer from "@/components/common/Footer";

import CKeditor from "@/components/common/CKeditor";
import { useState, useEffect } from "react";

export default function About() {
   const [editorLoaded, setEditorLoaded] = useState(false);
   const [data, setData] = useState("");
   useEffect(() => {
      setEditorLoaded(true);
   }, []);
   return (
      <>
         <Navbar />
         <MainLayout>
            <div className="flex flex-col justify-center py-8 md:px-36">
               <div className="mb-8 flex flex-col items-center justify-center">
                  {/* <h1 className="text-center text-3xl">Sobre nosotros</h1> */}
                  <h1 className="text-center text-3xl font-bold">B. Arely Oviedo Yañez</h1>
                  <h3 className="text-center text-2xl">
                     Licenciada en Acupuntura Humana Rehabilitatoria
                     <br />
                     por Universidad Estatal del Valle de Ecatepec
                  </h3>
                  <img className="w-20 pt-2" src="/UNEVE.png" alt="" />
               </div>
               <p className="my-4">
                  Directora de la clínica <strong>“Terapias Integrativas Tian Yuan”</strong>, donde
                  es{" "}
                  <strong>
                     docente titular del diplomado de Acupuntura y docente de la materia de anatomía
                     humana en el diplomado de Mesoterapia
                  </strong>
                  , además de brindar consulta de acupuntura, rehabilitación y cursos de
                  psicoprofilaxis prenatal.
               </p>
               <p className="my-4">
                  Con experiencia en consulta en distintas clínicas así como en la consulta privada
                  y docente nivel diplomado.
               </p>
               <h4 className="my-4 text-xl font-bold">Formación académica</h4>
               <ul className="my-4 list-disc pl-8">
                  <li>Mejor promedio de generación 2017 - 2020</li>
                  <li>
                     Realizo su servicio social en la Universidad Estatal del Valle de Ecatepec
                     Diplomado en “Acupuntura Neurofisiológica y Psiconeuromodulacion Por
                     Estimulación Nerviosa Percutánea”, por el Instituto de Ciencias y Medicina
                     Integrativa, S. C y la Universidad Estatal del Valle de Ecatepec, 2020
                  </li>
                  <li>
                     Diplomado en “Doula acompañante perinatal” certificada por la Red
                     Latinoamericana y del Caribe por la Humanización del Parto
                  </li>
                  <li>Curso en Acutomomedicina, por la Clínica Biomedica Shuanyi, 2023</li>
                  <li>
                     Curso en Acu-PRP, Acu-catgut, Acu-ozonoterapia, por la Clínica Biomedica
                     Shuanyi, 2023
                  </li>
               </ul>
            </div>
         </MainLayout>
         <Footer />
      </>
   );
}
