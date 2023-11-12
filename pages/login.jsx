import React from 'react'
import Navbar from '@/components/common/Navbar'
import MainLayout from '@/components/layouts/MainLayout'
import Footer from '@/components/common/Footer'
import CardBody from '@/components/common/cards/CardBody'
import Button from '@/components/common/buttons/Button'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

export default function Login() {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("El email no es valido").required("Este campo no puede ir vacio."),
            password: Yup.string().required("Este campo no puede ir vacio."),
        }),
        onSubmit: async (values) => {
            const response = await axios({
                method: 'POST',
                url: `${process.env.NEXT_PUBLIC_URL_SITE}/api/auth/login`,
                data: {
                    email: values.email,
                    password: values.password
                }
            });

            if (response.status === 200) {
                if (Cookies.get("session") !== null) {
                    Cookies.remove('session');
                }

                Cookies.set("session", JSON.stringify(response.data.message.session))
                router.push("/")
            }
        }
    })

    return (
        <>
            <Navbar />
            <MainLayout>
                <div className='flex justify-center items-center h-[80dvh]'>
                    <CardBody>
                        <h1 className='font-bold text-lg text-center'>Iniciar sesión</h1>
                        <form className='min-w-[400px]' onSubmit={formik.handleSubmit}>
                            <div className='flex flex-col gap-2 pt-1'>
                                <label>Email</label>
                                <input value={formik.values.email} onChange={formik.handleChange} name='email' type="email" className='border rounded-md outline-none px-2 py-1' />
                            </div>
                            <div className='flex flex-col gap-2 pt-1'>
                                <label>Contraseña</label>
                                <input value={formik.values.password} onChange={formik.handleChange} name='password' type="password" className='border rounded-md outline-none px-2 py-1' />
                            </div>
                            <div className='py-4 flex justify-center'>
                                <Button type='submit' className={"bg-primary-blue text-white"}>Iniciar sesion</Button>
                            </div>
                        </form>
                    </CardBody>
                </div>
            </MainLayout>
            <Footer />
        </>
    )
}
