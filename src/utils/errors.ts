import { Client } from 'bugsnag-react-native';
const bugsnag = new Client('5741d41bbc92be9c935cca4520f06018');

export const onError = (e: Error) => {
    if (__DEV__) {
        // eslint-disable-next-line no-console
        console.error(e);
        return;
    }
    bugsnag.notify(e);
};
