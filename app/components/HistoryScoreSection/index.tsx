"use client";
import React, {useState} from 'react';
import HistoryScorePanel, {ItemsType, resultMap} from "@/app/components/HistoryScoreSection/HistoryScorePanel";
import PanelWrapper from "@/app/components/common/PanelWrapper";
import {Button, DatePicker, Form, Input, Modal, TimePicker} from "antd";
import {type FormProps} from "antd/lib";

type FieldType = {
    date?: string;
    time?: string;
    score?: string;
};

const HistoryScoreSection = () => {

    // 简版添加记录
    const [curSelect, setCurSelect] = useState<ItemsType>('跳高');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [form] = Form.useForm();

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
        resultMap[curSelect].push(values as any);
        localStorage.setItem(curSelect, JSON.stringify(resultMap[curSelect]));
        alert('添加成功!');
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        form.submit();
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <PanelWrapper title={'最新数据'} leftSection={<Button onClick={() => {
            showModal();
        }}>添加记录</Button>}>
            <HistoryScorePanel curSelect={curSelect} setCurSelect={setCurSelect}/>
            <Modal title="添加记录" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    form={form}
                    name="basic"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    style={{maxWidth: 600}}
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="日期"
                        name="date"
                        rules={[{required: true, message: '日期是必须的'}]}
                    >
                        <DatePicker/>
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="时间"
                        name="time"
                        rules={[{required: true, message: '时间是必须的!'}]}
                    >
                        <TimePicker/>
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="成绩"
                        name="score"
                        rules={[{required: true, message: '成绩是必须的!'}]}
                    >
                        <Input/>
                    </Form.Item>
                </Form>
            </Modal>
        </PanelWrapper>
    );
};

export default HistoryScoreSection;