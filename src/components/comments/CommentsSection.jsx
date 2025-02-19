import { useEffect, useState } from "react";
import { getComments } from "../../api/api";
import Comment from "./Comment";
import NewComment from "./NewComment";

function CommentSection({ commentsVisible, setCommentsVisible, article }) {
    const [comments, setComments] = useState([]);
    const [isLoadingComments, setIsLoadingComments] = useState(true);
    const allComments = comments.map((comment) => {
        return !isLoadingComments ? <Comment key={comment.id} comment={comment} count={comment.votes}></Comment> : <></>;
    });

    useEffect(() => {
        if (commentsVisible) {
            getComments(article)
                .then((response) => {
                    setComments(response.comments);
                })
                .catch((err) => console.log(response));
            setIsLoadingComments(false);
        }
        return () => {};
    }, [commentsVisible]);

    if (isLoadingComments && commentsVisible) return "Loading comments...";

    return commentsVisible ? (
        <>
            <button className="mt-5 default-button" onClick={() => setCommentsVisible(!commentsVisible)}>
                Hide Comments
            </button>
            <div className="bg-gray-200 rounded-md m-2 px-4 pt-1">
                <h2 className="my-5 text-xl">Comments</h2>
                <NewComment comments={comments} setComments={setComments}></NewComment>
                {allComments}
            </div>
        </>
    ) : (
        <button className="mt-5 default-button" onClick={() => setCommentsVisible(!commentsVisible)}>
            Show Comments
        </button>
    );
}

export default CommentSection;
