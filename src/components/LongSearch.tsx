import React, { Fragment } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, IconType } from '@components';
import { typography, colors } from '@styles';

interface LongSearchProps {
    backgroundColor: string;
    onPress?: () => void;
    searchInput?: string;
    onResetSearch?: () => void;
    customStyles?: any
}

export const LongSearch: React.FC<LongSearchProps> = ({
    backgroundColor,
    onPress,
    searchInput,
    onResetSearch,
    customStyles,
}) => {

    return (
        <TouchableOpacity
            style={[
                styles.container,
                { backgroundColor },
                { ...customStyles }
            ]}
            onPress={onPress}>

            <Icon size={24} type={IconType.Search} fill={colors.white} />

            {searchInput ? (
                <Fragment>
                    <Text>rezultāti: {searchInput}</Text>
                    <TouchableOpacity onPress={onResetSearch}>
                        <Text>Nodzēst</Text>
                    </TouchableOpacity>
                </Fragment>
            ) : (
                    <Text style={styles.text}>Meklēt pēc nosaukuma, vietas uc.</Text>
                )}

        </TouchableOpacity>
    );
}

let styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 8,
        marginHorizontal: 16,
        marginBottom: 16,
    },
    text: {
        color: colors.white,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: typography.bold,
        fontSize: 14,
        lineHeight: 18,
        marginLeft: 8,
    },
});
