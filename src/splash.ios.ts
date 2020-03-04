import { NativeModules } from 'react-native';

export const hideSplashScreen = () => {
    const AppDelegate = NativeModules.AppDelegate;
    AppDelegate.showReactApp();
};
