import * as api from 'constants/api';
import * as actionTypes from 'constants/actionTypes';
import { get } from 'assets/js/request';
import { actionCreator } from 'assets/js/util';
import { message } from 'antd';

const finishList = actionCreator(actionTypes.TICKET_VERIFY_LIST_SUCCESS);

const pageSize = 10;

// 券列表
export function fetchList(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({
            pageSize
        }, opts);
        let payload;

        try {
            payload = await get(api.TICKET_VERIFY_LIST, params);
        } catch (e) {
            return;
        }

        dispatch(finishList(payload));
    };
}

// 券验证
export function fetchVerify(opts = {}) {
    return async () => {
        const params = opts;

        try {
            await get(api.TICKET_VERIFY_VERIFY, params);
        } catch (e) {
            return;
        }

        message.success('验证成功');
    };
}

// 券打印
export function fetchPrint(opts = {}) {
    return async () => {
        const params = opts;

        try {
            await get(api.TICKET_VERIFY_PRINT, params);
        } catch (e) {
            return;
        }

        message.success('打印成功');
    };
}
