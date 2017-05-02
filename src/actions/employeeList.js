import {
    EMPLOYEE_LIST_FETCH_SUCCESS,
    EMPLOYEE_ROLES_FETCH_SUCCESS
} from 'constants/actionTypes';

import {
    EMPLOYEE_LIST_FETCH,
    EMPLOYEE_INFO_OPERATE,
    EMPLOYEE_ROLES_FETCH,
    EMPLOYEE_INFO_ADD,
    EMPLOYEE_INFO_EDIT,
    EMPLOYEE_CARD_BIND,
    EMPLOYEE_CARD_UNBIND,
    EMPLOYEE_CARD_DOWNLOAD,
    EMPLOYEE_SET_MANAGER,
    EMPLOYEE_UNSET_MANAGER
} from 'constants/api';
import { get, post } from 'assets/js/request';
import { message } from 'antd';

function finishRequest(res) {
    return {
        res,
        type: EMPLOYEE_LIST_FETCH_SUCCESS
    };
}

export function fetchList(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({
        }, opts);

        let res;

        try {
            res = await get(EMPLOYEE_LIST_FETCH, params);
        } catch (e) {
            return;
        }

        dispatch(finishRequest(res));
    };
}

export function operate(uid, cmd) {
    return async (dispatch) => {
        try {
            await post(EMPLOYEE_INFO_OPERATE, { uid, cmd });
        } catch (e) {
            message.error('操作失败');
            return;
        }

        message.success('操作成功');
        dispatch(fetchList());
    };
}

export function fetchRolesList() {
    return async (dispatch) => {
        let res;

        try {
            res = await get(EMPLOYEE_ROLES_FETCH);
        } catch (e) {
            return;
        }

        dispatch({
            res,
            type: EMPLOYEE_ROLES_FETCH_SUCCESS
        });
    };
}

export function saveInfo(info, isNew) {
    return async (dispatch) => {
        const url = isNew ? EMPLOYEE_INFO_ADD : EMPLOYEE_INFO_EDIT;

        if (!isNew) {
            info.cmd = 1; // eslint-disable-line no-param-reassign
        }

        try {
            await post(url, info);
        } catch (e) {
            return;
        }

        dispatch(fetchList());
    };
}

export function bindInfo(userId, codeNum, type, redirectType) {
    return async (dispatch) => {
        try {
            await post(EMPLOYEE_CARD_BIND, { userId, codeNum, type, redirectType });
        } catch (e) {
            return e;
        }

        message.success('操作成功');
        dispatch(fetchList());
        return 0;
    };
}

export function unbind(userId) {
    return async (dispatch) => {
        try {
            await post(EMPLOYEE_CARD_UNBIND, { userId });
        } catch (e) {
            return;
        }

        dispatch(fetchList());
    };
}

export function downloadInfo(downloadCount) {
    return async (dispatch) => {
        try {
            await get(EMPLOYEE_CARD_DOWNLOAD, { downloadCount });
        } catch (e) {
            return;
        }

        dispatch(fetchList());
    };
}

export function setManager(userId) {
    return async (dispatch) => {
        try {
            await post(EMPLOYEE_SET_MANAGER, { userId });
        } catch (e) {
            return;
        }

        message.success('操作成功');
        dispatch(fetchList());
    };
}

export function unsetManager(userId) {
    return async (dispatch) => {
        try {
            await post(EMPLOYEE_UNSET_MANAGER, { userId });
        } catch (e) {
            return;
        }

        message.success('操作成功');
        dispatch(fetchList());
    };
}
