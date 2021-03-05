import React from 'react'
import { Link } from 'react-router-dom';
import {Form, Input, Button, Row, Col, Divider} from 'antd';
import Title from 'antd/lib/typography/Title';
import {ShoppingCartOutlined } from '@ant-design/icons';
import Nav from './Nav';


function SignIn() {
    
    return (
        <div > 
           <Nav/>
        
            <div className = 'Signin'></div>
            <Row justify="center">
            <Col xs={23} sm={23} md={23} lg={14} xl={14} xxl={12}>
                <div className="Form">
                    <Row justify="center">
                        <Title level={2} className="Title">
                            Login
                    </Title>
                    </Row>
                    <Divider className="Divider" />
                    <Form
                        // className="App"
                        // {...layout}
                        // onFinish={onFinish}
                        // style={{ width: "100%" }}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Button className="Button" type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Col>
        </Row>

        </div>
    )
}

export default SignIn;
