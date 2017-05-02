import { SHOW_PASSWD_MODAL, HIDE_PASSWD_MODAL } from 'constants/actionTypes';

export default function passwd(state = false, action) {
    switch (action.type) {
    case SHOW_PASSWD_MODAL:
        return true;
    case HIDE_PASSWD_MODAL:
        return false;
    default:
        return state;
    }
}
