import React from "react";
import Navbar from "@/components/common/Navbar";
import MainLayout from "@/components/layouts/MainLayout";
import Footer from "@/components/common/Footer";

export default function ventosas() {
    return (
        <>
            <Navbar />
            <MainLayout className="my-8 lg:px-52">
                <h1 className="text-center text-3xl font-bold">Ventosas terapéuticas</h1>
                <div className="flex justify-center gap-3 py-3">
                    <img
                        className="w-full rounded-md xl:w-1/2"
                        src="/services/20231024-ventosas.jpg"
                        alt=""
                    />
                </div>
                <p className="py-3 text-lg text-justify">Curso intensivo de ventosas presencial y online</p>
                <p className="py-3 text-lg text-justify">Duración 8 horas</p>
                <p className="py-3 text-lg text-justify">Teórico- Practico</p>
                <p className="py-3 text-lg text-justify">Material incluido para tu practica y de regalo</p>
                <p className="py-3 text-lg text-justify">Aprenderás:</p>
                <ul className="list-disc pl-4 text-lg">
                    <li>Anatomía humana</li>
                    <li>Funciones de las ventosas</li>
                    <li>Indicaciones terapéuticas</li>
                    <li>Contraindicaciones</li>
                    <li>Aplicación</li>
                    <li>Prevención de accidentes</li>
                    <li>Practicas </li>
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
