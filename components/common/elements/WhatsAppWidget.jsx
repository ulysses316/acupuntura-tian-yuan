import React from "react";
import { BsWhatsapp } from "react-icons/bs";

export default function WhatsAppWidget() {
   return (
      <a
         href="https://wa.me/5558263542?text=%C2%A1Hola%21%20Me%20interesa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio%20de..."
         target="__blank"
         className="fixed bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary-blue lg:h-16 lg:w-16 z-20">
         <BsWhatsapp className="text-3xl text-white lg:text-4xl" />
      </a>
   );
}
