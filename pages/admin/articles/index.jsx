import React from 'react'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import MainLayout from '@/components/layouts/MainLayout'
import ArticlesTable from '@/components/common/elements/ArticlesTable'
import useFetch from '@/hooks/useFetch'
export default function index() {
    const allArticles = useFetch(`${process.env.NEXT_PUBLIC_URL_SITE}/api/articles`)
    return (
        <>
            <Navbar />
            <MainLayout>
                <div className='my-16'>
                    <h1 className='text-2xl text-center mb-8'>Administrador de articulos.</h1>
                    {allArticles.isLoading === false && allArticles.data !== null ? (
                        <ArticlesTable articles={allArticles.data.data} />
                    ) : (
                        <div className="animate-pulse min-h-[124px] bg-slate-100 h-full w-full m-auto rounded-2xl" />
                    )}
                </div>
            </MainLayout>
            <Footer />
        </>
    )
}
