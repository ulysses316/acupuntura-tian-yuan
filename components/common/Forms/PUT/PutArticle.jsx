import React from 'react'
import { useState, useEffect } from 'react'
import Button from '../../buttons/Button'
import CKeditor from '../../CKeditor'
import Toggle from '../../elements/Toogle'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import slugify from 'slugify'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
export default function PutArticle({ articleData }) {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            title: articleData.title,
            body: articleData.body,
            active: true
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Debes de ingresar un titulo."),
            body: Yup.string().required("El articulo no puede ir vacio."),
            active: Yup.string(),
        }),
        onSubmit: async (values) => {
            try {
                const { status, data, error } = await axios({
                    method: "PUT",
                    url: `/api/articles/update`,
                    data: {
                        id: articleData.id,
                        title: values.title,
                        body: values.body,
                        active: values.active,
                        slug: slugify(values.title, { lower: true })
                    }
                })

                if (status === 200) {
                    Swal.fire({
                        title: "Artículo actualizado correctamente.",
                        icon: "success"
                    }).then(() => {
                        router.push(`/blog/${data.data[0].slug}`)
                    })
                }

                if (response.code === 500) {
                    Swal.fire({
                        title: "Ocurrio un error al crear el articulo.",
                        html: `
                            <pre>
                                <code>${JSON.stringify(error, null, 2)}</code>
                            </pre>
                            `,
                        icon: "error"
                    })
                }

            } catch (error) {
                console.log(error);
            }
        }
    })
    return (
        <form className='flex flex-col gap-4 w-full' onSubmit={formik.handleSubmit}>
            <h2 className='font-bold text-xl'>Crear un articulo</h2>
            <div className='flex flex-col gap-2'>
                {formik.touched.title && formik.errors.title ? (
                    <div className="rounded-sm bg-red-200 px-2 py-2 text-sm text-red-500">
                        {formik.errors.title}
                    </div>
                ) : null}
                <label className='font-bold'>Titulo</label>
                <input className='outline-none border rounded-md py-1 px-2' value={formik.values.title} onChange={formik.handleChange} name='title' type="text" />
            </div>
            <div className='flex flex-col gap-2'>
                {formik.touched.body && formik.errors.body ? (
                    <div className="rounded-sm bg-red-200 px-2 py-2 text-sm text-red-500">
                        {formik.errors.body}
                    </div>
                ) : null}
                <label className='font-bold'>Ingresa aqui el contenido que quieres en el articulo</label>
                <CKeditor name="body" value={formik.values.body} onChange={(value) => formik.setFieldValue("body", value)} />
            </div>
            <div className='flex flex-col gap-2'>
                {formik.touched.active && formik.errors.active ? (
                    <div className="rounded-sm bg-red-200 px-2 py-2 text-sm text-red-500">
                        {formik.errors.active}
                    </div>
                ) : null}
                <label className='font-bold'>Mostrar articulo:</label>
                <Toggle
                    state={formik.values.active}
                    setState={(value) => formik.setFieldValue("active", value)}
                />
            </div>
            <div className='flex justify-center mt-2'>
                <Button className={"bg-primary-blue text-white"} type='submit'>Actualizar articulo</Button>
            </div>
        </form>
    )
}