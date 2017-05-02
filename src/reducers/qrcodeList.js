import {
    QRCODE_LIST_FETCH_SUCCESS
} from 'constants/actionTypes';

const initState = {
    list: [],
    rolesList: []
};

export default function qrcodeList(state = initState, action) {
    switch (action.type) {
    case QRCODE_LIST_FETCH_SUCCESS: {
        return {
            ...state,
            list: action.res
        };
    }
    default:
        return state;
    }
}
