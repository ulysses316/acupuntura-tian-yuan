import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/article.module.css";

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
