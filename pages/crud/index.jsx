import React from "react";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import MainLayout from "@/components/layouts/MainLayout";
import Footer from "@/components/common/Footer";
import WhatsAppWidget from "@/components/common/elements/WhatsAppWidget";
import CardBody from "@/components/common/cards/CardBody";
import Modal from "@/components/common/elements/Modal";

import CreateArticle from "@/components/common/Forms/POST/CreateArticle";
import CreateService from "@/components/common/Forms/POST/CreateService";
import CreatePromotion from "@/components/common/Forms/POST/CreatePromotion";

import TableData from "@/components/common/elements/TableData";

import { GrArticle } from 'react-icons/gr'
import { AiFillFire, AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { FaHammer } from 'react-icons/fa'

import supabase from "@/lib/clientSupaBase";
export default function index({ articles }) {
   const [form, setForm] = useState("")
   return (
      <>
         <Navbar />
         <MainLayout>
            <WhatsAppWidget />
            <h1 className="py-12 text-center text-3xl font-bold">Centro de creacion de contenido:</h1>
            <div className="mb-12 grid grid-cols-1  md:grid-cols-3 gap-8">
               <CardBody onClick={() => setForm("article")} className={"flex flex-col gap-3 justify-center items-center cursor-pointer svg-container-crud"}>
                  <GrArticle />
                  <h2 className="font-bold">Crear articulo para el blog</h2>
               </CardBody>
               <CardBody onClick={() => setForm("promocion")} className={"flex flex-col gap-3 justify-center items-center cursor-pointer svg-container-crud"}>
                  <AiFillFire />
                  <h2 className="font-bold">Crear promocion</h2>
               </CardBody>
               <CardBody onClick={() => setForm("service")} className={"flex flex-col gap-3 justify-center items-center cursor-pointer svg-container-crud"}>
                  <FaHammer />
                  <h2 className="font-bold">Crear Servicio</h2>
               </CardBody>
               <CardBody onClick={() => setForm("handdleArticles")} className={"flex flex-col gap-3 justify-center items-center cursor-pointer svg-container-crud"}>
                  <div className="flex gap-4">
                     <AiFillEdit />
                     <AiFillDelete />
                     <GrArticle />
                  </div>
                  <h2 className="font-bold">Editar Eliminar Articulo</h2>
               </CardBody>
            </div>
            <div>
               {form === "article" && <CreateArticle />}
               {form === "promocion" && <CreatePromotion />}
               {form === "service" && <CreateService />}
               {form === "handdleArticles" && <TableData articles={articles} />}
            </div>
         </MainLayout>
         <Footer />
      </>
   );
}

export const getServerSideProps = async () => {
   let { data, error } = await supabase.from("Articles").select("*");
   const articles = data;

   return {
      props: {
         articles: articles,
      },
   };
};