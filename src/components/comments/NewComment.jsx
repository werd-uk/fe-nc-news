import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getComments, postCommentOnArticle } from "../../api/api";
import LoadingSpinner from "../../assets/Spinner";
import Notice from "../Notice";

function NewComment({ comments, setComments }) {
    const [tempCommentText, setTempCommentText] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [currentUser, setCurrentUser] = useState("weegembump");
    const [inputNotice, setInputNotice] = useState({ visible: false, level: "notice", msg: "" });
    const [newCommentLoading, setNewCommentLoading] = useState(false);
    const { id } = useParams();

    const fecthLatestComments = (article_id) => {
        return getComments(article_id)
            .then((response) => {
                setComments(response);
                setInputNotice({ visible: true, msg: "Posted!", level: "success" });
            })
            .then(() => {
                setNewCommentLoading(false);
                setTimeout(() => {
                    setInputNotice({ visible: false });
                }, 2000);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fecthLatestComments(id);
    }, [newCommentLoading]);

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setNewCommentLoading(true);
                    postCommentOnArticle(currentUser, id, tempCommentText)
                        .then(() => {
                            setTempCommentText("");
                        })

                        .catch((err) => {
                            setInputNotice({ visible: true, msg: `${err.response.status}: ${err.response.data.detail}` });
                        });
                }}>
                <div className="xl:w-[50vw] mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="px-2 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                        <label htmlFor="comment" className="sr-only">
                            Your comment
                        </label>
                        <textarea
                            id="comment"
                            rows="4"
                            className="w-full px-1 pt-1 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                            placeholder="Write a comment..."
                            value={tempCommentText}
                            onChange={(e) => {
                                const re = /[^a-zA-Z0-9\t\n ./<>?;:"'`!@*#$%&()\[\]{}_+=|\\-]/u;
                                if (!re.test(e.target.value)) {
                                    setInputNotice({ visible: false, level: "", msg: "" });
                                    setTempCommentText(e.target.value);
                                } else {
                                    setInputNotice({ visible: true, level: "notice", msg: "Character(s) not allowed!" });
                                    setTimeout(() => {
                                        setInputNotice({ visible: false });
                                    }, 2000);
                                }
                            }}
                            required></textarea>
                    </div>
                    <div className="flex items-center justify-end px-3 py-2 border-t dark:border-gray-600 border-gray-200 gap-2">
                        {inputNotice.visible ? <Notice message={inputNotice.msg} level={inputNotice.level} /> : null}
                        <button
                            type="submit"
                            disabled={isValid}
                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                            Post comment as {currentUser}
                            {newCommentLoading ? <LoadingSpinner /> : null}
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default NewComment;
