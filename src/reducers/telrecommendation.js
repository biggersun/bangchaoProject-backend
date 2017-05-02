import {
    MESSAGELIST_FETCH_SUCCESS,
    BRAND_MERCHANTLIST_FETCH_SUCCESS
} from 'constants/actionTypes';

const initState = {
    list: [],
    messageInfo: [],
    total: 0,
    pageSize: 20,
    merchants: []
};

export default function telrecommendation(state = initState, action) {
    switch (action.type) {
    case MESSAGELIST_FETCH_SUCCESS: {
        const { list, messageInfo, total } = action.res;
        return {
            ...state,
            list,
            messageInfo,
            total
        };
    }
    case BRAND_MERCHANTLIST_FETCH_SUCCESS: {
        const { merchants } = action.res;
        return {
            ...state,
            merchants
        };
    }
    default:
        return state;
    }
}
