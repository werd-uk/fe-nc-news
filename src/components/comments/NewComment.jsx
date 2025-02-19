import { useState } from "react";
import { useParams } from "react-router";
import { postCommentOnArticle } from "../../api/api";

function NewComment() {
    const [tempCommentText, setTempCommentText] = useState("");
    const [keyPress, setKeyPress] = useState(null);
    const [currentUser, setCurrentUser] = useState("weegembump");
    const [inputNotice, setInputNotice] = useState({ visible: false, type: "notice", msg: "" });
    const { id } = useParams();
    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    postCommentOnArticle(currentUser, id, tempCommentText)
                        .then((response) => {
                            setTempCommentText("");
                            setInputNotice({ visible: false, msg: "" });
                        })
                        .catch((err) => {
                            setInputNotice({ visible: true, msg: `${err.response.status}: ${err.response.data.detail}` });
                        });
                }}>
                <div className="xl:w-[50vw] mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                        <label htmlFor="comment" className="sr-only">
                            Your comment
                        </label>
                        <textarea
                            id="comment"
                            rows="4"
                            className="w-full px-0 pt-1 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                            placeholder="Write a comment..."
                            value={tempCommentText}
                            onKeyDown={(e) => {
                                setKeyPress(e.key);
                            }}
                            onKeyUp={(e) => {
                                setKeyPress("");
                            }}
                            onChange={(e) => {
                                if (/[a-zA-Z0-9\t\n ./<>?;:"'`!@#$%&()\[\]{}_+=|\\-]/.test(keyPress)) {
                                    setInputNotice({ visible: false, msg: "" });
                                    setTempCommentText(e.target.value);
                                } else {
                                    setInputNotice({ visible: true, msg: "Character not allowed!" });
                                }
                            }}
                            required></textarea>
                    </div>
                    <div className="flex items-center justify-end px-3 py-2 border-t dark:border-gray-600 border-gray-200 gap-2">
                        {inputNotice.visible ? (
                            <div className="p-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                <span className="font-medium">{inputNotice.msg}</span>
                            </div>
                        ) : null}
                        <button
                            type="submit"
                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                            Post comment as {currentUser}
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default NewComment;
