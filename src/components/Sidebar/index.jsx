import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';
import { matchSidebarItem } from 'assets/js/util';

import './index.scss';

const SubMenu = Menu.SubMenu;
const Item = Menu.Item;

function generateSubMenu(menu) {
    return menu.map(({ id, name, icon, children }) => {
        const text = <span>{icon ? <Icon type={icon} /> : ''}{name}</span>;

        if (children && children.length > 0) {
            return <SubMenu key={id} title={text}>{generateSubMenu(children)}</SubMenu>;
        }

        return <Item key={id}>{text}</Item>;
    });
}

function getSelectedKeys(menu, pathname) {
    const selectedKeys = [];

    menu.some(({ path, children, id }) => {
        if (path) {
            if (!matchSidebarItem(path, pathname)) {
                return false;
            }

            selectedKeys.push(id);
            return true;
        }

        return children.some((item) => {
            if (!matchSidebarItem(item.path, pathname)) {
                return false;
            }

            selectedKeys.push(id, item.id);
            return true;
        });
    });

    return selectedKeys;
}

class Sidebar extends PureComponent {
    render() {
        const { sidebar, pathname, toggleMenu, changePath } = this.props;
        const { menu, openKeys } = sidebar;
        const selectedKeys = getSelectedKeys(menu, pathname);

        return (
            <section className="sidebar-component">
                <div className="site-logo" />
                <Menu
                    mode="inline"
                    theme="dark"
                    selectedKeys={selectedKeys}
                    openKeys={openKeys}
                    onOpenChange={toggleMenu}
                    onClick={changePath}
                >
                    {generateSubMenu(menu)}
                </Menu>
            </section>
        );
    }
}

Sidebar.propTypes = {
    pathname: PropTypes.string.isRequired,
    sidebar: PropTypes.object.isRequired,
    toggleMenu: PropTypes.func.isRequired,
    changePath: PropTypes.func.isRequired
};

export default Sidebar;
