import React from "react";
import { Dialog } from "@headlessui/react";
import CardBody from "../cards/CardBody";
export default function ModalContainer({ children, open, onClose }) {
    return (
        <Dialog
            unmount={false}
            open={open}
            onClose={() => onClose(false)}
            className={
                "fixed top-0 z-20 flex h-[100dvh] w-full items-center justify-center backdrop-blur-sm"
            }>
            <Dialog.Panel className="flex items-center justify-center">
                <CardBody className={"w-[320px] sm:w-[640px] md:w-[768px] lg:w-full overflow-scroll"}>
                    {children}
                </CardBody>
            </Dialog.Panel>
        </Dialog>
    );
}
