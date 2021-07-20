import React from "react"
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { useState, useEffect } from "react";
import { cleanObject } from "utils";
import qs from 'qs'

export const ProjectListScreen = () => {
    const api = process.env.REACT_APP_API_URL
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`${api}/projects?${qs.stringify(cleanObject(param))}`).then(async res => {
            if (res.ok) {
                setList(await res.json())
            }
        })
    // eslint-disable-next-line
    }, [param])

    useEffect(()=>{
        fetch(`${api}/users`).then(async res => {
            if (res.ok) {
                setUsers(await res.json())
            }
        })
    // eslint-disable-next-line
    },[])

    return (
        <div>
            <SearchPanel param={param} setParam={setParam} users={users}></SearchPanel>
            <List list={list} setList={setList} users={users}></List>
        </div>
    )
}