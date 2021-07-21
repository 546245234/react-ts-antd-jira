import React from "react"
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { useState } from "react";
import { cleanObject, useMount, useDebounce } from "utils";
import qs from 'qs'

export const ProjectListScreen = () => {
    const api = process.env.REACT_APP_API_URL
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])
    const debouceParam = useDebounce(param, 500)

    useMount(() => {
        fetch(`${api}/projects?${qs.stringify(cleanObject(debouceParam))}`).then(async res => {
            if (res.ok) {
                setList(await res.json())
            }
        })
        // eslint-disable-next-line
    }, [debouceParam])

    useMount(() => {
        fetch(`${api}/users`).then(async res => {
            if (res.ok) {
                setUsers(await res.json())
            }
        })
        // eslint-disable-next-line
    })

    return (
        <div>
            <SearchPanel param={param} setParam={setParam} users={users}></SearchPanel>
            <List list={list} users={users}></List>
        </div>
    )
}