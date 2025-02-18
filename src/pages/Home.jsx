import { useState, useEffect } from "react";
import { getArticles } from "../api/api";
import { ArrowDown, ArrowUp } from "@phosphor-icons/react";
import ArticleGrid from "../components/ArticleGrid";

function Home() {
    const [articleList, setArticleList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [topic, setTopic] = useState(null);
    const [sort, setSort] = useState("comment_count");
    const [orderDesc, setOrderDesc] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const order = orderDesc ? "DESC" : "ASC";
        getArticles({ topic, sort_by: sort, order })
            .then((response) => {
                setArticleList(response.data.rows);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    }, [sort, orderDesc, topic]);

    return (
        <div>
            <div className="flex flex-nowrap gap-5 mb-5 items-center">
                <h1 className="text-2xl">Articles</h1>
                <button
                    className={sort === "comment_count" ? "default-button current-sort-button" : "default-button"}
                    onClick={() => {
                        setSort("comment_count");
                        setOrderDesc(!orderDesc);
                    }}>
                    <span>Chatty</span>
                    {sort === "comment_count" ? orderDesc ? <ArrowDown /> : <ArrowUp /> : <></>}
                </button>
                <button
                    className={sort === "votes" ? "default-button current-sort-button" : "default-button"}
                    onClick={() => {
                        setSort("votes");
                        setOrderDesc(!orderDesc);
                    }}>
                    <span>Popular</span>
                    {sort === "votes" ? orderDesc ? <ArrowDown /> : <ArrowUp /> : <></>}
                </button>
                <button
                    className={sort === "created_at" ? "default-button current-sort-button" : "default-button"}
                    onClick={() => {
                        setSort("created_at");
                        setOrderDesc(!orderDesc);
                    }}>
                    <span>New</span>
                    {sort === "created_at" ? orderDesc ? <ArrowDown /> : <ArrowUp /> : <></>}
                </button>
            </div>
            <ArticleGrid articleList={articleList} isLoading={isLoading}></ArticleGrid>
        </div>
    );
}

export default Home;
