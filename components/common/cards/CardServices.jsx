import Link from "next/link";
import React from "react";
import Divider from "../elements/Divider";

export default function CardServices({data}) {
   return (
      <div className="border py-2 px-4">
         <Link href={data.url}>
            <div>
               <img
                  className="w-full rounded-lg"
                  src={data?.img || "https://dummyimage.com/300x300/433/aaa"}
                  alt=""
               />
            </div>
            <div className="px-3 py-4">
               <h2 className="text-xl font-bold">{data.title}</h2>
               <p className="py-2 text-gray-500 text-justify">
                  {data.desc}
               </p>
               <Divider />
               <div className="justify-left flex flex-wrap gap-2 pt-2">
                  {data.benefits?.map((item, index)=>(
                     <span key={index} class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        {item}
                     </span>
                  ))}
               </div>
            </div>
         </Link>
      </div>
   );
}
