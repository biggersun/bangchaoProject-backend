import {
    EMPLOYEE_LIST_FETCH_SUCCESS,
    EMPLOYEE_ROLES_FETCH_SUCCESS
} from 'constants/actionTypes';

const initState = {
    list: [],
    rolesList: []
};

export default function employeeList(state = initState, action) {
    switch (action.type) {
    case EMPLOYEE_LIST_FETCH_SUCCESS: {
        return {
            ...state,
            list: action.res
        };
    }
    case EMPLOYEE_ROLES_FETCH_SUCCESS: {
        return {
            ...state,
            rolesList: action.res
        };
    }
    default:
        return state;
    }
}
