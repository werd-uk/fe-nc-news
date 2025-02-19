import axios from "axios";

const pexelsApi = axios.create({ baseURL: "https://api.pexels.com/v1/photos", headers: { "Content-Type": "application/json", Authorization: import.meta.env.VITE_PEXELS_API } });

export const getAltTag = (imageURL) => {
    const re = /(?<=photos\/)\d+/;
    const imageID = imageURL.match(re);

    return pexelsApi
        .get(`/${imageID[0]}`)
        .then((response) => {
            return response.data;
        })
        .catch((err) => console.log(err));
};
