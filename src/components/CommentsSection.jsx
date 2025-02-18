import { useEffect, useState } from "react";
import { getComments } from "../api/api";
import VotingButtons from "./VotingButtons";

function CommentSection({ commentsVisible, article }) {
    const [comments, setComments] = useState("");
    const [isLoadingComments, setIsLoadingComments] = useState(true);

    useEffect(() => {
        if (commentsVisible) {
            getComments(article)
                .then((response) => {
                    setIsLoadingComments(false);
                    setComments(response);
                })
                .catch((err) => console.log(response));
        }
        return () => {};
    }, [commentsVisible]);

    if (isLoadingComments && commentsVisible) return "Loading comments...";

    return commentsVisible ? <p>{JSON.stringify(comments)}</p> : <p>No comments</p>;
}

export default CommentSection;
