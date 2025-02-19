import { useState } from "react";
import VotingButtons from "../VotingButtons";

function Comment({ comment }) {
    const [commentVoteCount, setCommentVoteCount] = useState(0);

    return (
        <article>
            <div className="bg-gray-500 w-full rounded-sm m-1 p-15 max-w-[1000px] bubble">
                <div>
                    <p className="font-bold">{comment.author} says:</p>
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
