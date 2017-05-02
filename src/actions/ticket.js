import * as actionTypes from 'constants/actionTypes';
import * as api from 'constants/api';
import { get, post } from 'assets/js/request';
import { message } from 'antd';

function setList(payload) {
    return {
        payload,
        type: actionTypes.TICKET_LIST
    };
}

function setSugList(payload) {
    return {
        payload,
        type: actionTypes.TICKET_SUG_LIST
    };
}

export function fetchList() {
    return async (dispatch, getState) => {
        const { routing, ticket } = getState();
        const { pageSize } = ticket;
        const { pageIndex, name } = routing.locationBeforeTransitions.query;

        const params = {
            pageIndex,
            pageSize,
            name
        };

        let res;

        try {
            res = await get(api.TICKET_LIST, params);
        } catch (e) {
            return;
        }

        const { total, data } = res;

        dispatch(setList({ total, list: data }));
    };
}

export function fetchSugList(useCache = false) {
    return async (dispatch, getState) => {
        const { ticket: { sugList } } = getState();

        if (useCache && sugList.length > 0) {
            return;
        }

        let res;

        try {
            res = await get(api.TICKET_LIST, { pageIndex: -1 });
        } catch (e) {
            return;
        }

        dispatch(setSugList(res.data));
    };
}

export function deleteTicket(id) {
    return async (dispatch) => {
        try {
            await post(api.TICKET_DELETE, { id });
        } catch (e) {
            return;
        }

        dispatch(fetchList());
        message.success('操作成功');
    };
}

