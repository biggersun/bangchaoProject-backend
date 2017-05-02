import { TOGGLE_MENU, CLOSE_MENU } from 'constants/actionTypes';
import { push } from 'react-router-redux';
import sidebar from 'constants/sidebar';
import { actionCreator } from 'assets/js/util';

const closeMenu = actionCreator(CLOSE_MENU);

export const toggleMenu = actionCreator(TOGGLE_MENU);

export function changePath(id, ids) {
    return (dispatch, getState) => {
        const { sidebar: { openKeys } } = getState();

        if (ids.length === 1 || ids[1] !== openKeys[0]) {
            dispatch(closeMenu());
        }

        dispatch(push(sidebar[id][0]));
    };
}
