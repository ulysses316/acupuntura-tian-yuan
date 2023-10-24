import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { GoTriangleDown } from "react-icons/go";

export default function DisclosureCourses() {
   const navigation = [
      { label: "Acupuntura", href: "/diplomados/acupuntura" },
      { label: "Masoterapia", href: "/diplomados/masoterapia" },
      { label: "Auriculoterapia", href: "/diplomados/auriculoterapia" },
      {
         label: "Ventosas terapéuticas",
         href: "/diplomados/ventosas-terapeuticas",
      },
   ];

   return (
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
         <Disclosure>
            {({ open }) => (
               <>
                  <Disclosure.Button className="flex w-full min-w-[278px] justify-center items-center gap-2 rounded-lg bg-primary-blue px-4 py-2 text-lg font-bold text-white">
                     Diplomados <GoTriangleDown className={open ? "rotate-180 transform" : ""} />
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
