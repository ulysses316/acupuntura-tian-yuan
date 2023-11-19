import React from "react";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import MainLayout from "@/components/layouts/MainLayout";
import Footer from "@/components/common/Footer";
import WhatsAppWidget from "@/components/common/elements/WhatsAppWidget";
import CardBody from "@/components/common/cards/CardBody";
import axios from 'axios'

export default function Article({ article }) {
    return (
        <>
            <Navbar />
            <MainLayout>
                <WhatsAppWidget />
                <h1 className="py-12 text-center text-3xl font-bold">
                    {article.title || "Hola"}
                </h1>
                <div className="ck-content" dangerouslySetInnerHTML={{ __html: article.body || "!" }} />
            </MainLayout>
            <Footer />
        </>
    );
}

export const getServerSideProps = async (context) => {
    const { slug } = context.params;
    
    const { data, error } = await axios.get(`${process.env.NEXT_PUBLIC_URL_SITE}/api/articles/slug`, {
        data: {
            slug: slug
        }
    })

    let article;
    if (data) {
        article = data.data[0]
    }

    return {
        props: {
            article: article,
        },
    };
};
