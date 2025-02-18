import ArticleCard from "./ArticleCard";
import PlaceholderCard from "./PlaceholderCard";

function ArticleGrid({ articleList, isLoading }) {
    const articleCards = articleList.map((article) => {
        return isLoading ? <PlaceholderCard key={article.article_id} /> : <ArticleCard key={article.article_id} article={article} />;
    });

    return (
        <>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-3 gap-y-5">{articleCards}</div>
        </>
    );
}

export default ArticleGrid;
