import axios from "axios";

const ncApi = axios.create({ baseURL: "https://werd-nc-news.onrender.com/api", headers: { "Content-Type": "application/json" } });

export const getArticles = (query) => {
    return ncApi
        .get("/articles", { params: query })
        .then((response) => {
            return response;
        })
        .catch((err) => console.log(err));
};
