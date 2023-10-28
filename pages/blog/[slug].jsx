import React from "react";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import MainLayout from "@/components/layouts/MainLayout";
import Footer from "@/components/common/Footer";
import WhatsAppWidget from "@/components/common/elements/WhatsAppWidget";
import CardBody from "@/components/common/cards/CardBody";

import supabase from "@/lib/clientSupaBase";

export default function Article({ article }) {
    return (
        <>
            <Navbar />
            <MainLayout>
                <WhatsAppWidget />
                <h1 className="py-12 text-center text-3xl font-bold">
                    {article.title}
                </h1>
                <div className="ck-content" dangerouslySetInnerHTML={{ __html: article.body }} />
            </MainLayout>
            <Footer />
        </>
    );
}

export const getServerSideProps = async (context) => {
    const { req } = context;
    let paramUrl = req.url;
    let url = new URL(paramUrl, "http://localhost.com");

    let slug = url.searchParams.has("slug")
        ? url.searchParams.get("slug")
        : url.pathname.replace("/blog/", "");

    let { data, error } = await supabase
        .from('Articles')
        .select('*')
        .eq('slug', slug)

    const article = data[0];

    return {
        props: {
            article: article,
        },
    };
};
