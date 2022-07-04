import React, { Component } from "react"
import { StaffMess } from '../style'
import { Table } from 'antd';
class Message extends Component {
    render() {
        return (
            <StaffMess>
                <p className="tall">Job Offers</p>
                <h4>招聘信息</h4>

                <Table className="table" locale={{
                    cancelSort: '点击取消排序',
                    triggerAsc: '点击升序',
                    triggerDesc: '点击降序'
                }} columns={columns} dataSource={data} />
            </StaffMess>
        )
    }
}
const columns = [
    {
        title: '职位名称',
        dataIndex: 'name',
    },
    {
        title: '招聘人数',
        dataIndex: 'chinese',
        sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
        },
    },
    {
        title: '工作地点',
        dataIndex: 'math',
    },
    {
        title: '发布时间',
        dataIndex: 'english',
    },
];
const data = [
    {
        key: '1',
        name: '项目总监',
        chinese: 3,
        math: '外派',
        english: '2018.09.05',
    },
    {
        key: '2',
        name: '销售总监',
        chinese: 3,
        math: ' 河南、江西',
        english: '2018.09.05',
    },
    {
        key: '3',
        name: '策划总监/经理',
        chinese: 2,
        math: '外派',
        english: '2018.09.05',
    },
    {
        key: '4',
        name: '电销部总监/经理',
        chinese: 1,
        math: '外派',
        english: '2018.09.05',
    },
    {
        key: '5',
        name: '外联总监',
        chinese: 1,
        math: '外派',
        english: '2018.09.05',
    },
    {
        key: '6',
        name: '培训讲师',
        chinese: 1,
        math: '外派',
        english: '2018.09.05',
    },
    {
        key: '7',
        name: '办公室主任',
        chinese: 2,
        math: '武汉',
        english: '2018.09.05',
    },
    {
        key: '8',
        name: '外展点门店销售经理',
        chinese: 3,
        math: '外派',
        english: '2018.09.05',
    }
];
export default Message