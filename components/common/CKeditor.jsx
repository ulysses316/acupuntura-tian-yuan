import React, { useEffect, useRef } from "react";
import styles from "@/styles/article.module.css";

export default function CKeditor({ onChange, editorLoaded, name, value }) {
   const editorRef = useRef();
   const { CKEditor, ClassicEditor } = editorRef.current || {};

   useEffect(() => {
      editorRef.current = {
         CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
         ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
      };
   }, []);

   return (
      <>
         {editorLoaded ? (
            <CKEditor
               className={styles["ck-editor"]}
               type=""
               name={name}
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

// Implementacion
{
   /* <div>
   <CKeditor
      name="description"
      onChange={(data) => {
         setData(data);
      }}
      editorLoaded={editorLoaded}
   />
</div>; */
}
