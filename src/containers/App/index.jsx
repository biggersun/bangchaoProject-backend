import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import 'blueimp-canvas-to-blob';

import Sidebar from 'components/Sidebar';
import Header from 'components/Header';
import Password from 'components/Password';
import { logout as logoutAction } from 'actions/user';
import { showModal, hideModal, submit } from 'actions/password';
import {
    toggleMenu as toggleMenuAction,
    changePath as changePathAction
} from 'actions/sidebar';

import './index.scss';

class App extends PureComponent {
    render() {
        const {
            user,
            sidebar,
            pathname,
            children,
            logout,
            merchantInfo,
            toggleMenu,
            changePath,
            password,
            showPasswordModal,
            hidePasswordModal,
            onChangePassword
        } = this.props;

        return (
            <section className="app-component">
                <Sidebar
                    sidebar={sidebar}
                    pathname={pathname}
                    toggleMenu={toggleMenu}
                    changePath={changePath}
                />
                <Password
                    isShow={password}
                    onClose={hidePasswordModal}
                    onSubmit={onChangePassword}
                />
                <div className="layout-main">
                    <Header
                        user={user}
                        logout={logout}
                        changePassword={showPasswordModal}
                        merchantInfo={merchantInfo}
                    />
                    <div className="main-content">
                        {children}
                    </div>
                </div>
            </section>
        );
    }
}

App.propTypes = {
    user: PropTypes.object.isRequired,
    sidebar: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired,
    logout: PropTypes.func.isRequired,
    pathname: PropTypes.string.isRequired,
    toggleMenu: PropTypes.func.isRequired,
    changePath: PropTypes.func.isRequired,
    password: PropTypes.bool.isRequired,
    showPasswordModal: PropTypes.func.isRequired,
    hidePasswordModal: PropTypes.func.isRequired,
    onChangePassword: PropTypes.func.isRequired,
    merchantInfo: PropTypes.object.isRequired
};

const mapStateToProps = ({ user, sidebar, password, merchantInfo }, { location: { pathname } }) => ({
    user,
    sidebar,
    pathname,
    password,
    merchantInfo
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutAction()),
    toggleMenu: keys => dispatch(toggleMenuAction(keys)),
    changePath: ({ key, keyPath }) => dispatch(changePathAction(key, keyPath)),
    showPasswordModal: () => dispatch(showModal()),
    hidePasswordModal: () => dispatch(hideModal()),
    onChangePassword: info => dispatch(submit(info))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
