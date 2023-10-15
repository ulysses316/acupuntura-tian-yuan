import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./buttons/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import DropDown from "./elements/Dropdown";
import Divider from "./elements/Divider";
import { AiOutlineClose } from "react-icons/ai";

import { useState } from "react";

const navigation = [
   { label: "Inicio", href: "/" },
   { label: "Nosotros", href: "/about" },
   { label: "Servicios", component: <DropDown /> },
   { label: "Promociones", href: "#" },
   { label: "Certificados", href: "#" },
   { label: "Blog", href: "#" },
   { label: "Contacto", href: "#" },
];

export default function Navbar() {
   const [mobileNav, setMobileNav] = useState(false);
   return (
      <nav>
         <div className="relative py-3 shadow">
            <div className="container mx-auto grid grid-cols-1 items-center gap-3 lg:grid-cols-[2fr_8fr_2fr] lg:gap-0">
               <div className="justify-self-center	">
                  <Link href="/">
                     <Image width={70} height={70} src="/logo.png" />
                  </Link>
               </div>
               <ul className="hidden justify-center gap-5 font-semibold sm:flex">
                  {navigation.map((item, index) =>
                     item.component ? (
                        <li key={index}>{item.component}</li>
                     ) : (
                        <li key={index}>
                           <Link className="text-zinc-900" href={item.href}>
                              {item.label}
                           </Link>
                        </li>
                     )
                  )}
               </ul>
               <div className="hidden justify-self-center sm:block	">
                  <Button className="bg-primary-blue text-white">Agendar una cita</Button>
               </div>
            </div>
            <Button
               onClick={() => setMobileNav(true)}
               className="absolute bottom-0 left-3 top-0 block sm:hidden">
               <RxHamburgerMenu className="text-3xl" />
            </Button>
         </div>

         {/* Mobile Navbar */}
         {mobileNav && (
            <div className="fixed top-0 z-30 h-[100vh] w-full bg-white px-5">
               <div className="flex justify-center pt-3">
                  <Image width={70} height={70} src="/logo.png" />
               </div>
               <Divider />
               <ul className="items-left flex flex-col items-center justify-center gap-3 py-4 text-lg font-semibold">
                  {navigation.map((item, index) =>
                     item.component ? (
                        <li key={index}>{item.component}</li>
                     ) : (
                        <li key={index}>
                           <Link className="text-zinc-900" href={item.href}>
                              {item.label}
                           </Link>
                        </li>
                     )
                  )}
               </ul>
               <Divider />
               <div className="flex justify-center">
                  <Button className="bg-primary-blue text-white">Agendar una cita</Button>
               </div>
               <Button
                  onClick={() => setMobileNav(false)}
                  className="absolute left-3 top-7 block sm:hidden">
                  <AiOutlineClose className="cursor-pointer text-3xl" />
               </Button>
            </div>
         )}
      </nav>
   );
}
