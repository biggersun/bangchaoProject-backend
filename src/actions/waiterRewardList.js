import * as actionTypes from 'constants/actionTypes';
import * as api from 'constants/api';
import { get } from 'assets/js/request';

const pageSize = 10;

function finishRequest(payload) {
    return {
        payload,
        type: actionTypes.WAITER_REWARD_LIST_SUCCESS
    };
}

function finishemployeeList(payload) {
    return {
        payload,
        type: actionTypes.WAITER_REWARD_EMPLOYEE_LIST_SUCCESS
    };
}


export function fetchList(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({
            pageSize
        }, opts);

        let payload;

        try {
            payload = await get(api.WAITER_REWARD_LIST, params);
        } catch (e) {
            return;
        }

        dispatch(finishRequest(payload));
    };
}

export function fetchEmployeeList(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({}, opts);

        let payload;

        try {
            payload = await get(api.EMPLOYEE_LIST_FETCH, params);
        } catch (e) {
            return;
        }

        dispatch(finishemployeeList(payload));
    };
}
