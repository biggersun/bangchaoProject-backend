import {
    COMBOS_CHANGE_INFO
} from 'constants/actionTypes';

export default function combosEdit(state = {}, action) {
    switch (action.type) {
    case COMBOS_CHANGE_INFO:
        return action.info;
    default:
        return state;
    }
}

