import React from "react";
import Navbar from "@/components/common/Navbar";
import MainLayout from "@/components/layouts/MainLayout";
import Footer from "@/components/common/Footer";

export default function fisicos() {
   return (
      <>
         <Navbar />
         <MainLayout className="my-8 lg:px-52">
            <h1 className="py-3 text-center text-3xl font-bold">Doula</h1>
            <p className="py-3 text-justify text-lg">
               Las doulas son mujeres con formación y experiencia que acompañan a otras mujeres
               brindando apoyo practico y emocional durante el proceso de embarazo, parto y
               postparto; la palabra viene de griego “sirva” mujer que sirve, y del hindu “mujer
               experimentada”
            </p>
            <p className="py-3 text-justify text-lg">
               Son las encargadas de darle a la mujer embarazada seguridad y confianza en el proceso
               de acompañamiento durante estas etapas. Resuelven dudas acerca del embarazo y parto,
               así como dudas de los cuidados del recién nacido, ayudan con la lactancia materna,
               algunas de las ventajas de las mujeres que se acompañan de una doula son; mejora el
               vínculo de padres con bebé, disminuye la incidencia de cesáreas electivas por miedo
               de la madre, desinformación o presión por parte del médico, ayuda a tomar una
               decisión mas consiente sobre su cuerpo y como quiere que sea el nacimiento de su
               bebé, disminuye la incidencia de depresión postparto, disminuye el uso de epidural,
               entre otras.
            </p>
            <div className="flex flex-col xl:flex-row justify-center gap-3 py-3">
               <img
                  className="w-full rounded-md xl:w-1/2"
                  src="/services/20231024-doula-1.jpg"
                  alt=""
               />
               <img
                  className="w-full rounded-md xl:w-1/2"
                  src="/services/20231024-doula-2.jpg"
                  alt=""
               />
            </div>
            <h2 className="py-3 text-center text-2xl font-bold">
               Cursos de psicoprofilaxis prenatal
            </h2>
            <p className="py-3 text-justify text-lg">
               Estos cursos también llamados cursos de preparación para el nacimiento son un
               conjunto de actividades, métodos, y técnicas ligadas a brindar atención integral a la
               mujer durante todo el proceso de embrazo, parto y puerperio, con la participación
               activa del padre y la familia.
            </p>
            <p className="py-3 text-justify text-lg">
               Tiene como finalidad educar, fortalecer, preparar y motivar a las familias para
               llevar un embarazo saludable y un parto respetado
            </p>
            <div className="flex justify-center gap-3 py-3">
               <img
                  className="w-full rounded-md xl:w-2/3"
                  src="/services/20231024-doula-3.jpg"
                  alt=""
               />
            </div>
            <h3 className="py-3 text-xl font-bold">¿Qué es un parto respetado o humanizado?</h3>
            <p className="py-3 text-justify text-lg">
               Que extraño concepto es para algunos siendo humanos hablar de parto humanizado; se
               imaginaria uno que todos los partos son así, ya que todos somos raza humana y nacemos
               “humanizadamente”; sin embargo a lo largo de los años y de la historia se fue
               perdiendo esta humanización hacia la mujer, se le fue poniendo en posiciones
               incomodas, estáticas, privándola de movimiento, y de los sentidos, hablándole mal,
               evitando que consuma alimentos y bebidas sustituyéndolo por un suero, apurando su
               proceso natural con medicina para hacer el trabajo del médico más rápido. Sin bien,
               no podemos satanizar la medicina y la obstetricia, si debemos ver que algunas
               practicas que a la fecha se siguen realizando en hospitales atentan contra los
               derechos reproductivos de la mujer, generando lo que ahora conocemos como violencia
               obstétrica.
            </p>
            <p className="py-3 text-justify text-lg">
               Bajo este marco que vivimos en México es necesario crear recursos para que las
               mujeres y las familias puedan utilizar, con la finalidad de traer al mundo a un nuevo
               ser de una manera más respetada y consciente, a través de conocimiento e información
            </p>
            <p className="py-3 text-justify text-lg">
               Estos cursos están diseñados con esa finalidad, dirigidos a las mujeres y sus
               familias para prepararse física y emocionalmente con la finalidad de llevar un
               embarazo saludable y aprender los procesos naturales de su cuerpo para recibir a su
               bebé, que conozcan las recomendaciones para su parto si su embarazo ha sido
               saludable, individualizar a cada pareja de esta manera el nacimiento sea un proceso
               agradable y feliz.
            </p>
            <p className="py-3 text-justify text-lg">
               Aprenderán sobre embarazo saludable, prevención de trastornos de la salud perinatal,
               salud emocional en el embarazo y postparto, parto humanizado y beneficio de sus
               técnicas como apego inmediato, libre movimiento, pinzamiento oportuno del cordón,
               expulsión de la placenta, lactancia exclusiva; así como manejo del dolor durante el
               trabajo de parto, puerperio inmediato, cuidados del recién nacido, ejercicios de
               acondicionamiento físico durante el embarazo, ejercicios de respiración y meditación
            </p>

            <h3 className="py-3 text-xl font-bold">
               En terapias integrativas Tian Yuan ofrecemos cursos de preparación para el nacimiento
            </h3>

            <ul className="list-disc pl-4 text-lg">
               <li>Teóricos y prácticos</li>
               <li>Duración de 2 meses</li>
               <li>Una clase a la semana de dos horas</li>
               <li>Dirigido a la mujer embarazada y a un acompañante</li>
               <li>Costo de inversión $1,500</li>
            </ul>
            <p className="py-3 text-lg">
               Tenemos la ventaja de poder atender a la mujer y su acompañante de manera online o
               presencial
            </p>
            <p className="py-3 text-lg">
               Pregunta por nuestros promociones y descuentos asi como nuestros inicios de curso
            </p>
            <p className="py-3 text-lg">
               Apoyando a las mujeres de Ecatepec se abre una vez al año la convocatoria para el
               <span className="uppercase">curso gratuito de psicoprifilaxis prenatal</span>
            </p>
            <p className="py-3 text-lg">Contáctanos para saber más información</p>
         </MainLayout>
         <Footer />
      </>
   );
}
