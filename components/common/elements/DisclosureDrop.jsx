import { Disclosure } from "@headlessui/react";
import { GoTriangleDown } from "react-icons/go";

export default function DisclosureDrop() {
   return (
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
         <Disclosure>
            {({ open }) => (
               <>
                  <Disclosure.Button className="bg-primary-blue text-md flex w-full justify-center rounded-lg px-4  py-2 font-medium text-white">
                     <GoTriangleDown className={open ? "rotate-180 transform" : ""} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="flex justify-center gap-2 pb-2 pt-4 text-sm text-gray-500 flex-wrap">
                     <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        Perder peso
                     </span>
                     <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        Estres
                     </span>
                     <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        Dolor
                     </span>
                     <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        Nauseas
                     </span>
                     <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        Badge
                     </span>
                     <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        Badge
                     </span>
                     <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        Badge
                     </span>
                     <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        Badge
                     </span>
                  </Disclosure.Panel>
               </>
            )}
         </Disclosure>
      </div>
   );
}
