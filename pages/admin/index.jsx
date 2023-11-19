import React from "react";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import MainLayout from "@/components/layouts/MainLayout";
import Footer from "@/components/common/Footer";
import WhatsAppWidget from "@/components/common/elements/WhatsAppWidget";
import CardBody from "@/components/common/cards/CardBody";
import Modal from "@/components/common/elements/Modal";
import logOut from "@/lib/logout";
import { useRouter } from "next/router";

import CreateArticle from "@/components/common/Forms/POST/CreateArticle";
import CreateService from "@/components/common/Forms/POST/CreateService";
import CreatePromotion from "@/components/common/Forms/POST/CreatePromotion";

import ArticlesTable from "@/components/common/elements/ArticlesTable";

import { GrArticle } from 'react-icons/gr'
import { AiFillFire, AiFillDelete, AiFillEdit, AiOutlineUserAdd, AiOutlineLogout } from 'react-icons/ai'
import { FaHammer } from 'react-icons/fa'

import supabase from "@/lib/clientSupaBase";
export default function Crud({ articles }) {
   const [form, setForm] = useState("")
   const router = useRouter();
   return (
      <>
         <Navbar />
         <MainLayout>
            <WhatsAppWidget />
            <h1 className="py-12 text-center text-3xl font-bold">Centro de creacion de contenido:</h1>
            <div className="mb-12 grid grid-cols-1  md:grid-cols-3 gap-8">
               <Link href="/signup">
                  <CardBody className={"flex flex-col gap-3 justify-center items-center cursor-pointer svg-container-crud"}>
                     <AiOutlineUserAdd />
                     <h2 className="font-bold">Crear usuario</h2>
                  </CardBody>
               </Link>
               <CardBody
                  onClick={() => { logOut(); router.push("/"); }}
                  className={"flex flex-col gap-3 justify-center items-center cursor-pointer svg-container-crud"}>
                  <AiOutlineLogout />
                  <h2 className="font-bold">Cerrar sesion</h2>
               </CardBody>
               <Link href={"/admin/articles/create"}>
                  <CardBody className={"flex flex-col gap-3 justify-center items-center cursor-pointer svg-container-crud"}>
                     <GrArticle />
                     <h2 className="font-bold">Crear articulo para el blog</h2>
                  </CardBody>
               </Link>
               <CardBody onClick={() => setForm("promocion")} className={"flex flex-col gap-3 justify-center items-center cursor-pointer svg-container-crud"}>
                  <AiFillFire />
                  <h2 className="font-bold">Crear promocion</h2>
               </CardBody>
               <CardBody onClick={() => setForm("service")} className={"flex flex-col gap-3 justify-center items-center cursor-pointer svg-container-crud"}>
                  <FaHammer />
                  <h2 className="font-bold">Crear Servicio</h2>
               </CardBody>
               <Link href={"/admin/articles"}>
               <CardBody className={"flex flex-col gap-3 justify-center items-center cursor-pointer svg-container-crud"}>
                  <div className="flex gap-4">
                     <AiFillEdit />
                     <AiFillDelete />
                     <GrArticle />
                  </div>
                  <h2 className="font-bold">Editar Eliminar Articulo</h2>
               </CardBody>
               </Link>
            </div>
            <div>
               {form === "promocion" && <CreatePromotion />}
               {form === "service" && <CreateService />}
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