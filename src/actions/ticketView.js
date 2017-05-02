import * as api from 'constants/api';
import * as actionTypes from 'constants/actionTypes';
import { get } from 'assets/js/request';
import { actionCreator } from 'assets/js/util';

const finishView = actionCreator(actionTypes.TICKET_VIEW);

// 券 查看
export function fetchView(opts) {
    return async (dispatch) => {
        const params = opts;
        let payload;

        try {
            payload = await get(api.TICKET_VIEW, params);
        } catch (e) {
            return;
        }

        dispatch(finishView(payload));
    };
}
