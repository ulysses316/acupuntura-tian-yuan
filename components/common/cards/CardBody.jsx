import React from "react";

export default function CardBody({ children, className, onClick }) {
   return (
      <div onClick={onClick} className={`rounded-lg border border-slate-200 bg-white p-5 shadow ${className}`}>
         {children}
      </div>
   );
}
