import { SmileyMelting } from "@phosphor-icons/react";
export function NotFound({ objectType = "Page", msg }) {
    return (
        <div className="grid h-[80dvh] w-full rounded-md bg-gradient-to-b from-red-500 to-orange-500)] place-items-center">
            <div className="flex items-center gap-5 text-5xl">
                <SmileyMelting />
                <h2>404: {objectType} not found</h2>
            </div>
        </div>
    );
}

export function BadRequest() {
    return <>BadRequest</>;
}

// https://www.pexels.com/photo/white-quote-paper-cutout-1111370/
