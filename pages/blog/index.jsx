import React from "react";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import MainLayout from "@/components/layouts/MainLayout";
import Footer from "@/components/common/Footer";
import WhatsAppWidget from "@/components/common/elements/WhatsAppWidget";
import CardBody from "@/components/common/cards/CardBody";
import WhatsAppWidget from "@/components/common/elements/WhatsAppWidget";

import supabase from "@/lib/clientSupaBase";
import slugify from 'slugify'

export default function index({ articles }) {
   return (
      <>
         <Navbar />
         <MainLayout>
            <WhatsAppWidget />
            <h1 className="py-12 text-center text-3xl font-bold">
               Blog
            </h1>
            <div className="grid grid-cols-3 mb-12 gap-4">
               {articles.map((item, index)=>(
                  <Link key={index} href={`/blog/${slugify(item.title.toLowerCase())}`}>
                     <CardBody className={"flex flex-col gap-3"}>
                        <img src="http://via.placeholder.com/640x360" alt="" />
                        <h3 className="font-bold">{item.title}</h3>
                        <div className="ck-content overflow-hidden max-h-24" dangerouslySetInnerHTML={{ __html: item.body }} />
                     </CardBody>
                  </Link>
               ))}
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
