import { useEffect, useState } from "react";
import { getComments } from "../api/api";
import Comment from "./Comment";
import VotingButtons from "./VotingButtons";

function CommentSection({ commentsVisible, setCommentsVisible, article }) {
    const [comments, setComments] = useState([]);
    const [isLoadingComments, setIsLoadingComments] = useState(true);
    const allComments = comments.map((comment) => {
<<<<<<< HEAD
        return !isLoadingComments ? <Comment comment={comment} count={comment.votes}></Comment> : <></>;
=======
        return !isLoadingComments ? <Comment comment={comment}></Comment> : <></>;
>>>>>>> 513d0a797c2ce25e03fd9cb772a822dffe3c8d10
    });

    useEffect(() => {
        if (commentsVisible) {
            getComments(article)
                .then((response) => {
                    console.log(response);
                    setComments(response.comments);
                    console.log(comments);
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
