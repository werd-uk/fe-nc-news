import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { getArticle } from "../api/api";
import { getAltTag } from "../api/pexels";
import VotingButtons from "../components/VotingButtons";
import { UserCircle, Tag, Calendar } from "@phosphor-icons/react";
import CommentSection from "../components/comments/CommentsSection";
import { UserAccount } from "../components/contexts/UserAccount";

function SingleArticle() {
    const { id } = useParams();

    const [commentsVisible, setCommentsVisible] = useState(false);
    const [currentArticle, setCurrentArticle] = useState({});
    const [articleVotes, setArticleVotes] = useState(0);
    const [imageAltTag, setImageAltTag] = useState("");
    const { loggedInUser } = useContext(UserAccount);

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
            <article className="max-w-[1000px]">
                <div className="grid bg-gray-200 grid-cols-4 w-full gap-2">
                    <div className="col-span-full">
                        <div className="flex flex-wrap p-5 gap-1 bg-gray-300 border-b-1 border-gray-400">
                            <button className="default-button max-w-fit flex-none">
                                <UserCircle className="me-2" />
                                {currentArticle.author}
                            </button>
                            <button className="default-button max-w-fit flex-none">
                                <Tag weight="duotone" className="me-2" />
                                {currentArticle.topic}
                            </button>
                            <button className="default-button max-w-fit flex-none">
                                <Calendar weight="duotone" className="me-2" />
                                {new Date(currentArticle.created_at).toLocaleDateString("en-GB")}
                            </button>
                            <VotingButtons type="article" id={currentArticle.article_id} initCount={currentArticle.votes} setVotes={setArticleVotes} votes={articleVotes} />
                        </div>
                    </div>
                    <div className="flex flex-col p-5 col-span-full">
                        <div className="bg-gray-300 p-3 rounded-sm order-2 max-w-max">
                            <figure>
                                <img className="object-cover rounded-lg pb-2" src={currentArticle.article_img_url} alt={imageAltTag} />
                                <figcaption className="text-md">{imageAltTag}</figcaption>
                            </figure>
                        </div>
                        <div className="order-1 col-span-full text-3xl pb-2">
                            <h2>{currentArticle.title}</h2>
                        </div>

                        <div className="order-3 col-span-full max-w-max">
                            <article className="text-wrap px-2 pt-5">{currentArticle.body}</article>
                        </div>
                    </div>
                </div>

                <CommentSection commentsVisible={commentsVisible} setCommentsVisible={setCommentsVisible} article={id} />
            </article>
        </>
    );
}

export default SingleArticle;
