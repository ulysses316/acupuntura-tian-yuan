import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

export default function prueba() {
    const formik = useFormik({
        initialValues: {
            file: null
        },
        onSubmit: async (values) => {
            const formData = new FormData();
            formData.append("file", values.file)
            const response = await axios({
                method: 'POST',
                url: `${process.env.NEXT_PUBLIC_URL_SITE}/api/uploadFileCkeditor`,
                data: formData
            });
            console.log(response);
        }
    });
  return (
    <form onSubmit={formik.handleSubmit}>
        <input onChange={(e)=>formik.setFieldValue("file", e.target.files?.[0])} type="file" name="file" id="" />
        <button type='submit'>Enviar</button>
    </form>
  )
}
