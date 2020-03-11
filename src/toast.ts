import Toast from 'react-native-simple-toast';

export const toast = (message: string) => {
    Toast.show(message, Toast.SHORT);
};
