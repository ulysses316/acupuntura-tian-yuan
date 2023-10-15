import React from "react";
import Link from "next/link";
import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoWhatsapp } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
   return (
      <footer className="bg-primary-pink py-20 font-bold text-white lg:py-12">
         <div className="flex h-full flex-col items-center justify-center gap-2">
            <Link className="underline" href={"#"}>
               Terminos y condiciones
            </Link>
            <p>Acupuntura y terapia física Tian Yuan - {new Date().getFullYear()}</p>
            <div className="flex gap-4">
               <a href="https://www.facebook.com/people/Terapias-Integrativas-Tian-Yuan/100091659327893/">
                  <BiLogoFacebookCircle className="text-2xl" />
               </a>
               <a href="https://www.instagram.com/acu_arelyanez/">
                  <BiLogoInstagram className="text-2xl" />
               </a>
               <a href="https://wa.me/5558263542?text=%C2%A1Hola%21%20Me%20interesa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio%20de...">
                  <BiLogoWhatsapp className="text-2xl" />
               </a>
               <a href="mailto:cecti_tianyuan@gmail.com">
                  <AiOutlineMail className="text-2xl" />
               </a>
            </div>
         </div>
      </footer>
   );
}
