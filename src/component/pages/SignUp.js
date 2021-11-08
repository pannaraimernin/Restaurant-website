import React from 'react'
import { Form, Input, Button, Row, Col, Divider } from 'antd';
import Title from 'antd/lib/typography/Title';
import Nav from './Nav';

function SignUp() {
    
    return (
        <div>
            <Nav/>
            <Row justify="center" >
            <Col xs={23} sm={23} md={23} lg={14} xl={14} xxl={12}>
                <div
                    className="Form"
                >
                    <Row justify="center">
                        <Title level={2} className="Title">
                            Sign Up
                        </Title>
                    </Row>
                    <Divider className="Divider" />
                    <Form
                        // {...layout}
                        // onFinish={onFinish}
                        // style={{ width: "100%" }}
                    >
                        <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            hasFeedback
                            dependencies = {["password"]} // หมายถึง ถ้าเจอ name = "password"ให้เช็ค rule ด้านล่างอีกครั้งนึง
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({getFieldValue})=> ({
                                    validator(rule,value) {
                                        if(!value || getFieldValue('password')=== value) {
                                            return Promise.resolve();
                                        } 
                                        return Promise.reject("Confirm password has to the same as password")
                                    }
                                })
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="nickname"
                            label={<span>Nickname&nbsp;</span>}
                            rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                        >
                            <Input />
                        </Form.Item>

                            <Button className="Button" type="primary" htmlType="submit">
                                Sign Up
                            </Button>
                    </Form>
                </div>
            </Col>
        </Row>
        </div>
    );
}
export default SignUp;
