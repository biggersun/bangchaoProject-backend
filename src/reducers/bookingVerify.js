import { BOOKING_VERIFY_LIST_SUCCESS } from 'constants/actionTypes';

const initState = {
    orders: [],
    total: 0
};

export default function bookingVerify(state = initState, action) {
    switch (action.type) {
    case BOOKING_VERIFY_LIST_SUCCESS:
        return action.payload;
    default:
        return state;
    }
}
