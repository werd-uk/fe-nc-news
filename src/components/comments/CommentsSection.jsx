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
            <div className="ps-4">
                <button className="mt-5 default-button" onClick={() => setCommentsVisible(!commentsVisible)}>
                    Hide Comments
                </button>
            </div>
            <div className="bg-gray-200 rounded-lg mt-5 pt-1">
                <div className="border-b-1 border-gray-400 mb-2 bg-gray-300">
                    <h2 className="text-xl p-4">Comments ({comments.length})</h2>
                </div>
                <div className="p-4">
                    <NewComment comments={comments} setComments={setComments}></NewComment>
                    <CommentList comments={comments} isLoadingComments={isLoadingComments} />
                </div>
            </div>
        </>
    ) : (
        <button className="mt-5 default-button" onClick={() => setCommentsVisible(!commentsVisible)}>
            Show Comments
        </button>
    );
}

export default CommentSection;
