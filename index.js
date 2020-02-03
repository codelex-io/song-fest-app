import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import storybook from './storybook';
import navigation from './src/navigation/index.tsx'

const IS_STORYBOOK = true;
const IS_NAVIGATION = true;

AppRegistry.registerComponent(appName, () => (IS_STORYBOOK ? navigation : App));
