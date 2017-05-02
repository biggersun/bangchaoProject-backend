import {
    ACTIVITY_LIST_SUCCESS
} from 'constants/actionTypes';

import { ACTIVITY_LIST_FETCH, ACTIVITY_STATUS_CHANGE, ACTIVITY_DELETE } from 'constants/api';
import { get, post } from 'assets/js/request';
import { message } from 'antd';

function finishRequest(res) {
    return {
        res,
        type: ACTIVITY_LIST_SUCCESS
    };
}

const pageSize = 10;

export function fetchList(opts = {}) {
    return async (dispatch, getState) => {
        const { pageIndex } = getState().routing.locationBeforeTransitions.query;
        const params = Object.assign({
            pageIndex,
            pageSize
        }, opts);

        let res;

        try {
            res = await get(ACTIVITY_LIST_FETCH, params);
        } catch (e) {
            return;
        }

        dispatch(finishRequest(res));
    };
}

export function setStatus(id, status) {
    return async (dispatch) => {
        try {
            await post(ACTIVITY_STATUS_CHANGE, { id, status });
        } catch (e) {
            return;
        }

        dispatch(fetchList());
    };
}

export function remove(id) {
    return async (dispatch) => {
        try {
            await post(ACTIVITY_DELETE, { id });
        } catch (e) {
            return;
        }

        message.success('删除成功');
        dispatch(fetchList());
    };
}

