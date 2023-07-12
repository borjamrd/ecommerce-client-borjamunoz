import { useEffect, useState } from "react";

export function useFetchProducts(url, method, body, section) {

    const [data, setData] = useState(JSON.parse(localStorage.getItem('productList')) || null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [controller, setController] = useState(null)


    useEffect(() => {

        //data persistence
        if (!data) {
            setLoading(true)
            fetchData()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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

    const saveData = (dataFetched) => {
        localStorage.setItem('productList', JSON.stringify(dataFetched))
        setData(dataFetched)
    }

    const handleCancelRequest = () => {
        if (controller) {
            controller.abort()
            setError(new Error('Request cancelled'))
        }
    }

    return { data, loading, error, handleCancelRequest }
}