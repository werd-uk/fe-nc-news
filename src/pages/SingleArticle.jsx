import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticle } from "../api/api";
import { getAltTag } from "../api/pexels";
import VotingButtons from "../components/VotingButtons";
import CommentSection from "../components/comments/CommentsSection";

function SingleArticle() {
    const { id } = useParams();

    const [commentsVisible, setCommentsVisible] = useState(false);
    const [currentArticle, setCurrentArticle] = useState({});
    const [articleVotes, setArticleVotes] = useState(0);
    const [imageAltTag, setImageAltTag] = useState("");

    useEffect(() => {
        getArticle(id)
            .then((response) => {
                setCurrentArticle(response);
                setArticleVotes(response.votes);

                return response.article_img_url;
            })
            .then((imageUrl) => {
                getAltTag(imageUrl)
                    .then((response) => {
                        setImageAltTag(response.alt);
                    })
                    .catch(() => {
                        setImageAltTag("Unable to retrieve Alt Tag");
                    });
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
                    <div className="bg-gray-300 p-2 rounded-sm order-2 lg:col-span-1 md:col-span-2 col-span-full aspect-video">
                        <figure>
                            <img className="object-cover rounded-lg pb-2" src={currentArticle.article_img_url} alt={imageAltTag} />
                            <figcaption className="text-sm">{imageAltTag}</figcaption>
                        </figure>
                    </div>
                    <div className="order-1 col-span-full text-3xl">
                        <h2>{currentArticle.title}</h2>
                    </div>
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
