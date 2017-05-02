import * as actionTypes from 'constants/actionTypes';
import * as api from 'constants/api';
import { get, post } from 'assets/js/request';
import { actionCreator } from 'assets/js/util';

const setCombo = actionCreator(actionTypes.GROUPON_COMBO);

const setCombos = actionCreator(actionTypes.GROUPON_COMBO_LIST);

export function fetchCombos() {
    return async (dispatch) => {
        let res;

        try {
            res = await get(api.GROUPON_COMBO_LIST);
        } catch (e) {
            return;
        }

        dispatch(setCombos(res));
    };
}

export function fetchCombo(comboId) {
    return async (dispatch) => {
        let combo = {};

        if (comboId) {
            try {
                combo = await get(api.GROUPON_COMBO, { comboId });
            } catch (e) {
                // no catch
            }
        }

        dispatch(setCombo(combo));
    };
}

export function upsertCombo(params) {
    return async () => {
        const url = params.data.comboId ? api.GROUPON_COMBO_EDIT : api.GROUPON_COMBO_ADD;

        await post(url, params);
    };
}

export function deleteCombo(comboId) {
    return () => post(api.GROUPON_COMBO_DELETE, { comboId });
}
