import { useState, useEffect, useContext } from "react";
import { UserAccount } from "../contexts/UserAccount";
import { useParams } from "react-router";
import { getComments, postCommentOnArticle } from "../../api/api";
import LoadingSpinner from "../../assets/Spinner";
import Notice from "../Notice";

function NewComment({ comments, setComments }) {
    const { loggedInUser } = useContext(UserAccount);
    const [tempCommentText, setTempCommentText] = useState("");
    const [isCommentValid, setIsCommentValid] = useState(false);
    const [currentUser, setCurrentUser] = useState("");
    const [inputNotice, setInputNotice] = useState({ visible: false, level: "notice", msg: "" });
    const [newCommentLoading, setNewCommentLoading] = useState(false);
    const { id } = useParams();

    const fecthLatestComments = (article_id) => {
        return getComments(article_id)
            .then((response) => {
                setComments(response);
            })
            .then(() => {
                setNewCommentLoading(false);
                setTimeout(() => {
                    setInputNotice({ visible: false });
                }, 2000);
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    };

    useEffect(() => {
        setCurrentUser(loggedInUser.username);
    }, [loggedInUser]);

    useEffect(() => {
        fecthLatestComments(id);
    }, [newCommentLoading]);

    const validateInput = (e) => {
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
        setIsCommentValid(e.target.value.length > 0);
    };

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setNewCommentLoading(true);
                    postCommentOnArticle(currentUser, id, tempCommentText)
                        .then(() => {
                            setInputNotice({ visible: true, msg: "Posted!", level: "success" });
                            setTempCommentText("");
                        })

                        .catch((err) => {
                            setInputNotice({ visible: true, msg: `${err.response.status}: ${err.response.data.detail}` });
                        });
                }}>
                <div className="mb-4 ms-1 -me-1 border border-gray-200 rounded-lg bg-gray-50 ">
                    <div className="px-2 py-2 bg-white rounded-t-lg ">
                        <label htmlFor="comment" className="sr-only">
                            Your comment
                        </label>
                        <textarea
                            id="comment"
                            rows="4"
                            className="w-full px-1 pt-1 text-sm text-gray-900 bg-white border-0 focus:ring-0"
                            placeholder="Write a comment..."
                            value={tempCommentText}
                            onChange={validateInput}
                            required></textarea>
                    </div>
                    <div className="flex items-center justify-end px-3 py-2 border-t border-gray-200 gap-2">
                        {inputNotice.visible ? <Notice message={inputNotice.msg} level={inputNotice.level} /> : null}
                        <button
                            type="submit"
                            disabled={!isCommentValid}
                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800 disabled:bg-gray-200 disabled:text-gray-500">
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
