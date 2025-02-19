import { useEffect, useState } from "react";
import { getComments } from "../api/api";
import Comment from "./Comment";

function CommentSection({ commentsVisible, setCommentsVisible, article }) {
    const [comments, setComments] = useState([]);
    const [isLoadingComments, setIsLoadingComments] = useState(true);
    const allComments = comments.map((comment) => {
        return !isLoadingComments ? <Comment key={comment.comment_id} comment={comment} count={comment.votes}></Comment> : <></>;
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
            <h1 className="mt-5">Comments</h1>
            {allComments}
        </>
    ) : (
        <button className="mt-5 default-button" onClick={() => setCommentsVisible(!commentsVisible)}>
            Show Comments
        </button>
    );
}

export default CommentSection;
