import * as actionTypes from 'constants/actionTypes';
import * as api from 'constants/api';
import { post } from 'assets/js/request';

function setList(payload) {
    return {
        payload,
        type: actionTypes.FEEDBACK_LIST
    };
}

export function fetchList() {
    return async (dispatch, getState) => {
        const { feedbackList, routing } = getState();
        const { pageIndex } = routing.locationBeforeTransitions.query;
        const { pageSize } = feedbackList;

        let res;

        try {
            res = await post(api.FEEDBACK_LIST, { pageIndex, pageSize });
        } catch (e) {
            return;
        }

        const { data, total } = res;

        dispatch(setList({ total, list: data }));
    };
}

