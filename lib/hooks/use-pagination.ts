import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {getQuery} from "../utils/get-query";


interface IPaginationHandlerData {
    total: number,
    data: any[]
}

type TSetState = Dispatch<SetStateAction<any[]>>
type TGetData = (query?: string) => Promise<IPaginationHandlerData>

export const usePagination = (handler: TGetData, setState: TSetState) => {
    const [total, setTotal] = useState<number>(0);
    const [skip, setSkip] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | string[] | null>(null)
    const [isNeedFetchData, setIsNeedFetchData] = useState<boolean>(false);
    const disablePagination = (skip / skip) <= Math.round((total / skip))


    const loadMore = () => {
        setSkip(skip + 10)
        setIsNeedFetchData(true)
        setLoading(true)
    }


    useEffect(() => {
        if (isNeedFetchData) {
            (async () => {
                try {
                    const response: IPaginationHandlerData = await handler(getQuery(skip))
                    setTotal(response.total)
                    console.log(response)
                    setState((prevState: Record<string, unknown>[]) => (
                        [...prevState, ...response.data]
                    ))
                } catch (e) {
                    setError(e)
                } finally {
                    setIsNeedFetchData(false)
                    setLoading(false)
                }

            })()
        }
    }, [skip, setTotal]);


    return {
        loadMore, setSkip, error, loading, total, setTotal, disablePagination
    }

}