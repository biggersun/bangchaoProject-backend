import { SHOW_PASSWD_MODAL, HIDE_PASSWD_MODAL } from 'constants/actionTypes';
import { MODIFY_PASSWD } from 'constants/api';
import { post } from 'assets/js/request';
import { LOGIN_URL } from 'constants/basic';

export function showModal() {
    return {
        type: SHOW_PASSWD_MODAL
    };
}

export function hideModal() {
    return {
        type: HIDE_PASSWD_MODAL
    };
}

export function submit(info) {
    return async (dispatch) => {
        try {
            await post(MODIFY_PASSWD, info);
        } catch (e) {
            return;
        }

        dispatch(hideModal);
        location.href = LOGIN_URL;
    };
}
