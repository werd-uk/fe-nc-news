import { Skull } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { patchVote } from "../api/api";
import LoadingSpinner from "../assets/Spinner";

function VotingButtons({ type, initCount, id, votes, setVotes }) {
    const [updatingVotes, setUpdatingVotes] = useState(true);

    const amendVote = (number) => {
        setUpdatingVotes(true);
        patchVote(type, id, number).then((response) => {
            setUpdatingVotes(false);
            setVotes(type === "comment" ? response[type].votes : response[type][0].votes);
        });
    };
    useEffect(() => {
        setVotes(initCount);
        setUpdatingVotes(false);
    }, []);

    return (
        <div key={id} className="flex bg-gray-400 rounded-sm max-w-fit max-h-fit p-1 self-start">
            <span className="flex gap-2 px-2">
                <button
                    aria-label={`down vote ${type} button`}
                    className="hover:bg-red-500/20 border-1 border-white/0 hover:border-1 hover:border-red-500/50 rounded-sm max-h-fit justify-items-center"
                    onClick={() => amendVote(-1)}>
                    <Skull className="rotate-180" color="#bc0000" weight="duotone" size={23} />
                    <span className="hidden">{`Down vote ${type}`}</span>
                </button>
                <div className="max-h-fit rounded-sm">
                    {updatingVotes ? (
                        <LoadingSpinner className="self-center" />
                    ) : (
                        <div>
                            <p className="text-xl text-center" aria-label="number of votes">
                                {votes}
                            </p>
                        </div>
                    )}
                </div>
                <button
                    aria-label={`down vote ${type} button`}
                    className=" hover:bg-green-500/20 border-1 border-white/0 hover:border-1 hover:border-green-800/50 rounded-sm max-h-fit justify-items-center"
                    onClick={() => amendVote(1)}>
                    <Skull color="#015607" weight="duotone" size={23} />
                    <span className="hidden">{`Up vote ${type}`}</span>
                </button>
            </span>
        </div>
    );
}

export default VotingButtons;
