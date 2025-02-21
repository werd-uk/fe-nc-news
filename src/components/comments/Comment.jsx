import { useState, useEffect, useContext } from "react";
import VotingButtons from "../VotingButtons";
import { deleteComment } from "../../api/api";
import { UserAccount } from "../contexts/UserAccount";
import { Trash } from "@phosphor-icons/react";

function Comment({ comment }) {
    const { loggedInUser } = useContext(UserAccount);
    const [commentVoteCount, setCommentVoteCount] = useState(0);
    const [commentHidden, setCommentHidden] = useState(false);

    useEffect(() => {
        if (commentHidden) {
            deleteComment(comment.comment_id).then((confirmation) => {
                if (confirmation === 204) {
                    ///do something with this later
                }
            });
        }
    }, [commentHidden]);

    return (
        <article className={commentHidden ? "fade-out" : "block"}>
            <div className="flex justify-between ms-5">
                <p className="text-sm text-right">{comment.author} says:</p>
            </div>
            <div className={`flex flex-col w-full rounded-sm m-1 gap-2 p-15 max-w-[1000px] bubble shadow-md ${loggedInUser.username === comment.author ? "author-comment" : ""}`}>
                <div className="ps-2">
                    <p>{comment.body}</p>
                </div>
                <div className="flex flex-row items-center justify-between gap-3">
                    <VotingButtons key={comment.comment_id} id={comment.comment_id} type="comment" initCount={comment.votes} votes={commentVoteCount} setVotes={setCommentVoteCount} />
                    {loggedInUser.username === comment.author ? (
                        <button
                            onClick={() => {
                                setCommentHidden(true);
                            }}
                            className="bg-white/20 rounded-md border-1 border-black/20 hover:border-black/30 hover:bg-white/50 w-fit self-end"
                            aria-label="delete button">
                            <Trash size={18} className="m-3 text-blue-800" />
                        </button>
                    ) : null}
                </div>
            </div>
        </article>
    );
}

export default Comment;
