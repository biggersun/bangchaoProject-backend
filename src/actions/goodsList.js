import {
    GOODS_LIST_REQUEST,
    GOODS_LIST_SUCCESS,
    GOODS_LIST_FAIL
} from 'constants/actionTypes';

import { GOODS_LIST, GOODS_STATUS, GOODS_DELETE } from 'constants/api';
import { get, post } from 'assets/js/request';
import { message } from 'antd';

function addRequest() {
    return {
        type: GOODS_LIST_REQUEST
    };
}

function finishRequest(res) {
    return {
        res,
        type: GOODS_LIST_SUCCESS
    };
}

function rejectRequest() {
    return {
        type: GOODS_LIST_FAIL
    };
}

const pageSize = 10;

export function fetchList(opts = {}) {
    return async (dispatch, getState) => {
        dispatch(addRequest());

        const { pageIndex, goodsName, status, categoryId }
            = getState().routing.locationBeforeTransitions.query;

        const params = Object.assign({
            pageIndex,
            pageSize,
            goodsName,
            status,
            categoryId,
            type: 1
        }, opts);

        let res;

        try {
            res = await get(GOODS_LIST, params);
        } catch (e) {
            dispatch(rejectRequest());
            return;
        }

        dispatch(finishRequest(res));
    };
}

export function setStatus(id) {
    return async (dispatch) => {
        try {
            await post(GOODS_STATUS, { id });
        } catch (e) {
            return;
        }

        dispatch(fetchList());
    };
}

export function remove(id) {
    return async (dispatch) => {
        try {
            await post(GOODS_DELETE, { id });
        } catch (e) {
            return;
        }

        message.success('删除成功');
        dispatch(fetchList());
    };
}

