import * as actionTypes from 'constants/actionTypes';
import * as api from 'constants/api';
import { get } from 'assets/js/request';

function setList(payload) {
    return {
        payload,
        type: actionTypes.MEMBER_ORDER_LIST
    };
}

export function fetchList(muserId) {
    return async (dispatch, getState) => {
        const { routing, memberOrderList } = getState();
        const { pageIndex, orderId, startTime, endTime } = routing.locationBeforeTransitions.query;
        const { pageSize } = memberOrderList;

        const apiParams = {
            muserId,
            pageIndex,
            pageSize,
            orderId,
            startTime,
            endTime
        };

        let res;

        try {
            res = await get(api.MEMBER_ORDER_LIST, apiParams);
        } catch (e) {
            return;
        }

        dispatch(setList(res));
    };
}
