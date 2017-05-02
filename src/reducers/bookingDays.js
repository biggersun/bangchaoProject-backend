import { BOOKING_DAYS } from 'constants/actionTypes';

export default function bookingDays(state = 0, { type, payload }) {
    switch (type) {
    case BOOKING_DAYS:
        return payload;
    default:
        return state;
    }
}
