import { useEffect } from "react"
import { cleanObject } from "utils"
import { useHttp } from "utils/http"
import { User } from 'screens/project-list/search-panel'
import { useAsync } from "./use-async"

export const useUsers = (params?: Partial<User>) => {
    const client = useHttp()
    const { run, ...result } = useAsync<User[]>()
    useEffect(() => {
        run(client(`users`, { data: cleanObject(params || {}) }))
        // eslint-disable-next-line
    }, [params])

    return {
        ...result
    }
}