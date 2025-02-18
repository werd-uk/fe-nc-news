import { Skull, ChatCircleText } from "@phosphor-icons/react";

function PlaceholderCard() {
    return (
        <div className="rounded-lg shadow-[0px_18px_15px_-14px_rgba(0,_0,_0,_0.3)] hover:shadow-[0px_29px_15px_-14px_rgba(0,_0,_0,_0.3)] p-2 border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <img className="w-full aspect-video object-cover rounded-lg" src="https://placedog.net/500/g?random" />
            <div className="xs:p-1 p-2">
                <h3 className="text-xlgfont-semibold text-gray-900 dark:text-white lg:line-clamp-1 line-clamp-2">Loading</h3>

                <div className="mt-4 flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                        <p className="flex gap-3">
                            <span className="flex flex-nowrap gap-1">
                                <Skull></Skull>0
                            </span>
                            <span className="flex flex-nowrap gap-1">
                                <ChatCircleText></ChatCircleText>0
                            </span>
                        </p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default PlaceholderCard;
