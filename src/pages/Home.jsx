import { useState, useEffect } from "react";
import { getArticles } from "../api/api";
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
                    className="default-button"
                    onClick={() => {
                        setSort("comment_count");
                        setOrderDesc(!orderDesc);
                    }}>
                    Chatty
                </button>
                <button
                    className="default-button"
                    onClick={() => {
                        setSort("votes");
                        setOrderDesc(!orderDesc);
                    }}>
                    Popular
                </button>
                <button
                    className="default-button"
                    onClick={() => {
                        setSort("created_at");
                        setOrderDesc(!orderDesc);
                    }}>
                    New
                </button>
            </div>
            <ArticleGrid articleList={articleList} isLoading={isLoading}></ArticleGrid>
        </div>
    );
}

export default Home;
