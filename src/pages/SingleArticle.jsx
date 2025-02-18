import { useParams } from "react-router";
function SingleArticle() {
    const { id } = useParams();
    return <p>Article ID: {id}</p>;
}

export default SingleArticle;
