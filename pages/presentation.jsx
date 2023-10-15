import React from "react";
import Button from "@/components/common/buttons/Button";

export default function presentation() {
   return (
      <div className="flex flex-col gap-2 pl-6 pt-6">
         <div>
            <Button className={"bg-pink-400 text-white"}>Agendar una cita</Button>
         </div>
         <div>
            <Button className={"bg-rose-200 text-white"}>Agendar una cita</Button>
         </div>
         <div>
            <Button className={"bg-red-400 text-white"}>Agendar una cita</Button>
         </div>
         <div>
            <Button className={"bg-red-200 text-white"}>Agendar una cita</Button>
         </div>
         <div>
            <Button className={"bg-sky-200 text-white"}>Agendar una cita</Button>
         </div>
         <div>
            <Button className={"bg-sky-400 text-white"}>Agendar una cita</Button>
         </div>
         <div>
            <Button className={"bg-cyan-100 text-white"}>Agendar una cita</Button>
         </div>
         <div>
            <Button className={"bg-cyan-400 text-white"}>Agendar una cita</Button>
         </div>
      </div>
   );
}
