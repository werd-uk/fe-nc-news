import Comment from "./Comment";

function CommentList({ comments, isLoadingComments }) {
    return comments.map((comment) => {
        return !isLoadingComments ? <Comment key={comment.id} comment={comment} count={comment.votes}></Comment> : <></>;
    });
}

export default CommentList;
