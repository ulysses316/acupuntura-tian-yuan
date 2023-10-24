import Link from "next/link";
import React from "react";
import DisclosureDrop from "../elements/DisclosureServices";
import Divider from "../elements/Divider";

export default function CardServices() {
   return (
      <div className="">
         <Link href={"#"}>
            <div>
               <img
                  className="w-full rounded-lg"
                  src="https://dummyimage.com/300x300/433/aaa"
                  alt=""
               />
            </div>
            <div className="px-3 py-4">
               <h2 className="text-xl font-bold">Servicio No. 1</h2>
               <p className="py-2 text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, itaque?
                  Obcaecati dicta totam libero ut quia repudiandae doloremque animi earum nemo sed
                  corporis consequatur, maiores nobis corrupti voluptates saepe tenetur!
               </p>
               <Divider />
               <div className="justify-left flex flex-wrap gap-2 pt-2">
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
               </div>
            </div>
         </Link>
         {/* <DisclosureDrop /> */}
      </div>
   );
}
