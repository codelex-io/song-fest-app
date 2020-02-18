import React from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Text,
    Modal,
    TouchableHighlight,
    ScrollView,
} from 'react-native';
import { Card } from './Card';
import { EventItem } from '../EventListView/types';
import { colors, typography } from '../../styles';
import { Icon, IconType, FilterButtonIcon, LongSearch, TimeFilterButton } from '@components';
import { FilterButton } from '../FilterView/FilterButton';
import { SectorField } from '../FilterView/SectorField';

interface EventFilterViewProps {
    events: EventItem[];
}

export default class EventListView extends React.Component<EventFilterViewProps> {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible: boolean) {
        this.setState({ modalVisible: visible });
    }

    render() {
        const { events } = this.props;
        return (
            <View style={styles.hugeContainer}>
                <View style={styles.searchContainer}>
                    <Modal animationType="slide" transparent={false} visible={this.state.modalVisible}>
                        <View style={styles.modalContainer}>
                            <ScrollView style={{ paddingHorizontal: 16 }}>
                                <View style={styles.header}>
                                    <View style={styles.iconLeft}>
                                        <Icon size={20} type={IconType.ChevronLeft} fill={colors.white} />
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
                                    <SectorField
                                        sector={{ title: 'Vizuālā un vizuāli plastiskā māksla', active: false }}
                                    />
                                    <SectorField sector={{ title: 'Vokālā mūzika', active: false }} />
                                    <SectorField sector={{ title: 'Kokles', active: false }} />
                                    <SectorField
                                        sector={{ title: 'Profesionālās izglītības iestādes', active: false }}
                                    />
                                    <SectorField sector={{ title: 'Speciālās izglītības iestādes', active: false }} />
                                    <SectorField sector={{ title: 'Vērmanes dārzs', active: false }} />
                                </View>
                                <View style={styles.bottomButtons}>
                                    <TouchableHighlight
                                        style={styles.cancelButton}
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}
                                    >
                                        <Text style={styles.buttonText}>ATCELT</Text>
                                    </TouchableHighlight>
                                    <TouchableOpacity style={styles.filterButton}>
                                        <Text style={styles.buttonText}>FILTRĒT</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                    </Modal>
                    <LongSearch backgroundColor={colors.blue} />
                </View>
                <View style={styles.searchContainerButton}>
                    <TimeFilterButton title="Šodien" active={true} onPress={() => null} />
                    <TimeFilterButton title="Rīt" active={false} onPress={() => null} />
                    <TimeFilterButton title="Šonedēļ" active={false} onPress={() => null} />
                    <TimeFilterButton title="Cits" active={false} onPress={() => null} />
                </View>
                <FlatList<EventItem>
                    data={events}
                    renderItem={({ item }): React.ReactElement => (
                        <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
                            <Card event={item} />
                        </View>
                    )}
                />
                <View>
                    <View style={styles.fixedFilter}>
                        <TouchableHighlight onPress={() => this.setModalVisible(true)}>
                            <FilterButtonIcon />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    hugeContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    fixedFilter: {
        position: 'absolute',
        bottom: 0,
        width: '25%',
        marginBottom: 16,
        alignSelf: 'center',
        backgroundColor: colors.yellow,
    },
    searchContainer: {
        alignItems: 'stretch',
    },
    searchContainerBlue: {
        backgroundColor: colors.blue,
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 8,
    },
    searchText: {
        color: colors.white,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: typography.bold,
        fontSize: 14,
        lineHeight: 18,
    },
    iconContainer: {
        paddingRight: 11.25,
    },
    searchContainerButton: {
        flexDirection: 'row',
        marginBottom: 16,
        marginTop: 8,
        marginLeft: 16,
    },
    modalContainer: {
        flex: 1,
        flexDirection: 'column',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        paddingLeft: 16,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
    },
    container2: {
        flexDirection: 'row',
    },
    title: {
        paddingBottom: 16,
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
    cancelButton: {
        width: 81,
        height: 44,
        backgroundColor: colors.extrLighgrey6E,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    filterButton: {
        width: 87,
        height: 44,
        backgroundColor: colors.yellow,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 16,
        borderTopColor: colors.extrLighgrey6E,
        borderTopWidth: 1,
        alignItems: 'stretch',
    },
    buttonText: {
        color: colors.darkGrey1A,
        fontFamily: typography.bold,
    },
});
