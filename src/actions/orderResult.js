import {
    ORDER_TOTAL_LIST_SUCCESS
} from 'constants/actionTypes';

import { FETCH_ORDER_TOTAL, ORDER_TOTAL_PRINT } from 'constants/api';
import { get } from 'assets/js/request';
import { message } from 'antd';

function finishRequest(res) {
    return {
        res,
        type: ORDER_TOTAL_LIST_SUCCESS
    };
}

export function fetchList(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({
        }, opts);

        let res;

        try {
            res = await get(FETCH_ORDER_TOTAL, params);
        } catch (e) {
            return;
        }

        dispatch(finishRequest({
            data: res,
            startTime: opts.startTime,
            endTime: opts.endTime,
            channelType: opts.channelType
        }));
    };
}

export function print(opts = {}) {
    return async () => {
        const params = Object.assign({
        }, opts);

        try {
            await get(ORDER_TOTAL_PRINT, params);
        } catch (e) {
            return;
        }

        message.success('打印成功');
    };
}

