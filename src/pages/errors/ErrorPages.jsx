import { SmileyMelting } from "@phosphor-icons/react";
export function NotFound({ objectType = "Page", msg }) {
    return (
        <div className="flex absolute top-0 bottom-0 items-center justify-center w-full rounded-md bg-gradient-to-b from-red-500 to-orange-500)]">
            <div className="flex flex-nowrap flex-wrap items-center justify-center gap-5 text-2xl text-center sm:text-5xl">
                <SmileyMelting className="size-30" />
                <h2>404: {objectType} not found</h2>
            </div>
        </div>
    );
}
