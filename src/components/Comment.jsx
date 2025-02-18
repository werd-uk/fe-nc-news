import { useState } from "react";
import VotingButtons from "./VotingButtons";

function Comment({ comment }) {
    const [commentVoteCount, setCommentVoteCount] = useState(0);

    return (
        <>
            <div className="bg-gray-500 w-full rounded-sm m-1 p-2 max-w-[1000px] bubble">
                <div>{comment.body}</div>
                <div>
                    <VotingButtons key={comment.comment_id} id={comment.comment_id} type="comment" initCount={comment.votes} votes={commentVoteCount} setVotes={setCommentVoteCount} />
                </div>
            </div>
        </>
    );
}

export default Comment;
