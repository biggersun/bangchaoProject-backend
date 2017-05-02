import * as actionTypes from 'constants/actionTypes';
import * as api from 'constants/api';
import { get, post } from 'assets/js/request';
import { actionCreator } from 'assets/js/util';

const setGroupon = actionCreator(actionTypes.GROUPON);

export function fetchGroupon(dealId) {
    return async (dispatch) => {
        let groupon = {};

        if (dealId) {
            try {
                groupon = await get(api.GROUPON, { dealId });
            } catch (e) {
                // no catch
            }
        }

        dispatch(setGroupon(groupon));
    };
}

export function insertGroupon(params) {
    return () => post(api.GROUPON_ADD, params);
}
