import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Icon } from 'antd';

import './index.scss';


class Header extends PureComponent {
    render() {
        const { user, logout, changePassword, merchantInfo } = this.props;

        const menu = (
            <Menu>
                <Menu.Item>
                    <a onClick={changePassword}><Icon type="setting" /> 修改密码</a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item>
                    <a onClick={logout}><Icon type="logout" /> 退出登录</a>
                </Menu.Item>
            </Menu>
        );

        return (
            <section className="header-component">
                <p className="header-username">{merchantInfo.name}</p>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link">
                        <Icon type="user" /> {user.username}
                    </a>
                </Dropdown>
            </section>
        );
    }
}

Header.propTypes = {
    user: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired,
    merchantInfo: PropTypes.object.isRequired
};

export default Header;
