import { BOOKING_ARRIVE_PERIOD_LIST } from 'constants/actionTypes';

export default function bookingArrivePeriod(state = [], { type, payload }) {
    switch (type) {
    case BOOKING_ARRIVE_PERIOD_LIST:
        return payload;
    default:
        return state;
    }
}

