import React from "react";
import Navbar from "@/components/common/Navbar";
import MainLayout from "@/components/layouts/MainLayout";
import Footer from "@/components/common/Footer";

export default function masajes() {
    return (
        <>
            <Navbar />
            <MainLayout className="my-8 lg:px-52">
                <h1 className="py-3 text-center text-3xl font-bold">Masajes</h1>
                <p className="py-3 text-justify text-lg">
                    El masaje es un procedimiento terapéutico en el que se utilizan las manos del
                    terapeuta como una fuerza mecánica sobre el cuerpo mediante técnicas especiales y
                    dosificadas a las necesidades de cada paciente. La finalidad es terapéutica ayuda a
                    aliviar el dolor, mejora la recuperación de algunas lesiones y favorece el bienestar
                    y relajación de las personas.
                </p>
                <p className="py-3 text-lg">
                    Contamos con servicio de masajes:
                </p>

                <ul className="list-disc pl-4 text-lg">
                    <li>Relajantes</li>
                    <li>Con ventosas</li>
                    <li>Deportivo</li>
                    <li>Reductivo</li>
                    <li>Reflexología podal</li>
                    <li>Piedras calientes</li>
                </ul>
                <p className="py-3 text-lg">
                    Pregunta por nuestros paquetes y agenda una cita con nuestra experta  masoterapeuta
                </p>
                <div className="flex flex-col xl:flex-row justify-center gap-3 py-3">
                    <img
                        className="w-full rounded-md xl:w-1/2"
                        src="/services/20231024-ventosas.jpg"
                        alt=""
                    />
                    <img
                        className="w-full rounded-md xl:w-1/2"
                        src="/services/20231024-masoterapia.jpg"
                        alt=""
                    />
                </div>
            </MainLayout>
            <Footer />
        </>
    );
}
