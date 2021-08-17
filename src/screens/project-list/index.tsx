import React from "react"
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { useDebounce } from "utils";
import styled from '@emotion/styled'
import { Typography } from "antd";
import { useProjects } from "utils/project";
import { useUsers } from "utils/user";
import { useUrlQueryParam } from "utils/url";

export const ProjectListScreen = () => {
    const [param, setParam] = useUrlQueryParam(['name', 'personId'])

    const debouceParam = useDebounce(param, 500)
    const { isLoading, isError, error, data: list } = useProjects(debouceParam)
    const { data: users } = useUsers()

    return (
        <Container>
            <h1>项目列表</h1>
            <SearchPanel param={param} setParam={setParam} users={users || []}></SearchPanel>
            {isError ? <Typography.Text type="danger">{error?.message}</Typography.Text> : null}
            <List loading={isLoading} dataSource={list || []} users={users || []}></List>
        </Container>
    )
}

// ProjectListScreen.whyDidYouRender = true

const Container = styled.div`
    padding: 2.2rem;
`