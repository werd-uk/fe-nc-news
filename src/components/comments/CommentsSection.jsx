import { useEffect, useState } from "react";
import { getComments } from "../../api/api";
import CommentList from "./CommentList";

import NewComment from "./NewComment";

function CommentSection({ commentsVisible, setCommentsVisible, article }) {
    const [comments, setComments] = useState([]);
    const [isLoadingComments, setIsLoadingComments] = useState(true);

    useEffect(() => {
        if (commentsVisible) {
            getComments(article)
                .then((response) => {
                    setComments(response);
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
                <CommentList comments={comments} isLoadingComments={isLoadingComments} />
            </div>
        </>
    ) : (
        <button className="mt-5 default-button" onClick={() => setCommentsVisible(!commentsVisible)}>
            Show Comments
        </button>
    );
}

export default CommentSection;
