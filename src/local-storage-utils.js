import { isEmpty } from 'lodash';
export const prefixify = (key) => `@app/${key}`;

export function safelyReadFromLS(key) {
    const fullKey = prefixify(key);
    try {
        const data = window.localStorage.getItem(fullKey);

        if (!isEmpty(data)) {
            return JSON.parse(data);
        }
    } catch (error) {
        const msg = `Failed to read key "${fullKey}" from local storage`;
        console.error(msg, error);
    }

    return null;
}

export function safelyWriteToLS(key, data) {
    const fullKey = prefixify(key);
    try {
        window.localStorage.setItem(fullKey, JSON.stringify(data));
    } catch (error) {
        const msg = `Failed to save key "${fullKey}" to local storage`;
        console.error(msg, error);
    }
}