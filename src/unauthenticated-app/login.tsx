import React from "react"
import { useAuth } from "context/auth-context";
import { Form, Input, Button } from "antd";
import { useAsync } from "utils/use-async";

const LoginScreen = ({ onError }: { onError: (error: Error) => void }) => {
    const { login } = useAuth()
    const { run, isLoading } = useAsync(undefined, { throwOnError: true })
    const handleSubmit = async (values: { username: string, password: string }) => {
        try {
            await run(login(values))
        } catch (e) {
            onError(e)
        }
    }
    return (
        <Form onFinish={handleSubmit} labelCol={{ span: 8 }}>
            <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入用户名' }]}
            >
                <Input placeholder="用户名" type="text" id={'username'} />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
            >
                <Input placeholder="密码" type="password" id={'password'} />
            </Form.Item>
            <Form.Item>
                <Button loading={isLoading} block type="primary" htmlType="submit">登录</Button>
            </Form.Item>
        </Form>
    )
}

export default LoginScreen;
