import { BOOKING_DATE_LIST } from 'constants/actionTypes';

const initState = {
    normalDateList: [],
    specialDateList: []
};

export default function bookingDate(state = initState, { type, payload }) {
    switch (type) {
    case BOOKING_DATE_LIST:
        return payload;
    default:
        return state;
    }
}
