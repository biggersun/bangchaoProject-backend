import { BOOKING_PERIOD_LIST } from 'constants/actionTypes';

export default function bookingPeriod(state = [], { type, payload }) {
    switch (type) {
    case BOOKING_PERIOD_LIST:
        return payload;
    default:
        return state;
    }
}

