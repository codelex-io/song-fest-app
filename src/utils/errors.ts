import { Client } from 'bugsnag-react-native';

let onError = (e: Error) => {
    // eslint-disable-next-line no-console
    console.error(e);
};

if (!__DEV__) {
    const bugsnag = new Client('5741d41bbc92be9c935cca4520f06018');
    onError = (e: Error) => bugsnag.notify(e);
}

export { onError };
