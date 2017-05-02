import { get } from 'assets/js/http';
import { ACCOUNT_INFO } from 'constants/api';
import reducer from 'reducers/merchantInfo';
import * as actionTypes from 'constants/actionTypes';
import sidebarPaths from 'constants/sidebar';
import { matchSidebarItem } from 'assets/js/util';

function setSidebarPath(sidebar) {
    return sidebar.reduce((pre, item) => {
        const { id, children } = item;

        const sidebarPath = sidebarPaths[id];

        if (!sidebarPath) {
            return pre;
        }

        const [path, icon] = sidebarPath;

        const res = Object.assign({}, item, {
            path,
            icon,
            id: String(id)
        });

        if (children) {
            res.children = setSidebarPath(children);
        }

        pre.push(res);
        return pre;
    }, []);
}

function getDefaultSelectedKeys(menu, pathname) {
    const menuItem = menu.find(item => !item.path && item.children.find(t => matchSidebarItem(t.path, pathname)));

    return menuItem ? [menuItem.id] : [];
}

export default async function initializeState() {
    const { uid, username, roleMenu, merchantInfo, roleFunc } = await get(ACCOUNT_INFO);

    const user = {
        uid,
        username,
        permissionList: roleFunc
    };

    const menu = setSidebarPath(roleMenu);
    const indexPath = menu[0].path || menu[0].children[0].path;
    const pathname = location.pathname === '/' ? indexPath : location.pathname;
    const openKeys = getDefaultSelectedKeys(menu, pathname);

    const sidebar = {
        indexPath,
        menu,
        openKeys
    };

    const merchantInfoStates = reducer(merchantInfo, {
        type: actionTypes.MEMBER_RULES_INFO,
        payload: merchantInfo
    });

    return { user, sidebar, merchantInfo: merchantInfoStates };
}
