import { BOOKING_COMBOS } from 'constants/actionTypes';

export default function bookingCombo(state = [], { type, payload }) {
    switch (type) {
    case BOOKING_COMBOS:
        return payload;
    default:
        return state;
    }
}
