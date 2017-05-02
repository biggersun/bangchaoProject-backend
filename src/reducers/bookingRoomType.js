import { BOOKING_ROOM_TYPE } from 'constants/actionTypes';

export default function bookingRoomType(state = [], { type, payload }) {
    switch (type) {
    case BOOKING_ROOM_TYPE:
        return payload;
    default:
        return state;
    }
}

