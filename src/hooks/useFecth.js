import { useEffect, useState } from "react";

export function useFetch(url, method, body) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(Error)
    const [controller, setController] = useState(null)

    useEffect(() => {
        const abortController = new AbortController();
        setController(abortController);
        fetch(url, {
            method: 'GET',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            },
            signal: abortController.signal
        })
            .then((resp) => resp.json())
            .then((json) => setData(json))
            .catch((error) => {
                if (error.name === 'AbortError') {
                    console.log('Cancel request')
                } else {
                    setError(error)
                }
            })
            .finally(() => setLoading(false))
        return () => abortController.abort()
    }, [])

    const handleCancelRequest = () => {
        if (controller) {
            controller.abort()
            setError(new Error('Request cancelled'))
        }
    }

    return { data, loading, error, handleCancelRequest }
}