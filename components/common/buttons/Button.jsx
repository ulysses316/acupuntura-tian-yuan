import React, { Children } from "react";

export default function Button({ children, onClick, className, type = "button" }) {
   return (
      <button
         type={type}
         className={`rounded-lg px-6 py-2 font-bold ${className}`}
         onClick={onClick}>
         {children}
      </button>
   );
}
