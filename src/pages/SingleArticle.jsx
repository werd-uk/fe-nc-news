import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticle } from "../api/api";
import { getAltTag } from "../api/pexels";
import VotingButtons from "../components/VotingButtons";
import { Tag, Calendar } from "@phosphor-icons/react";
import { NotFound } from "./errors/ErrorPages";
import CommentSection from "../components/comments/CommentsSection";
import { getUser } from "../api/api";

function SingleArticle() {
    const { id } = useParams();

    const [commentsVisible, setCommentsVisible] = useState(false);
    const [isLoadingArticle, setIsLoadingArticle] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [currentArticle, setCurrentArticle] = useState({});
    const [articleVotes, setArticleVotes] = useState(0);
    const [imageAltTag, setImageAltTag] = useState("");
    const [articleAuthor, setArticleAuthor] = useState({});

    useEffect(() => {
        setIsLoadingArticle(true);
        getArticle(id)
            .then((response) => {
                setCurrentArticle(response);
                setArticleVotes(response.votes);
                setIsLoadingArticle(false);
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

            .catch((err) => {
                if (err.status === 404) {
                    setIsLoadingArticle(false);
                    setNotFound(true);
                }
            });
    }, []);

    return !notFound && !isLoadingArticle ? (
        <>
            <article className="max-w-[1000px] pt-1 pb-1 shadow-xl">
                <div className="grid bg-gray-200 grid-cols-4 w-full gap-2">
                    <div className="col-span-full">
                        <div className="flex flex-wrap p-5 gap-1 bg-gray-300 border-b-2 border-gray-400">
                            <div className="flex grow gap-2">
                                <button className="default-button max-w-fit max-h-fit flex-none">
                                    <Tag weight="duotone" className="me-2" />

                                    {currentArticle.topic}
                                </button>
                                <button className="default-button max-w-fit max-h-fit flex-none">
                                    <Calendar weight="duotone" className="me-2" />
                                    {new Date(currentArticle.created_at).toLocaleDateString("en-GB")}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col p-5 col-span-full">
                        <div className="flex flex-col gap-2">
                            <div>
                                <h2 className="xs:text-md md:text-3xl mb-2">{currentArticle.title}</h2>
                                <div className="bg-gray-300 p-3 xs:p-2 rounded-sm max-w-fit">
                                    <figure>
                                        <img className="object-cover rounded-lg pb-2" src={currentArticle.article_img_url} alt={imageAltTag} />
                                        <figcaption className="text-sm">{imageAltTag}</figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div className="flex-none flex-col py-2 px-3 rounded-sm items-center gap-2 max-w-fit">
                                <div className="flex no-wrap items-center">
                                    <img className="me-4 rounded-full aspect-square max-h-10" alt={`The avatar for the author ${articleAuthor.name}`} src={`${articleAuthor.avatar_url}`} />
                                    <div className="flex flex-col">
                                        <p className="font-bold">{articleAuthor.name}</p>
                                        <p>{currentArticle.author}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ps-2">
                                <VotingButtons type="article" id={currentArticle.article_id} initCount={currentArticle.votes} setVotes={setArticleVotes} votes={articleVotes} />
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
    ) : isLoadingArticle ? null : (
        <NotFound objectType="Article"></NotFound>
    );
}

export default SingleArticle;
