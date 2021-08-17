import React from 'react'
import { Link } from "react-router-dom";
import { Routes, Route, Navigate } from 'react-router';
import { KanBanScreen } from 'screens/KanBan';
import { TaskGroupScreen } from 'screens/TaskGroup'

export const ProjectScreen = () => {
    return (
        <div>
            <h1>ProjectScreen</h1>
            <Link to={'kanban'}>看板</Link>
            <Link to={'taskgroup'}>任务组</Link>
            <Routes>
                <Route path={'/kanban'} element={<KanBanScreen />}></Route>
                <Route path={'/taskgroup'} element={<TaskGroupScreen />}></Route>
                <Navigate to={window.location.pathname + '/kanban' }/>
            </Routes>
        </div>
    )
}