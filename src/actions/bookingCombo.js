import { BOOKING_COMBOS } from 'constants/actionTypes';
import { BOOKING_COMBOS_LIST, BOOKING_COMBOS_DELETE } from 'constants/api';
import { get, post } from 'assets/js/request';
import { message } from 'antd';

function setComboList(payload) {
    return {
        type: BOOKING_COMBOS,
        payload
    };
}

export function fetchComboList() {
    return async (dispatch) => {
        let comboList;

        try {
            comboList = await get(BOOKING_COMBOS_LIST);
        } catch (e) {
            return;
        }

        dispatch(setComboList(comboList));
    };
}

export function deleteCombo(comboId) {
    return async (dispatch) => {
        try {
            await post(BOOKING_COMBOS_DELETE, { comboId });
        } catch (e) {
            return;
        }

        message.success('删除成功！');
        dispatch(fetchComboList());
    };
}
