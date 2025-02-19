import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticle } from "../api/api";
import VotingButtons from "../components/VotingButtons";
import CommentSection from "../components/CommentsSection";

function SingleArticle() {
    const { id } = useParams();

    const [commentsVisible, setCommentsVisible] = useState(false);
    const [currentArticle, setCurrentArticle] = useState({});
    const [articleVotes, setArticleVotes] = useState(0);

    useEffect(() => {
        getArticle(id)
            .then((response) => {
                setCurrentArticle(response);
                setArticleVotes(response.votes);
            })
            .catch((err) => console.log(response));
    }, []);

    return (
        <>
            <article>
                <div className="grid grid-cols-4 w-full gap-2">
                    <div className="col-span-full">
                        <div className="flex flex-nowrap pb-5 gap-1">
                            <button className="default-button">{currentArticle.author}</button>
                            <button className="default-button">{currentArticle.topic}</button>
                            <button className="default-button">{new Date(currentArticle.created_at).toLocaleDateString("en-GB")}</button>
                        </div>
                    </div>
                    <div className="order-2 lg:col-span-1 md:col-span-2 col-span-full aspect-video">
                        <img className="object-cover rounded-lg" src={currentArticle.article_img_url} />
                    </div>
                    <div className="order-1 col-span-full text-3xl">{currentArticle.title}</div>
                    <div className="order-3 col-span-full sm:justify-self-end md:justify-self-start">
                        <VotingButtons type="article" id={currentArticle.article_id} initCount={currentArticle.votes} setVotes={setArticleVotes} votes={articleVotes} />
                    </div>
                    <div className="order-4 col-span-full">{currentArticle.body}</div>
                </div>

                <CommentSection commentsVisible={commentsVisible} setCommentsVisible={setCommentsVisible} article={id} />
            </article>
        </>
    );
}

export default SingleArticle;
