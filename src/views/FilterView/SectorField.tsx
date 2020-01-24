import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from '../../components';
import { ActiveIcon } from '../../components';
import { colors } from '../../styles';


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
                    {sector.active ? (<ActiveIcon size={24} />) : (<Icon size={24} />)}
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
        alignItems: 'center'
    },
    icon: {
        paddingRight: 14,
        paddingLeft: 2,
    },
    text: {
        fontFamily: 'DINPro-Bold',
        fontSize: 14,
        color: colors.darkGrey,
        textAlign: 'center',
        letterSpacing: 0.0125,
        textTransform: 'uppercase',
    },
});
