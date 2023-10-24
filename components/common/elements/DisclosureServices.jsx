import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { GoTriangleDown } from "react-icons/go";

export default function DisclosureServices() {
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

   return (
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
         <Disclosure>
            {({ open }) => (
               <>
                  <Disclosure.Button className="flex w-full min-w-[278px] justify-center items-center gap-2 rounded-lg bg-primary-blue px-4 py-2 text-lg font-bold text-white">
                     Servicios <GoTriangleDown className={open ? "rotate-180 transform" : ""} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="flex flex-col items-center justify-center gap-2 pt-3">
                     {navigation.map((item, index) => (
                        <Link key={index} href={item.href}>
                           {item.label}
                        </Link>
                     ))}
                  </Disclosure.Panel>
               </>
            )}
         </Disclosure>
      </div>
   );
}
