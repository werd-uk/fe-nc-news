import { Skull, ChatCircleText } from "@phosphor-icons/react";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { getAltTag } from "../api/pexels";

function ArticleCard({ article }) {
    const [imageAltTag, setImageAltTag] = useState("");

    useEffect(() => {
        if (import.meta.env.VITE_PEXELS_API) {
            getAltTag(article.article_img_url)
                .then((response) => {
                    setImageAltTag(response.alt);
                })
                .catch(() => setImageAltTag("Unable to retrieve Alt Tag"));
        } else {
            setImageAltTag("");
        }
    });

    return (
        <Link className="flex card" to={"/articles/" + article.article_id}>
            <div className="rounded-lg h-full shadow-[0px_18px_15px_-14px_rgba(0,_0,_0,_0.3)] hover:shadow-[0px_29px_15px_-14px_rgba(0,_0,_0,_0.3)] p-2 border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <img className="w-full aspect-video object-cover rounded-lg" src={`${article.article_img_url}`} alt={imageAltTag} />
                <div className="grow xs:p-1 p-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white lg:line-clamp-1 line-clamp-2">{article.title}</h3>

                    <div className="mt-4 h-full flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                            <p className="flex gap-3">
                                <span className="flex flex-nowrap gap-1">
                                    <Skull></Skull>
                                    {article.votes}
                                </span>
                                <span className="flex flex-nowrap gap-1">
                                    <ChatCircleText></ChatCircleText>
                                    {article.comment_count}
                                </span>
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ArticleCard;
