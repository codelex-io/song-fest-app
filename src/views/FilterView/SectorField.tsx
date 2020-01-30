import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon, IconType } from '@components';
import { colors, typography } from '../../styles';
import { IconType, Icon } from '@components';

interface SectorFieldProps {
    sector: {
        title: string;
        active: boolean;
    };
}

export class SectorField extends React.Component<SectorFieldProps> {
    render() {
        const { sector } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.icon}>
                    {sector.active ? (
                        <Icon size={24} type={IconType.RadioBoxMarked} fill={colors.darkGrey1A} />
                    ) : (
                        <Icon size={24} type={IconType.RadioBoxBlank} fill={colors.darkGrey1A} />
                    )}
                </View>
                <Text style={styles.text}>{sector.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 292,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    icon: {
        paddingRight: 14,
        paddingLeft: 2,
    },
    text: {
        fontFamily: typography.bold,
        fontSize: 14,
        color: colors.darkGrey1A,
        textAlign: 'center',
        letterSpacing: 0.0125,
        textTransform: 'uppercase',
    },
});
