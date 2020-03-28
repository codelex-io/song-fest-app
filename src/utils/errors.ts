import { Client } from 'bugsnag-react-native';

let onError = (e: Error, report = true) => {
    if (report) {
        // eslint-disable-next-line no-console
        console.error(e);
        return;
    }
    // eslint-disable-next-line no-console
    console.log(e);
};

if (!__DEV__) {
    const bugsnag = new Client('5741d41bbc92be9c935cca4520f06018');
    onError = (e: Error, report = true) => {
        if (!report) {
            return;
        }
        bugsnag.notify(e);
    };
}

export { onError };
