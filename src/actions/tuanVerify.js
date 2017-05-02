import * as actionTypes from 'constants/actionTypes';

import { TUAN_VERIFY_LIST, TUAN_VERIFY, TUAN_VERIFY_CODES } from 'constants/api';
import { get, post } from 'assets/js/request';
import { message } from 'antd';
import { actionCreator } from 'assets/js/util';

function finishRequest(res) {
    return {
        res,
        type: actionTypes.TUAN_VERIFY_LIST_SUCCESS
    };
}

const setCodes = actionCreator(actionTypes.TUAN_VERIFY_CODES);

const pageSize = 10;

export function fetchList(opts = {}) {
    return async (dispatch, getState) => {
        const { pageIndex } = getState().routing.locationBeforeTransitions.query;
        const params = Object.assign({
            pageIndex,
            pageSize,
            type: 130
        }, opts);

        let res;

        try {
            res = await get(TUAN_VERIFY_LIST, params);
        } catch (e) {
            return;
        }

        dispatch(finishRequest(res));
    };
}

export function searchCodes(code) {
    return async (dispatch) => {
        let res;

        if (!code) {
            dispatch(setCodes([]));
            return;
        }

        try {
            res = await get(TUAN_VERIFY_CODES, { code }, { needLoading: false });
        } catch (e) {
            // no catch
        }

        dispatch(setCodes(res.verifyCodes));
    };
}

export function verify(info) {
    return async (dispatch, getState) => {
        const id = getState().routing.locationBeforeTransitions.query.id;

        const res = await post(TUAN_VERIFY, Object.assign({ id }, info));

        if (res.errorStatus === 70400) {
            message.error(res.message);
            throw res;
        }

        message.success('验券成功');
        dispatch(fetchList({ pageIndex: 1 }));
    };
}

