import { TUAN_DATE_LIST } from 'constants/actionTypes';

const initState = {
    normalDateList: []
};

export default function tuanDate(state = initState, { type, payload }) {
    switch (type) {
    case TUAN_DATE_LIST:
        return payload;
    default:
        return state;
    }
}
