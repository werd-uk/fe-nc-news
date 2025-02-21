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
        <Link className="card transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102" to={"/articles/" + article.article_id}>
            <div className="flex xs:flex-row sm:flex-col rounded-lg h-full shadow-[0px_18px_15px_-14px_rgba(0,_0,_0,_0.3)] hover:shadow-[0px_29px_15px_-14px_rgba(0,_0,_0,_0.3)] p-2 border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <img className="aspect-square sm:aspect-video xs:w-20 sm:w-full object-cover rounded-lg" src={`${article.article_img_url}`} alt={imageAltTag} />
                <div className="grow xs:p-1 xs:ms-2 p-2 content-center">
                    <h3 className="md:text-md font-semibold text-gray-900 dark:text-white lg:line-clamp-1 line-clamp-2">{article.title}</h3>

                    <div className="xs:my-0 mt-4 xs:h-7 h-full flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                            <p className="flex gap-3">
                                <span className="flex flex-nowrap gap-1">
                                    <Skull />
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
