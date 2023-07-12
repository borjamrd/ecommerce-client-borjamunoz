import { useEffect, useState } from "react";

export function useFetch(url, method, body) {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [controller, setController] = useState(null)


    useEffect(() => {
        fetchData()
    }, [])

    const saveData = (dataFetched) => {
        setData(dataFetched)
    }

    const fetchData = () => {
        const abortController = new AbortController();
        setController(abortController);
        fetch(url, {
            method,
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            },
            signal: abortController.signal
        })
            .then((resp) => {
                if (resp?.status === 500) {
                    return setError('error 500')
                };
                return resp.json()
            })
            .then((json) => { saveData(json) })
            .catch((error) => {
                console.log(error)
                if (error.name === 'AbortError') {
                    console.log('Cancel request')
                } else {
                    setError(error)
                }
            })
            .finally(() => setLoading(false))
        return () => abortController.abort()
    }

    const handleCancelRequest = () => {
        if (controller) {
            controller.abort()
            setError(new Error('Request cancelled'))
        }
    }

    return { data, loading, error, handleCancelRequest }
}