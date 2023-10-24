import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

const navigation = [
   { label: "Acupuntura", href: "/servicios/acupuntura" },
   { label: "Auriculoterapia", href: "/servicios/auriculoterapia" },
   { label: "Moxibustion", href: "/servicios/moxibustion" },
   {
      label: "Fisioterapia y rehabilitación física",
      href: "/servicios/fisioterapia-y-rehabilitacion-fisca",
   },
   { label: "Doula", href: "/servicios/doula" },
   { label: "Masajes", href: "/servicios/masajes" },
];

export default function DropDownServices() {
   return (
      <Menu as="div" className="relative z-10 inline-block text-left">
         <div>
            <Menu.Button className="">Servicios</Menu.Button>
         </div>
         <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95">
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
               <div className="px-1 py-1 ">
                  {navigation.map((item, index) => (
                     <Menu.Item key={index}>
                        {({ active }) => (
                           <Link href={item.href}>
                              <button
                                 className={`${
                                    active
                                       ? "bg-primary-pink text-white"
                                       : "text-left text-gray-900"
                                 } group flex w-full items-center rounded-md px-2 py-2 text-left text-sm`}>
                                 {item.label}
                              </button>
                           </Link>
                        )}
                     </Menu.Item>
                  ))}
               </div>
            </Menu.Items>
         </Transition>
      </Menu>
   );
}
