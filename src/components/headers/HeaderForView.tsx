import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import { Icon, IconType } from '@components';
import { colors, opacity, typography } from '@styles';

interface HeaderForViewProps {
    title: string;
    navigate: (route: string) => void;
    onLongPressTitle?: () => void;
    customStyles?: { [key: string]: string | number };
}
const HeaderForView: React.FC<HeaderForViewProps> = ({ title, navigate, onLongPressTitle, customStyles }) => {
    return (
        <View style={[styles.container, { ...customStyles }]}>
            <TouchableWithoutFeedback onLongPress={() => onLongPressTitle && onLongPressTitle()}>
                <Text style={styles.text}>{title}</Text>
            </TouchableWithoutFeedback>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={styles.containerBox1}
                    onPress={() => navigate('UserCategory')}
                    activeOpacity={opacity.opacity8}
                >
                    <Icon type={IconType.Face} fill={colors.white} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.containerBox}
                    onPress={() => navigate('Favorites')}
                    activeOpacity={opacity.opacity8}
                >
                    <Icon type={IconType.HeartFilled} fill={colors.white} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HeaderForView;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        letterSpacing: 0.15,
        fontSize: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerBox: {
        height: 40,
        width: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.orange,
        marginLeft: 16,
    },
    containerBox1: {
        height: 40,
        width: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.green,
    },
    text: {
        fontFamily: typography.bold,
        fontSize: 20,
        textTransform: 'uppercase',
    },
});
