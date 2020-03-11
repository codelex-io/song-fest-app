import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FilterButton } from './FilterButton';
import { SectorField } from './SectorField';
import { Icon, IconType } from '@components';
import { colors, typography, opacity } from '@styles';
import { FilterButtonIcon } from '../../components';

export default class FilterView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.header}>
                        <View style={styles.iconLeft}>
                            <Icon size={20} type={IconType.ChevronLeft} fill={colors.darkGrey1A} />
                        </View>
                        <View style={styles.filterButtonUpper}>
                            <FilterButtonIcon />
                        </View>
                    </View>
                    <View style={styles.title}>
                        <Text> Datums</Text>
                    </View>
                    <View style={styles.container2}>
                        <FilterButton button={{ title: 'ŠODIEN', active: true }} />
                        <FilterButton button={{ title: 'RĪTDIEN', active: false }} />
                        <FilterButton button={{ title: 'CITS', active: false }} />
                    </View>
                    <View style={styles.title}>
                        <Text> Ieeja</Text>
                    </View>
                    <View style={styles.container2}>
                        <FilterButton button={{ title: 'BEZMAKSAS', active: true }} />
                        <FilterButton button={{ title: 'MAKSAS', active: false }} />
                    </View>
                    <View style={styles.title}>
                        <Text> Programma</Text>
                    </View>
                    <View style={styles.container2}>
                        <FilterButton button={{ title: 'OFICIĀLĀ SVĒTKU', active: true }} />
                        <FilterButton button={{ title: 'CITI PASĀKUMI', active: false }} />
                        <FilterButton button={{ title: 'IESKAŅAS PASĀKUMI', active: false }} />
                    </View>
                    <View style={styles.title}>
                        <Text> Saturs vecākiem</Text>
                    </View>
                    <View style={styles.container2}>
                        <FilterButton button={{ title: 'RĀDĪT', active: false }} />
                        <FilterButton button={{ title: 'NERĀDĪT', active: true }} />
                    </View>
                    <View style={styles.title}>
                        <Text> Nozare</Text>
                    </View>
                    <View>
                        <SectorField sector={{ title: 'RĀDĪT VISAS NOZARES', active: true }} />
                        <SectorField sector={{ title: 'koris', active: false }} />
                        <SectorField sector={{ title: 'Tautas dejas', active: false }} />
                        <SectorField sector={{ title: 'Mūsdienu dejas', active: false }} />
                        <SectorField sector={{ title: 'Instrumentālā mūzika', active: false }} />
                        <SectorField sector={{ title: 'Folklora', active: false }} />
                        <SectorField sector={{ title: 'Teātra māksla', active: false }} />
                        <SectorField sector={{ title: 'Vizuālā un vizuāli plastiskā māksla', active: false }} />
                        <SectorField sector={{ title: 'Vokālā mūzika', active: false }} />
                        <SectorField sector={{ title: 'Kokles', active: false }} />
                        <SectorField sector={{ title: 'Profesionālās izglītības iestādes', active: false }} />
                        <SectorField sector={{ title: 'Speciālās izglītības iestādes', active: false }} />
                        <SectorField sector={{ title: 'Vērmanes dārzs', active: false }} />
                    </View>

                    <View style={styles.bottomButtons}>
                        <TouchableOpacity style={styles.cancelButton} activeOpacity={opacity.opacity8}>
                            <Text style={styles.buttonText}>ATCELT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filterButton} activeOpacity={opacity.opacity8}>
                            <Text style={styles.buttonText}>FILTRĒT</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        paddingLeft: 16,
        backgroundColor: colors.white,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
    },
    iconLeft: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 24,
    },
    filterButtonUpper: {
        flex: 2,
        alignSelf: 'flex-start',
    },
    container2: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    title: {
        paddingBottom: 16,
    },
    cancelButton: {
        width: 81,
        height: 44,
        backgroundColor: colors.extrLightgrey6E,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    filterButton: {
        width: 81,
        height: 44,
        paddingVertical: 13,
        alignItems: 'center',
        backgroundColor: colors.yellow,
    },
    bottomButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 16,
        borderTopColor: colors.extrLightgrey6E,
        borderTopWidth: 1,
        alignItems: 'stretch',
    },
    buttonText: {
        color: colors.darkGrey1A,
        fontFamily: typography.bold,
    },
});
