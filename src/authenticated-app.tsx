import React from 'react'
import { useAuth } from 'context/auth-context';
import { ProjectListScreen } from "screens/project-list";
import styled from '@emotion/styled';
import { Button, Dropdown, Menu } from "antd";
import { Row } from 'components/lib';
import { ReactComponent as SoftwareLogo } from 'assets/software-logo.svg'
import { Routes, Route, Navigate } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { ProjectScreen } from 'screens/project';
import { resetRoute } from 'utils';

export const AuthenticatedApp = () => {
    return (
        <Container>
            <PageHeader></PageHeader>
            <Main>
                <Router>
                    <Routes>
                        <Route path='/projects' element={<ProjectListScreen />}></Route>
                        <Route path='/projects/:projectId/*' element={<ProjectScreen />}></Route>
                        <Navigate to={'/projects'} />
                    </Routes>
                </Router>
            </Main>
        </Container>
    )
}

const PageHeader = () => {
    const { logout, user } = useAuth()
    const menu = (
        <Menu>
            <Menu.Item key={'logout'}>
                <Button type="text" onClick={logout}>
                    登出
                </Button>
            </Menu.Item>
        </Menu>
    )
    return (
        <Header between={true}>
            <HeaderLeft gap={true}>
                <Router>
                    <Button type="link" onClick={resetRoute}>
                        <SoftwareLogo width={'9rem'} color={'rgb(38,132,255)'} />
                    </Button>
                </Router>
                <h2>项目</h2>
                <h2>用户</h2>
            </HeaderLeft>
            <HeaderRight>
                <Dropdown overlay={menu}>
                    <Button type="link" onClick={e => e.preventDefault()}>
                        Hi, {user?.name}
                    </Button>
                </Dropdown>
            </HeaderRight>
        </Header>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-rows: 3rem 1fr 3rem;
    height: 100vh;
`

const Main = styled.main`
    height: calc(100vh - 3rem);
`

const Header = styled(Row)`
    padding:1.6rem;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.1);
    z-index: 1;
`

const HeaderLeft = styled(Row)``

const HeaderRight = styled.div`
    
`