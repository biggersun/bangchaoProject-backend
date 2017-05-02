import * as api from 'constants/api';
import * as actionTypes from 'constants/actionTypes';
import { get, post } from 'assets/js/request';
import { message } from 'antd';

function setActiveList(payload) {
    return {
        payload,
        type: actionTypes.TICKET_ACTIVITY_ACTIVE_LIST
    };
}

function setList(payload) {
    return {
        payload,
        type: actionTypes.TICKET_ACTIVITY_LIST
    };
}

export function fetchActiveList({ useCache = false } = {}) {
    return async (dispatch, getState) => {
        const { ticketActivity } = getState();
        const { activeList } = ticketActivity;

        if (activeList.length > 0 && useCache) {
            return;
        }

        let list;

        try {
            list = await get(api.TICKET_ACTIVITY_ACTIVE_LIST);
        } catch (e) {
            return;
        }

        dispatch(setActiveList(list));
    };
}

export function fetchList() {
    return async (dispatch, getState) => {
        const { routing, ticketActivity } = getState();
        const { pageSize } = ticketActivity;
        const { pageIndex, name, status } = routing.locationBeforeTransitions.query;

        const params = {
            pageIndex,
            pageSize,
            name,
            status
        };

        let res;

        try {
            res = await get(api.TICKET_ACTIVITY_LIST, params);
        } catch (e) {
            return;
        }

        const { total, list } = res;

        dispatch(setList({ total, list }));
    };
}

export function offline(id) {
    return async (dispatch) => {
        try {
            await post(api.TICKET_ACTIVITY_OFFLINE, { id });
        } catch (e) {
            return;
        }

        message.success('操作成功');
        dispatch(fetchList());
    };
}
