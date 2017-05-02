import { TUAN_PERIOD_LIST } from 'constants/actionTypes';

export default function tuanPeriod(state = [], { type, payload }) {
    switch (type) {
    case TUAN_PERIOD_LIST:
        return payload;
    default:
        return state;
    }
}

