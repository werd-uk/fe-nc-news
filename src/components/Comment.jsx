import VotingButtons from "./VotingButtons";

function Comment({ comment }) {
    return (
        <>
            <div className="bg-gray-500 w-full rounded-sm m-1 p-2 max-w-[1000px] bubble">
<<<<<<< HEAD
                <div>
                    {comment.comment_id}
                    {": "}
                    {comment.body}
                </div>
                <div>
                    <VotingButtons type="comment" initCount={comment.votes} />
=======
                <div>{comment.body}</div>
                <div>
                    <VotingButtons type="comment" />
>>>>>>> 513d0a797c2ce25e03fd9cb772a822dffe3c8d10
                </div>
            </div>
        </>
    );
}

export default Comment;
