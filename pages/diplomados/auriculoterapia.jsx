import React from "react";
import Navbar from "@/components/common/Navbar";
import MainLayout from "@/components/layouts/MainLayout";
import Footer from "@/components/common/Footer";

export default function auriculoterapia() {
    return (
        <>
            <Navbar />
            <MainLayout className="my-8 lg:px-52">
                <h1 className="text-center text-3xl font-bold">Auriculoterapia</h1>
                <div className="flex justify-center gap-3 py-3">
                    <img
                        className="w-full rounded-md xl:w-1/2"
                        src="/diplomados/20231024-auriculoterapia.webp"
                        alt=""
                    />
                </div>
                <p className="py-3 text-lg text-justify">Curso intensivo de auriculoterapia presencial y online</p>
                <p className="py-3 text-lg text-justify">Duración 9 horas</p>
                <p className="py-3 text-lg text-justify">Teórico- Practico</p>
                <p className="py-3 text-lg text-justify">Material incluido para tu practica y de regalo</p>
                <p className="py-3 text-lg text-justify">Aprenderás:</p>
                <ul className="list-disc pl-4 text-lg">
                    <li>Teoría básica de la medicina tradicional china</li>
                    <li>Fundamentos de auriculoterapia</li>
                    <li>Anatomía de pabellón auricular</li>
                    <li>Tratamientos específicos con auriculoterapia de enfermedades cardiovasculares</li>
                    <li>Tratamientos específicos con auriculoterapia de enfermedades digestivas</li>
                    <li>Tratamientos específicos con auriculoterapia de enfermedades pulmonares </li>
                    <li>Tratamientos específicos con auriculoterapia de enfermedades ginecológicas</li>
                    <li>Tratamientos específicos con auriculoterapia de enfermedades nerviosas</li>
                    <li>Tratamientos específicos con auriculoterapia de enfermedades osteomioarticulares </li>
                </ul>
                <p className="text-center text-lg py-3">
                    Se entrega una constancia de participación al finalizar por el Centro Educativo de Terapias Integrativas Tian Yuan
                </p>
                <p className="py-3 text-lg">Inversión: $1400.00</p>
                <p className="py-3 text-lg">
                    Pregunta fechas e inscripciones: <a className="text-primary-blue font-bold" href="tel:5558263542">5558263542.</a>
                </p>
            </MainLayout>
            <Footer />
        </>
    );
}
