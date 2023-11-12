import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/article.module.css";
import axios from 'axios'

export default function CKeditor({ onChange, name, value }) {
   const editorRef = useRef();
   const { CKEditor, ClassicEditor } = editorRef.current || {};
   const [editorLoaded, setEditorLoaded] = useState(false)

   useEffect(() => {
      editorRef.current = {
         CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
         ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
      };
      setEditorLoaded(true)
   }, []);

   function uploadAdapter(loader) {
      return {
         upload: () => {
            return new Promise((resolve, reject) => {
               const formData = new FormData();
               loader.file.then((file) => {
                  formData.append("files", file);
                  // fetch(`${process.env.NEXT_PUBLIC_URL_SITE}/api/uploadFileCkeditor`, {
                  //    method: "POST",
                  //    body: formData
                  // })
                  axios({
                     method: 'POST',
                     url: `${process.env.NEXT_PUBLIC_URL_SITE}/api/uploadFileCkeditor`,
                     data: formData
                  })
                     .then((res) => res)
                     .then((res) => {
                        resolve({
                           default: `https://aeyazvfjbvdtcsoxjzre.supabase.co/storage/v1/object/public/articulos/${res.filename}`
                        });
                     })
                     .catch((err) => {
                        reject(err);
                     });
               });
            });
         }
      };
   }

   function uploadPlugin(editor) {
      editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
         return uploadAdapter(loader);
      };
   }

   return (
      <>
         {editorLoaded ? (
            <CKEditor
               className={styles["ck-editor"]}
               type=""
               name={name}
               config={{
                  extraPlugins: [uploadPlugin]
               }}
               editor={ClassicEditor}
               data={value}
               onChange={(event, editor) => {
                  const data = editor.getData();
                  onChange(data);
               }}
            />
         ) : (
            <div>Editor loading</div>
         )}
      </>
   );
}