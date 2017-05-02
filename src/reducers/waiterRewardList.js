import * as actionTypes from 'constants/actionTypes';

const initState = {
    total: 0,
    loading: false,
    list: [],
    employeeList: [],
    rewardMoneyCount: ''
};

export default function waiterRewardList(state = initState, { type, payload }) {
    switch (type) {
    case actionTypes.WAITER_REWARD_LIST_SUCCESS: {
        const { list, total, rewardMoneyCount } = payload;

        return {
            ...state,
            list,
            total,
            rewardMoneyCount
        };
    }
    case actionTypes.WAITER_REWARD_EMPLOYEE_LIST_SUCCESS: {
        return {
            ...state,
            employeeList: payload
        };
    }
    default:
        return state;
    }
}
