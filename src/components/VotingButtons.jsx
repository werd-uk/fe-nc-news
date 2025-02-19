import { Skull } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

function VotingButtons({ type, initCount }) {
    const [votes, setVotes] = useState(initCount);
    useEffect(() => {}, []);

    return (
        <div className="flex gap-1 bg-gray-400 p-1 rounded-sm max-w-max">
            <button>
                <Skull className="rotate-180" color="#bc0000" weight="duotone" />
            </button>
            <div className="bg-gray-300 px-2 rounded-sm">{votes || "0"}</div>
            <button>
                <Skull color="#015607" weight="duotone" />
            </button>
        </div>
    );
}

export default VotingButtons;
