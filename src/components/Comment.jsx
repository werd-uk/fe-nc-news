import VotingButtons from "./VotingButtons";

function Comment({ comment }) {
    return (
        <>
            <div className="bg-gray-500 w-full rounded-sm m-1 p-2 max-w-[1000px] bubble">
                <div>
                    {comment.comment_id}
                    {": "}
                    {comment.body}
                </div>
                <div>
                    <VotingButtons type="comment" initCount={comment.votes} />
                </div>
            </div>
        </>
    );
}

export default Comment;
