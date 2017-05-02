import * as actionTypes from 'constants/actionTypes';

export default function employeeMsg(state = [], action) {
    switch (action.type) {
    case actionTypes.EMPLOYEE_MSG_LIST:
        return action.payload;
    default:
        return state;
    }
}
