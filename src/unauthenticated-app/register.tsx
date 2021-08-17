import React from "react"
import { useAuth } from "context/auth-context";
import { Form, Input, Button } from "antd";

const RegisterScreen = ({onError}:{onError:(error:Error) => void}) => {
    const { register } = useAuth()
    const handleSubmit = async (values: { username: string, password: string, cpassword:string }) => {
        if(values.cpassword !== values.password){
            onError(new Error('请确认两次输入的密码相同'))
            return
        }

        try {
            await register(values)
        } catch (e) {
            onError(e)
        }
    }
    return (
        <Form onFinish={handleSubmit}>
            <Form.Item
                label=""
                name="username"
                rules={[{ required: true, message: '请输入用户名' }]}
            >
                <Input placeholder="用户名" type="text" id={'username'} />
            </Form.Item>
            <Form.Item
                label=""
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
            >
                <Input placeholder="输入密码" type="password" id={'password'} />
            </Form.Item>
            <Form.Item
                label=""
                name="cpassword"
                rules={[{ required: true, message: '请确认密码' }]}
            >
                <Input placeholder="确认密码" type="cpassword" id={'cpassword'} />
            </Form.Item>
            <Form.Item>
                <Button block type="primary" htmlType="submit">注册</Button>
            </Form.Item>
        </Form>
    )
}

export default RegisterScreen;
