import axios from "axios";

const ncApi = axios.create({ baseURL: "https://werd-nc-news.onrender.com/api", headers: { "Content-Type": "application/json" } });

export const getArticles = (query) => {
    return ncApi
        .get("/articles", { params: query })
        .then((response) => {
            return Promise.resolve(response.data);
        })
        .catch((err) => {
            return Promise.reject({ msg: err.message, status: err.status });
        });
};

export const getArticle = (id) => {
    return ncApi
        .get(`/articles/${id}`)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            return Promise.reject(err);
        });
};

export const getComments = (article_id) => {
    return ncApi
        .get(`/articles/${article_id}/comments`)
        .then((response) => {
            return response.data.comments;
        })
        .catch((err) => {
            return Promise.reject(err);
        });
};

export const patchVote = (object, id, number) => {
    return ncApi
        .patch(`/${object}s/${id}`, { int_votes: number })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            return Promise.reject(err);
        });
};

export const postCommentOnArticle = (currentUser, article_id, content) => {
    return ncApi
        .post(`/articles/${article_id}/comments`, { username: currentUser, body: content })
        .then((response) => {
            return response;
        })
        .catch((err) => {
            return Promise.reject(err);
        });
};

export const deleteComment = (comment_id) => {
    return ncApi
        .delete(`/comments/${comment_id}`)
        .then((response) => {
            return response.status;
        })
        .catch((err) => {
            return Promise.reject(err);
        });
};

export const getUsers = () => {
    return ncApi
        .get("/users")
        .then((response) => {
            return response.data.users;
        })
        .catch((err) => {
            return Promise.reject(err);
        });
};
export const getUser = (username) => {
    return ncApi
        .get(`/users/${username}`)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            return Promise.reject(err);
        });
};

export const getTopics = () => {
    return ncApi
        .get(`/topics`)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            return Promise.reject(err);
        });
};
