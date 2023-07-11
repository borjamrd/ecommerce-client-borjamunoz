import { useState } from "react";

export function useUpdateCart() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(Error)
    const [controller, setController] = useState(null)



    const fetchData = (url, method, body) => {
        setLoading(true)
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
            .then((resp) => resp.json())
            .then((json) => { setData(json) })
            .catch((error) => {
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

    return { data, loading, error, handleCancelRequest, fetchData }
}