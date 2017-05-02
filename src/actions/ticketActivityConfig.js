import * as actionTypes from 'constants/actionTypes';
import * as api from 'constants/api';
import { get, post } from 'assets/js/request';
import { message } from 'antd';

function setInfo(payload) {
    return {
        payload,
        type: actionTypes.TICKET_ACTIVITY_CONFIG
    };
}

export function fetchInfo() {
    return async (dispatch) => {
        let res;

        try {
            res = await get(api.TICKET_ACTIVITY_CONFIG);
        } catch (e) {
            return;
        }

        dispatch(setInfo(res));
    };
}

export function editInfo(params) {
    return async () => {
        try {
            await post(api.TICKET_ACTIVITY_CONFIG_EDIT, params);
        } catch (e) {
            return;
        }

        message.success('操作成功!');
    };
}
