import React from 'react'
import { useState, useEffect } from 'react'
import Button from '../../buttons/Button'
import CKeditor from '../../CKeditor'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'

export default function CreateService() {
    const formik = useFormik({
        initialValues: {
            title: "",
            body: "",
            active: true
        },
        onSubmit: async (values) => {
            alert(JSON.stringify(values))
        }
    })
    return (
        <form className='flex flex-col gap-4 w-full my-12' onSubmit={formik.handleSubmit}>
            <h2 className='font-bold text-xl'>Crear un servicio</h2>
            <div className='flex flex-col gap-2'>
                <label className='font-bold'>Titulo</label>
                <input className='outline-none border rounded-md py-1 px-2' name='title' type="text" />
            </div>
            <div className='flex flex-col gap-2'>
                <label className='font-bold'>Ingresa aqui el contenido que quieres en el servicio</label>
                <CKeditor name="body" value={formik.body} onChange={(value) => formik.setFieldValue("body", value)} />
            </div>
            <div className='flex justify-center mt-2'>
                <Button className={"bg-primary-blue text-white"} type='submit'>Crear servicio</Button>
            </div>
        </form>
    )
}
