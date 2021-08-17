import React, { useState } from 'react'
import LoginScreen from './login'
import RegisterScreen from './register'
import { Card, Button, Typography } from 'antd';
import styled from '@emotion/styled'
import logo from 'assets/logo.svg'
import left from 'assets/left.svg'
import right from 'assets/right.svg'

export const UnauthenticatedApp = () => {
    const [isRegister, setRegister] = useState(false)
    const [error, setError] = useState<Error | null>(null)
    return (
        <Background>
            <Container>
                <Header />
                <CardCt>
                    <Titile>{isRegister ? '请注册' : '请登录'}</Titile>
                    { error?<Typography.Text type="danger">{error.message}</Typography.Text> : null }
                    {
                        isRegister ? <RegisterScreen onError={setError}/> : <LoginScreen onError={setError}/>
                    }
                    <Button type="link" onClick={() => setRegister(!isRegister)}>{isRegister ? '已有账号？登录账号' : '没有账号？注册新账号'}</Button>
                </CardCt>
            </Container>
        </Background>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    align-items: center;
`

const Header = styled.header`
    background:url(${logo}) no-repeat center;
    padding: 5rem 0;
    background-size: 8rem;
    width: 100%;
`

const CardCt = styled(Card)`
    width: 400px;
`
const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: left bottom, right bottom;
    background-size:calc(((100vw - 40rem)/2) - 3.2rem), calc(((100vw - 40rem)/2) - 3.2rem), cover;
    background-image: url(${left}), url(${right});
`

const Titile = styled.h2`
    margin-bottom: 2.4rem;
    color: rgb(94,108,132)
`
