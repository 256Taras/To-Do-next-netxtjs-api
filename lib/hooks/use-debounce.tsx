import {useCallback, useRef} from "react";


type TCallback = (args: any) => unknown

export function useDebounce(callback: TCallback, delay: number) {

    const timer = useRef<undefined | NodeJS.Timeout>()

    return useCallback((...args) => {
        if (!!timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {

            // @ts-ignore
            callback(...args)
        }, delay)

    }, [callback, delay])
}