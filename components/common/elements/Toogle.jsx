import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function Toggle({
    state,
    setState,
    activeColor = "bg-primary-blue",
    disabled = false,
}) {
    return (
        <Switch
            disabled={disabled}
            checked={state}
            onChange={setState}
            className={`${state ? activeColor : "bg-zinc-300"}
          relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
            <span className="sr-only">Use setting</span>
            <span
                aria-hidden="true"
                className={`${state ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
        </Switch>
    );
}
