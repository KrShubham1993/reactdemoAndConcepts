import {useState, useEffect} from 'react';

export function useFetch(url) {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
        .then ((res) => {
            return res.json();
        })
        .then(data => {
            setData(data);
            setIsLoading(false);
        })
        .catch(err => {
            setIsError(true)
        })
    }, [url]);

    return {data, isLoading, isError}
}