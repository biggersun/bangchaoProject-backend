import * as actionTypes from 'constants/actionTypes';
import * as api from 'constants/api';
import { get, post } from 'assets/js/request';
import { message } from 'antd';
import { push } from 'react-router-redux';

function setList(payload) {
    return {
        payload,
        type: actionTypes.EMPLOYEE_MSG_LIST
    };
}

export function fetchList() {
    return async (dispatch) => {
        let res;

        try {
            res = await get(api.EMPLOYEE_MSG_SHOW);
        } catch (e) {
            return;
        }

        dispatch(setList(res));
    };
}

export function edit(params) {
    return async (dispatch) => {
        try {
            await post(api.EMPLOYEE_MSG_SET, params);
        } catch (e) {
            return e;
        }

        message.success('保存成功');

        dispatch(push('/employee'));
    };
}
