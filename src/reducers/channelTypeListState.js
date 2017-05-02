import {
    CHANNEL_TYPE_FETCH_SUCCESS,
    CHANGE_TABS
} from 'constants/actionTypes';

const initState = {
    channelTypeList: [],
    tabsValue: {}
};

export default function channelTypeListState(state = initState, action) {
    switch (action.type) {
    case CHANNEL_TYPE_FETCH_SUCCESS: {
        const { list } = action.res;
        const tabsValue = state.tabsValue.id ? state.tabsValue : list.find(item => item.isDefault === 1);

        return {
            ...state,
            channelTypeList: list,
            tabsValue
        };
    }
    case CHANGE_TABS: {
        return {
            ...state,
            tabsValue: action.value
        };
    }
    default:
        return state;

    }
}
