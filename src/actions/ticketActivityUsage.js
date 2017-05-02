import * as actionTypes from 'constants/actionTypes';
import * as api from 'constants/api';
import { get, post } from 'assets/js/request';
import { message } from 'antd';

function setList(payload) {
    return {
        payload,
        type: actionTypes.TICKET_ACTIVITY_USAGE
    };
}

export function fetchList() {
    return async (dispatch, getState) => {
        const { routing, ticketActivityUsage } = getState();
        const { pageSize } = ticketActivityUsage;
        const { pageIndex, type, name, useStartTime, useEndTime } = routing.locationBeforeTransitions.query;

        const params = {
            pageIndex,
            pageSize,
            type,
            name,
            useStartTime,
            useEndTime
        };

        let res;

        try {
            res = await get(api.TICKET_ACTIVITY_USAGE, params);
        } catch (e) {
            return;
        }

        const { total, list } = res;

        dispatch(setList({ total, list }));
    };
}

export function print(id) {
    return async () => {
        try {
            await post(api.TICKET_ACTIVITY_PRINT, { id });
        } catch (e) {
            return;
        }

        message.success('操作成功');
    };
}
