import { TOGGLE_MENU, CLOSE_MENU } from 'constants/actionTypes';

const initState = {
    menu: [],
    openKeys: []
};

export default function sidebar(state = initState, { type, payload }) {
    switch (type) {
    case TOGGLE_MENU: {
        const lastOpenKey = payload.find(key => !(state.openKeys.indexOf(key) > -1));
        const nextOpenKeys = lastOpenKey ? [lastOpenKey] : [];

        return {
            ...state,
            openKeys: nextOpenKeys
        };
    }
    case CLOSE_MENU:
        return {
            ...state,
            openKeys: []
        };
    default:
        return state;
    }
}

