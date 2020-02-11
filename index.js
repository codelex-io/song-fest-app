import { AppRegistry } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import App from './App';
import { name as appName } from './app.json';
import storybook from './storybook';

const IS_STORYBOOK = false;

if (IS_STORYBOOK) {
    SplashScreen.hide();
}

AppRegistry.registerComponent(appName, () => (IS_STORYBOOK ? storybook : App));
