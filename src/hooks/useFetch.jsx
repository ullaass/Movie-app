import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";
const useFetch = (url) => {
    const [data, setData] = useState(null);              //3 states created initalyy
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);

        fetchDataFromApi(url)                 // url will be dynamic we will be 
            .then((res) => {
                setLoading(false);          // after getting api call loading satet will get false
                setData(res);
            })
            .catch((err) => {
                setLoading(false);
                setError("Something went wrong!");
            });
        
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
