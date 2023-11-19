import React from 'react'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import MainLayout from '@/components/layouts/MainLayout'
import CreateArticle from '@/components/common/Forms/POST/CreateArticle'
export default function Create() {
    return (
        <>
            <Navbar />
            <MainLayout>
                <div className='my-16'>
                    <CreateArticle />
                </div>
            </MainLayout>
            <Footer />
        </>
    )
}
