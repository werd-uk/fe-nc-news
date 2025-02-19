import { useState } from "react";
import VotingButtons from "../VotingButtons";
import { Trash } from "@phosphor-icons/react";

function Comment({ comment }) {
    const [commentVoteCount, setCommentVoteCount] = useState(0);
    const [commentHidden, setCommentHidden] = useState(false);

    return (
        <article className={commentHidden ? "fade-out" : "block"}>
            <div className="bg-gray-500 w-full rounded-sm m-1 p-15 max-w-[1000px] bubble">
                <div className="flex justify-between">
                    <p className="font-bold">{comment.author} says:</p>
                    <button
                        onClick={() => {
                            setCommentHidden(true);
                        }}
                        className="bg-white/20 rounded-md hover:bg-white/50">
                        <Trash size={18} className="m-1" />
                    </button>
                </div>
                <div className="ps-2">
                    <p className="italic">"{comment.body}"</p>
                </div>
                <div>
                    <VotingButtons key={comment.comment_id} id={comment.comment_id} type="comment" initCount={comment.votes} votes={commentVoteCount} setVotes={setCommentVoteCount} />
                </div>
            </div>
        </article>
    );
}

export default Comment;
