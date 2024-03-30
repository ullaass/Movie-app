import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";            //base url aur neeche token
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,                //Toekn we have to send headers when we make an api call
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {          //destructring data and axios.get method passing parameter          make http request aur jo url h wo endpints ka dta fetch kr k alag alag use krenge params wo h jo additional features like region language in poopular moie
            headers,
            params,                                         //configurtaion yo
        });
        console.log("fetcjdata",data)
        console.log("data initial",url)
        console.log("data headers",headers)
        console.log("data parasm",params)
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
