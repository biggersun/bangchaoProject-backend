import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Icon, Button } from 'antd';
import { login } from 'actions/user';
import { ROOT_PATH } from 'constants/router';

import './index.scss';

const FormItem = Form.Item;

class Login extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            errorMsg: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async userLogin(params) {
        this.setState({
            isLoading: true,
            errorMsg: ''
        });

        try {
            await login(params);
        } catch (e) {
            this.setState({
                isLoading: false,
                errorMsg: e.errno === 4 ? e.data.msg : e.msg
            });
            return;
        }

        location.href = ROOT_PATH;
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.form.validateFields((errors, values) => {
            if (errors) {
                return;
            }

            this.userLogin(values);
        });
    }

    render() {
        const { form } = this.props;
        const { isLoading, errorMsg } = this.state;
        const { getFieldDecorator } = form;

        const usernameDecorator = getFieldDecorator('username', {
            rules: [
                { required: true, message: '账号不能为空' }
            ]
        });

        const passwordDecorator = getFieldDecorator('password', {
            rules: [
                { required: true, message: '密码不能为空' }
            ]
        });

        return (
            <section className="login-container">
                <header className="login-header" />
                <Form className="login-form" onSubmit={this.handleSubmit}>
                    <FormItem>
                        {usernameDecorator(
                            <Input
                                className="login-form-input"
                                size="large"
                                placeholder="账户"
                                prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                            />
                        )}
                    </FormItem>
                    <FormItem>
                        {passwordDecorator(
                            <Input
                                className="login-form-input"
                                size="large"
                                placeholder="密码"
                                type="password"
                                prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                            />
                        )}
                    </FormItem>
                    <p className="error-msg">{errorMsg}</p>
                    <FormItem>
                        <Button
                            icon={isLoading ? 'loading' : undefined}
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            确定
                        </Button>
                    </FormItem>
                </Form>
                <p className="email-address">客服邮箱：kefu@ktvms.com</p>
            </section>
        );
    }
}

Login.propTypes = {
    form: PropTypes.object.isRequired
};

export default Form.create()(Login);
