import * as actionTypes from 'constants/actionTypes';
import * as api from 'constants/api';
import { get } from 'assets/js/request';

function finishRequest(payload) {
    return {
        payload,
        type: actionTypes.WAITER_SET_LIST_SUCCESS
    };
}

export function fetchList() {
    return async (dispatch) => {
        let payload;

        try {
            payload = await get(api.WAITER_SET_LIST);
        } catch (e) {
            return;
        }

        dispatch(finishRequest(payload));
    };
}

export function fetchModifyList(opts = {}) {
    return async (dispatch) => {
        const params = opts;

        try {
            await get(api.WAITER_SET_MODIFY_LIST, params);
        } catch (e) {
            return;
        }

        dispatch(fetchList());
    };
}
