import React from "react";

export default function MainLayout({ children, className }) {
   return (
      <main className={`relative px-4 sm:container sm:mx-auto sm:px-0 min-h-[74.9dvh] ${className}`}>
         {children}
      </main>
   );
}
