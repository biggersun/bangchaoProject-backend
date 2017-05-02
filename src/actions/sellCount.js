import { SELL_COUNT_LIST_SUCCESS } from 'constants/actionTypes';
import { SELL_COUNT_LIST } from 'constants/api';
import { get } from 'assets/js/request';

const pageSize = 10;

function finishRequest(payload) {
    return {
        type: SELL_COUNT_LIST_SUCCESS,
        payload
    };
}

export function fetchList(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({
            pageSize
        }, opts);

        let payload;

        try {
            payload = await get(SELL_COUNT_LIST, params);
        } catch (e) {
            return;
        }

        dispatch(finishRequest(payload));
    };
}
