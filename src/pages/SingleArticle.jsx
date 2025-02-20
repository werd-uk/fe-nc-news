import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticle } from "../api/api";
import { getAltTag } from "../api/pexels";
import VotingButtons from "../components/VotingButtons";
import { Tag, Calendar } from "@phosphor-icons/react";
import CommentSection from "../components/comments/CommentsSection";
import { getUser } from "../api/api";

function SingleArticle() {
    const { id } = useParams();

    const [commentsVisible, setCommentsVisible] = useState(false);
    const [currentArticle, setCurrentArticle] = useState({});
    const [articleVotes, setArticleVotes] = useState(0);
    const [imageAltTag, setImageAltTag] = useState("");
    const [articleAuthor, setArticleAuthor] = useState({});

    useEffect(() => {
        getArticle(id)
            .then((response) => {
                setCurrentArticle(response);
                setArticleVotes(response.votes);

                return response;
            })
            .then((response) => {
                getAltTag(response.article_img_url)
                    .then((response) => {
                        setImageAltTag(response.alt);
                    })
                    .catch(() => {
                        setImageAltTag("Unable to retrieve Alt Tag");
                    });
                return response;
            })
            .then((response) => {
                getUser(response.author).then((response) => {
                    setArticleAuthor(response.data.user);
                });
            })

            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <article className="max-w-[1000px]">
                <div className="grid bg-gray-200 grid-cols-4 w-full gap-2">
                    <div className="col-span-full">
                        <div className="flex flex-wrap p-5 gap-1 bg-gray-300 border-b-1 border-gray-400">
                            <div className="flex grow gap-2">
                                <button className="default-button max-w-fit max-h-fit flex-none">
                                    <Tag weight="duotone" className="me-2" />

                                    {currentArticle.topic}
                                </button>
                                <button className="default-button max-w-fit max-h-fit flex-none">
                                    <Calendar weight="duotone" className="me-2" />
                                    {new Date(currentArticle.created_at).toLocaleDateString("en-GB")}
                                </button>
                                <VotingButtons type="article" id={currentArticle.article_id} initCount={currentArticle.votes} setVotes={setArticleVotes} votes={articleVotes} />
                            </div>
                            <div className="flex-none flex-col py-3 px-4 rounded-sm items-center gap-2 bg-gray-400 shadow-lg max-w-fit max-h-fit">
                                <div className="flex no-wrap items-center">
                                    <img className="me-4 rounded-full aspect-square max-h-10" src={`${articleAuthor.avatar_url}`} />
                                    <div className="flex flex-col">
                                        <p className="font-bold">{articleAuthor.name}</p>
                                        <p>{currentArticle.author}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col p-5 col-span-full">
                        <div className="bg-gray-300 p-3 rounded-sm order-2 max-w-max">
                            <figure>
                                <img className="object-cover rounded-lg pb-2" src={currentArticle.article_img_url} alt={imageAltTag} />
                                <figcaption className="text-md">{imageAltTag}</figcaption>
                            </figure>
                        </div>
                        <div className="flex">
                            <div>
                                <h2 className="text-3xl">{currentArticle.title}</h2>
                            </div>
                        </div>

                        <div className="col-span-full max-w-max">
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
