import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, typography } from '../styles';
import { Icon, IconType } from '@components';

export class MoreView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <TouchableOpacity style={styles.container2}>
                        <View style={styles.containerBox}>
                            <Icon size={24} type={IconType.Heart} />
                        </View>
                        <Text style={styles.text}> Sponsoru piedāvājums</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container2}>
                        <View style={styles.containerBox}>
                            <Icon size={24} type={IconType.Heart} />
                        </View>
                        <Text style={styles.text}> Svarīgi {'\n'} zināt</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container2}>
                        <View style={styles.containerBox}>
                            <Icon size={24} type={IconType.Heart} />
                        </View>
                        <Text style={styles.text}> Biežākie jautājumi</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowContainer}>
                    <TouchableOpacity style={styles.container2}>
                        <View style={styles.containerBox}>
                            <Icon size={24} type={IconType.Heart} />
                        </View>
                        <Text style={styles.text}> Transports pasākumā</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container2}>
                        <View style={styles.containerBox}>
                            <Icon size={24} type={IconType.Heart} />
                        </View>
                        <Text style={styles.text}> Svētku info centrs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container2}>
                        <View style={styles.containerBox}>
                            <Icon size={24} type={IconType.Heart} />
                        </View>
                        <Text style={styles.text}> Akcija {'\n'} Zaļā pēda</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowContainer}>
                    <TouchableOpacity style={styles.container2}>
                        <View style={styles.containerBox}>
                            <Icon size={24} type={IconType.Heart} />
                        </View>
                        <Text style={styles.text}> Svētku noteikumi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container2}>
                        <View style={styles.containerBox}>
                            <Icon size={24} type={IconType.Heart} />
                        </View>
                        <Text style={styles.text}> Informācija par kontaktiem</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container2}>
                        <View style={styles.containerBox}>
                            <Icon size={24} type={IconType.Heart} />
                        </View>
                        <Text style={styles.text}> Lietotāja iestatījumi</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 16,
    },
    container2: {
        flex: 1,
        flexDirection: 'column',
        width: 99,
        alignItems: 'center',
        height: 88,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    containerBox: {
        height: 44,
        width: 44,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.extrLighgrey6E,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        width: 99,
        textAlign: 'center',
        paddingTop: 8,
        fontSize: 14,
        fontFamily: typography.normal,
    },
});
