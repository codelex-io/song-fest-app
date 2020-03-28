import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { SimpleHeader } from '@components';
import { TextTransform } from '@styles/typography';

interface SimpleLayoutProps {
    goBack: () => void;
    title: string;
    containerStyles?: ViewStyle;
    headerStyles?: ViewStyle;
    textTransform?: TextTransform;
}
const SimpleLayout: React.FC<SimpleLayoutProps> = ({
    goBack,
    children,
    title,
    containerStyles,
    headerStyles,
    textTransform,
}) => {
    return (
        <View style={[styles.container, containerStyles]}>
            <SimpleHeader title={title} onBack={goBack} textTransform={textTransform} propStyles={headerStyles} />
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
});

export default SimpleLayout;
