/**
 * Created by aidenZou on 2016/11/30.
 */
import {
    CHANNEL_TYPE_FETCH_SUCCESS
} from 'constants/actionTypes';

import { CHANNEL_TYPE_FETCH } from 'constants/api';
import { get } from 'assets/js/request';

function finishRequest(res) {
    return {
        res,
        type: CHANNEL_TYPE_FETCH_SUCCESS
    };
}

export function fetchChannelType() {
    return async (dispatch) => {
        let res;
        try {
            res = await get(CHANNEL_TYPE_FETCH);
        } catch (e) {
            return;
        }

        dispatch(finishRequest(res));
    };
}
