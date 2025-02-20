import ArticleGrid from "../components/ArticleGrid";
import { TopicSelector } from "../components/TopicSelect";
import { getArticles, getTopics } from "../api/api";
import { ArrowDown, ArrowUp } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function Topics() {
    const { topic_name } = useParams();
    const [articleList, setArticleList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [topic, setTopic] = useState([]);
    const [topicList, setTopicList] = useState([]);
    const [sort, setSort] = useState("created_at");
    const [orderDesc, setOrderDesc] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const order = orderDesc ? "DESC" : "ASC";
        getArticles({ topic: topic_name, sort_by: sort, order })
            .then((response) => {
                setIsError(false);
                setArticleList(response.rows);
                setIsLoading(false);
            })
            .catch((err) => {
                if (err.status === 404) {
                }
            });
    }, [sort, orderDesc, topic, topic_name]);

    useEffect(() => {
        getTopics().then((response) => {
            const topicList = response.data.map((topic) => {
                return topic;
            });
            setTopicList(topicList);
        });
    }, []);

    return articleList.length > 0 ? (
        <div>
            <div className="flex flex-nowrap gap-5 mb-5 items-center">
                <h2 className="text-2xl">Topics</h2>
                <TopicSelector key={topicList.slug} topicList={topicList} topic={topic} setTopic={setTopic} />
            </div>
            <div className="flex flex-nowrap gap-5 mb-5 items-center">
                <h3>Sort articles:</h3>
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
            <ArticleGrid articleList={articleList} isLoading={isLoading} />
        </div>
    ) : (
        <>Not Found</>
    );
}
export default Topics;
