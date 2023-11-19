import React from 'react'
import Button from '../buttons/Button'
import Link from 'next/link'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useRouter } from 'next/router'
export default function ArticlesTable({ articles }) {
    const router = useRouter();
    const handleDelete = (id, title) => {
        Swal.fire({
            title: "¿Continuar?",
            icon: "warning",
            html: `Estas segura que quieres eliminar el articulo: <br/> <b>${title}</b>`,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            focusCancel: false,
            confirmButtonText: `Eliminar`,
            confirmButtonAriaLabel: "Thumbs up, great!",
            cancelButtonText: `Cancelar`,
            cancelButtonAriaLabel: "Thumbs down",
            customClass: {
                cancelButton: "!bg-primary-blue",
                confirmButton: "!bg-red-500"
            }
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { status } = await axios({
                    method: "DELETE",
                    url: `${process.env.NEXT_PUBLIC_URL_SITE}/api/articles/delete`,
                    data: {
                        id: id
                    }
                })
                if (status === 200) {
                    Swal.fire({
                        title: `El articulo se elimino correctamente.`,
                        icon: "success"
                    }).then(() => {
                        router.reload();
                    })
                }

                if (status === 500) {
                    Swal.fire({
                        title: `El articulo se elimino correctamente.`,
                        html: `<pre><code>${JSON.stringify(error, null, 2)}</code></pre>`,
                        icon: "success"
                    });
                }
            }
        })
    }

    return (
        <div className="mt-4 mb-4"><div className="not-prose bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">
            <div className="rounded-xl overflow-auto">
                <div className="shadow-sm overflow-hidden my-8">
                    <table className="border-collapse table-fixed w-full text-sm">
                        <thead>
                            <tr>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Articulo</th>
                                <th className="max-md:hidden border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">URL</th>
                                <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-slate-800">
                            {articles.map((item, index) => (
                                <tr key={index}>
                                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                                        <Link href={`${process.env.NEXT_PUBLIC_URL_SITE}/blog/${item.slug}`} target='__blank'>{item.title}</Link>
                                    </td>
                                    <td className="max-md:hidden border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                                        <Link href={`${process.env.NEXT_PUBLIC_URL_SITE}/blog/${item.slug}`} target='__blank'>{process.env.NEXT_PUBLIC_URL_SITE}/blog/{item.slug}</Link>
                                    </td>
                                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400 flex gap-4 sm:flex-row flex-col">
                                        <Link href={`/admin/articles/update/${item.id}`}>
                                            <Button className={"bg-primary-blue text-white max-sm:px-2 max-md:px-3 max-md:text-xs w-full"}>Editar</Button>
                                        </Link>
                                        <Button onClick={() => handleDelete(item.id, item.title)} className={"bg-primary-pink text-white max-sm:px-2 max-md:px-3 max-md:text-xs"}>Eliminar</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    )
}