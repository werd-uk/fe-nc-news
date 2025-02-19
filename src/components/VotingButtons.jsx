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
        <div key={id} className="flex bg-black/10 rounded-sm max-w-max">
            <span className="flex gap-2 px-2">
                <button className="hover:bg-red-500/20 hover:border-1 hover:border-red-500/20 rounded-sm min-w-7 justify-items-center" onClick={() => amendVote(-1)}>
                    <Skull className="rotate-180" color="#bc0000" weight="duotone" size={23} />
                </button>
                <div className="w-9 h-10 p-2 rounded-sm">
                    {updatingVotes ? (
                        <LoadingSpinner className="self-center" />
                    ) : (
                        <div>
                            <p className="text-xl text-center">{votes}</p>
                        </div>
                    )}
                </div>
                <button className=" hover:bg-green-500/20 hover:border-1 hover:border-green-800/20 rounded-sm min-w-7 justify-items-center" onClick={() => amendVote(1)}>
                    <Skull color="#015607" weight="duotone" size={23} />
                </button>
            </span>
        </div>
    );
}

export default VotingButtons;
