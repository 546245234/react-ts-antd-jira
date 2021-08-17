import React from "react"
import { User } from './search-panel'
import { Table, TableProps } from "antd";
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

export interface Project {
    id: number;
    name: string;
    personId: number;
    pin: boolean;
    organization: string;
    created: number
}
interface ListProps extends TableProps<Project> {
    users: User[]
}
export const List = ({ users, ...props }: ListProps) => {
    const columns = [
        {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
            sorter: (a: { name: string; }, b: { name: string }) => a.name.localeCompare(b.name),
            render(_value: any, project: Project) {
                return <Link to={String(project.id)}>{project.name}</Link>
            }
        },
        {
            title: '部门',
            dataIndex: 'organization',
            key: 'organization',
        },
        {
            title: '负责人',
            dataIndex: 'personId',
            key: 'personId',
            render: (_value: any, project: Project) => {
                return <span>
                    {users.find((user: User) => user.id === project.personId)?.name || '未知'}
                </span>
            }
        },
        {
            title: '创建时间',
            render(value: any, project: Project) {
                return (
                    <span>
                        {project.created ? dayjs(project.created).format('YYYY-MM-DD') : '无'}
                    </span>
                )
            }
        }
    ]
    return (
        <Table pagination={false} {...props} columns={columns} rowKey="id" />
    )
}
