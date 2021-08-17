import React from "react"
import { Form, Input, Select } from "antd";
const { Option } = Select;
export interface User {
    id: number;
    name: string;
    token: string;
}
interface SearchPanelProps {
    users: User[];
    param: {
        name: string
        personId: string
    };
    setParam: (param: SearchPanelProps['param']) => void;
}
export const SearchPanel = ({ param, users, setParam }: SearchPanelProps) => {
    return (
        <Form style={{ marginBottom: '2rem' }} layout='inline'>
            <Form.Item>
                <Input placeholder="项目名" type="text" value={param.name} onChange={e => setParam({ ...param, name: e.target.value })}></Input>

            </Form.Item>
            <Form.Item>
                <Select value={param.personId} onChange={value => setParam({ ...param, personId: value })}>
                    <Option value={'负责人'}>负责人</Option>
                    {
                        users.map(user => <Option key={user.id} value={String(user.id)}>{user.name}</Option>)
                    }
                </Select>
            </Form.Item>
        </Form>
    )
}
