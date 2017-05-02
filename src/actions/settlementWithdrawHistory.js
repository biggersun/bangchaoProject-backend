import * as actionTypes from 'constants/actionTypes';
import * as api from 'constants/api';
import { get } from 'assets/js/request';

function setList(payload) {
    return {
        payload,
        type: actionTypes.FINANCE_DRAW_HISTORY
    };
}

const pageSize = 10;

export function fetchList() {
    return async (dispatch, getState) => {
        const { pageIndex, startTime, endTime } = getState().routing.locationBeforeTransitions.query;
        const params = {
            pageIndex,
            pageSize,
            startTime,
            endTime
        };

        let res;

        try {
            res = await get(api.FINANCE_DRAW_HISTORY, params);
        } catch (e) {
            return;
        }

        const { total, data: list } = res;

        dispatch(setList({ total, list }));
    };
}
