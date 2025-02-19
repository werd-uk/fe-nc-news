import axios from "axios";

const ncApi = axios.create({ baseURL: "https://werd-nc-news.onrender.com/api", headers: { "Content-Type": "application/json" } });

export const getArticles = (query) => {
    return ncApi
        .get("/articles", { params: query })
        .then((response) => {
            return response.data;
        })
        .catch((err) => console.log(err));
};

export const getArticle = (id) => {
    return ncApi
        .get(`/articles/${id}`)
        .then((response) => {
            return response.data;
        })
        .catch((err) => console.log(err));
};

export const getComments = (article_id) => {
    return ncApi
        .get(`/articles/${article_id}/comments`)
        .then((response) => {
            return response.data;
        })
        .catch((err) => console.log(err));
};

export const patchVote = (object, id, number) => {
    return ncApi
        .patch(`/${object}s/${id}`, { int_votes: number })
        .then((response) => {
            return response.data;
        })
        .catch((err) => console.log(err));
};
