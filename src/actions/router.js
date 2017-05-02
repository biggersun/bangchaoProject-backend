import { push, replace, goBack as pageBack } from 'react-router-redux';

export function changeUrl(url) {
    return dispatch => dispatch(push(url));
}

export function replaceQuery(query, replaceHistory = false) {
    return (dispatch, getState) => {
        const { pathname, state } = getState().routing.locationBeforeTransitions;
        const location = {
            pathname,
            state,
            query
        };

        const method = replaceHistory ? replace : push;

        dispatch(method(location));
    };
}

export function updateQuery(newQuery, replaceHistory = false) {
    return (dispatch, getState) => {
        const { pathname, query, state } = getState().routing.locationBeforeTransitions;
        const location = {
            pathname,
            state,
            query: {
                ...query,
                ...newQuery
            }
        };

        const method = replaceHistory ? replace : push;

        dispatch(method(location));
    };
}

export const goBack = pageBack;
