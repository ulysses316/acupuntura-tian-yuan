import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import MainLayout from '@/components/layouts/MainLayout'
import PutArticle from '@/components/common/Forms/PUT/PutArticle'
import { useRouter } from 'next/router'
import axios from 'axios'
export default function UpdateArticle() {
    const [article, setArticle] = useState("");
    const router = useRouter();
    const [id, setId] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            if (id !== null) {
                const response = await axios({
                    url: `${process.env.NEXT_PUBLIC_URL_SITE}/api/articles/${id}`,
                });
                setArticle(response.data?.data?.[0])
            }
        }
        fetchData()
    }, [id]);

    useEffect(() => {
        setId(router.query.id)
    }, [router]);

    return (
        <>
            <Navbar />
            <MainLayout>
                <div className='my-16'>
                    {article !== "" ? (
                        <PutArticle articleData={article}/>
                    ) : (
                        <p>Cargando...</p>
                    )}
                </div>
            </MainLayout>
            <Footer />
        </>
    )
}
