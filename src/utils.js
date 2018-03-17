import { isFunction } from 'lodash';

export function newState(state, ...restArgs) {
    const source = restArgs.map((arg) => {
        return isFunction(arg) ? arg(state) : arg;
    });

    return  Object.assign({}, state, ...source );
}

export function switchCase(cases) {
    return (defaultCase) => (key) => {
        return (key in cases) ? cases[key] : defaultCase;
    };
}

export function executeIfFunction(func, ...args) {
    return typeof func === 'function' ? func(...args) : func;
}

export function createReducer(cases, initialState) {
    return (state = initialState, action) =>
        newState(
            state,
            executeIfFunction(
                switchCase(cases)(state)(action.type),
                state,
                action.payload,
                action.error,
            )
        )
    ;
}
