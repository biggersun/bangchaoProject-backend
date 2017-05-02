import * as actionTypes from 'constants/actionTypes';
import * as api from 'constants/api';
import { get } from 'assets/js/request';

function setList(payload) {
    return {
        payload,
        type: actionTypes.MEMBER_OFFLINE_LIST
    };
}

export function fetchList() {
    return async (dispatch, getState) => {
        const { routing, memberOfflineList } = getState();
        const { pageIndex, mobile, vcardNo, startTime, endTime } = routing.locationBeforeTransitions.query;
        const { pageSize } = memberOfflineList;

        const params = {
            pageIndex,
            pageSize,
            mobile,
            vcardNo,
            startTime,
            endTime
        };

        let res;

        try {
            res = await get(api.MEMBER_OFFLINE_LIST, params);
        } catch (e) {
            return;
        }

        dispatch(setList(res));
    };
}

