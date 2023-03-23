import React from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import './login.css'
export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  onFinish = (values) => {
    console.log('Received values of form: ', values)
    window.location.href = '/home'
  }
  validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!'
    },
    string: {
      min: "'${name}' must be at least ${min} characters"
    },
  }
  render () {
    return (
      <div className="login-wrapper">
        <div className="login-title">React Login</div>
        <Form
          name="normal_login"
          className="login-form"
          style={{
            width: 500
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
          validateMessages={ this.validateMessages }
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email'
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                type: 'string',
                min: 6
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="/">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="/">register now!</a>
          </Form.Item>
        </Form>
      </div>
    )
  }
}