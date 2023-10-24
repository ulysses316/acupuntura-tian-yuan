import React from "react";
import Navbar from "@/components/common/Navbar";
import MainLayout from "@/components/layouts/MainLayout";
import Footer from "@/components/common/Footer";

export default function acupuntura() {
    return (
        <>
            <Navbar />
            <MainLayout className="my-8 lg:px-52">
                <h1 className="text-center text-3xl font-bold">Acupuntura</h1>
                <p className="py-3 text-lg text-justify">
                    Prepárate como terapeuta con especialidad en <span className="uppercase">Acupuntura</span>
                </p>
                <p className="py-3 text-lg text-justify">
                    Duración 12 meses
                </p>
                <div className="flex justify-center gap-3 py-3">
                    <img
                        className="w-full rounded-md xl:w-2/3"
                        src="/diplomados/20231024-origen-acupuntura.jpg"
                        alt=""
                    />
                </div>
                <p className="text-justify text-lg py-3">
                    Con <span className="uppercase">opción</span> a certificación para incorporarte al campo laboral con validez <span className="uppercase">sep</span>, <span className="uppercase">renadep</span>, adquiriendo 6 documentos con numero de registro único:
                </p>
                <ul className="list-disc pl-4 text-lg">
                    <li>Título honorífico</li>
                    <li>Diploma</li>
                    <li>Cedula de identidad con número de folio único</li>
                    <li>Ficha técnica de identidad</li>
                    <li>Constancia <span className="uppercase">sep</span></li>
                    <li>Certificado de termino de estudios</li>
                </ul>
                <p className="py-3 text-lg">
                    Y reconocimiento de participación por el Centro Educativo de Terapias Integrativas Tian Yuan
                </p>
                <div className="flex justify-center gap-3 py-3 flex-col xl:flex-row">
                    <img
                        className="w-full rounded-md xl:w-1/2"
                        src="/diplomados/20231024-acupuntura-3.jpg"
                        alt=""
                    />
                    <img
                        className="w-full rounded-md xl:w-1/2"
                        src="/diplomados/20231024-acupuntura-2.jpg"
                        alt=""
                    />
                </div>
                <p className="py-3 text-lg">
                    Aprenderás a diagnosticar y tratar por medio de la medicina tradicional china y las técnicas complementarias, como ventosas, electroacupuntura, auriculoterapia y moxibustion, los padecimientos de los pacientes.
                </p>
                <p className="py-3 text-lg">
                    Con prácticas y casos clínicos de pacientes reales para mejorar tu aprendizaje y poder aplicarlo de una manera mas efectiva
                </p>
                <p className="py-3 text-lg">Conoce el temario:</p>
                <div className="flex justify-center gap-3 py-3">
                    <img
                        className="w-full rounded-md xl:w-1/2"
                        src="/diplomados/20231024-acupuntura-1.jpg"
                        alt=""
                    />
                </div>
                <p className="py-3 text-lg">
                    Al inscribirte obtén acceso a libros electrónicos que te servirán para el estudio durante todo tu curso, un manual impreso, tu escudo institucional, credencial y formatos de inscripción
                </p>
                <p className="py-3 text-lg">
                    Aparta tu lugar, abrimos convocatoria en 3 periodos al año: enero, mayo, y septiembre
                </p>
                <p className="py-3 text-lg">
                    Mas información al contacto <a className="text-primary-blue font-bold" href="tel:5558263542">5558263542.</a>
                </p>
            </MainLayout>
            <Footer />
        </>
    );
}
