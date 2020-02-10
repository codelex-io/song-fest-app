import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Header } from '../../components/Header';
import { Icon, IconType } from '@components';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { MyLocation } from './MyLocation';
import { FilterButton } from './FilterButton';
import { ArrowButton } from './ArrowButton';
import { EventCardButtons } from './EventCardButtons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const festivalEvents: EventDescriptionProps[] = [
    {
        id: 1,
        title: 'Svētku ieskandināšana',
        type: 'sing',
        location: 'Viesturdārzs',
        eventType: 'singing',
        date: 'Pirmdiena, 6. jūlijs',
        timeStart: '16:00',
        timeEnd: '04:00',
        coordinations: {
            latitude: 56.951637,
            longitude: 24.113347,
        },
    },
    {
        id: 2,
        title: 'Latvijas izglītības iestāžu skatuves runas konkurss Latgalē',
        type: 'sing',
        location: 'Viesturdārzs',
        eventType: 'singing',
        date: 'Pirmdiena, 6. jūlijs',
        timeStart: '19:30',
        timeEnd: '20:30',
        coordinations: {
            latitude: 56.951707,
            longitude: 24.110053,
        },
    },
];
export const ClickedEventMarker = () => {
    return (
        <TouchableOpacity>
            <Marker
                coordinate={{
                    latitude: 56.951637,
                    longitude: 24.113347,
                }}
            >
                <View
                    style={{
                        width: 58,
                        height: 58,
                        borderRadius: 58 / 2,
                        alignSelf: 'center',
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                        borderColor: '#F15A31',
                        borderStyle: 'solid',
                        borderWidth: 4,
                    }}
                >
                    <View
                        style={{
                            backgroundColor: '#F15A31',
                            width: 44,
                            height: 44,
                            borderRadius: 44 / 2,
                            justifyContent: 'center',
                        }}
                    >
                        <View
                            style={{
                                alignSelf: 'center',
                            }}
                        >
                            <Icon size={22} type={IconType.Search} fill={'white'} />
                        </View>
                    </View>
                </View>
            </Marker>
        </TouchableOpacity>
    );
};

interface MarkerProps {
    latitude: number;
    longitude: number;
}

export const EventMarker: React.FC<MarkerProps> = props => {
    const [clicked, setClick] = useState(false);
    return (
        <Marker
            coordinate={{
                latitude: props.latitude,
                longitude: props.longitude,
            }}
            onPress={() => {
                setClick(true);
            }}
            onCalloutPress={() => {
                setClick(false);
            }}
        >
            <View style={clicked ? styles.clickedMarker : styles.clearMarker}>
                <View
                    style={{
                        backgroundColor: '#F15A31',
                        width: 44,
                        height: 44,
                        borderRadius: 44 / 2,
                        justifyContent: 'center',
                    }}
                >
                    <View
                        style={{
                            alignSelf: 'center',
                        }}
                    >
                        <Icon size={22} type={IconType.Search} fill={'white'} />
                    </View>
                </View>
            </View>
        </Marker>
    );
};

export const SearchBar = () => {
    return (
        <View style={styles.searchBarContainer}>
            <View
                style={{
                    alignSelf: 'center',
                    marginRight: 10,
                    marginLeft: 10,
                }}
            >
                <Icon size={35} type={IconType.Search} fill={'white'} />
            </View>
            <TextInput
                style={{
                    height: 60,
                    width: 300,
                    fontSize: 18,
                    alignSelf: 'flex-end',
                    color: 'white',
                    marginRight: 20,
                }}
                placeholderTextColor="white"
                placeholder="MEKLESANA"
            />
        </View>
    );
};

interface EventDescriptionProps {
    id?: number;
    title: string;
    type?: string;
    location: string;
    eventType?: string;
    date: string;
    timeStart: string;
    timeEnd: string;
    coordinations: MarkerProps;
    currentItem?: number;
    totalItems?: number;
}

export const EventCard: React.FC<EventDescriptionProps> = props => {
    return (
        <View style={styles.event}>
            <Text style={styles.eventTitle}>{props.title}</Text>
            <Text style={styles.eventLocation}>{props.location}</Text>
            <View>
                <View style={styles.eventiconLabel}>
                    <Icon size={25} type={IconType.Calendar} fill="white" />
                    <Text style={styles.eventLabelText}>{props.date}</Text>
                </View>
                <View style={styles.eventiconLabel}>
                    <Icon size={25} type={IconType.Clock} fill="white" />
                    <Text style={styles.eventLabelText}>{`${props.timeStart} - ${props.timeEnd}`}</Text>
                </View>
            </View>
            <Text
                style={{
                    textAlign: 'right',
                    color: 'white',
                    fontSize: 14,
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                }}
            >{`${props.currentItem}/${props.totalItems}`}</Text>
            <EventCardButtons />
        </View>
    );
};

export const EventScroll = () => {
    return (
        <ScrollView
            horizontal={true}
            scrollEventThrottle={16}
            scrollEnabled={true}
            contentContainerStyle={styles.events}
        >
            {festivalEvents.map((item, index) => {
                return (
                    <EventCard
                        key={item.id}
                        title={item.title}
                        location={item.location}
                        date={item.date}
                        timeStart={item.timeStart}
                        timeEnd={item.timeEnd}
                        coordinations={item.coordinations}
                        currentItem={index + 1}
                        totalItems={festivalEvents.length}
                    />
                );
            })}
        </ScrollView>
    );
};

export const EventMapView = () => {
    const [state, setState] = useState({ visible: true });
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header title="Karte" />
            </View>
            <SearchBar />
            <MapView
                initialRegion={{
                    latitude: 56.951637,
                    longitude: 24.113347,
                    latitudeDelta: 0.0008,
                    longitudeDelta: 0.00921,
                }}
                showsUserLocation={true}
                style={styles.map}
                showsMyLocationButton={true}
            >
                {festivalEvents.map(item => {
                    return (
                        <EventMarker
                            key={item.id}
                            longitude={item.coordinations.longitude}
                            latitude={item.coordinations.latitude}
                        />
                    );
                })}
            </MapView>
            <View style={styles.eventsContainer}>
                <View style={styles.buttonsContainer}>
                    <MyLocation />
                    <FilterButton />
                    <TouchableOpacity
                        onPress={() => (state.visible ? setState({ visible: false }) : setState({ visible: true }))}
                    >
                        <ArrowButton />
                    </TouchableOpacity>
                </View>
                {state.visible ? <EventScroll /> : <View></View>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: 'DINPro',
    },
    header: {
        width: width,
        height: 56,
    },
    map: {
        alignSelf: 'stretch',
        width: width,
        height: height - 120,
    },
    eventTitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    eventsContainer: {
        position: 'absolute',
        bottom: 5,
        width: width,
    },
    eventLocation: {
        fontSize: 16,
        color: 'white',
    },
    eventLabelText: {
        fontSize: 16,
        color: 'white',
        marginLeft: 10,
    },
    events: {
        zIndex: 8,
        paddingVertical: 12,
        paddingLeft: 16,
    },
    eventiconLabel: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
    },
    event: {
        backgroundColor: '#086BB5',
        height: height - 440,
        width: width - 50,
        zIndex: 9,
        marginRight: 16,
        paddingHorizontal: 30,
        paddingVertical: 16,
        display: 'flex',
        justifyContent: 'space-between',
    },
    searchBarContainer: {
        width: width - 32,
        backgroundColor: 'green',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
        paddingRight: 40,
        alignSelf: 'center',
        zIndex: 99,
        position: 'absolute',
        top: 73,
    },
    buttonsContainer: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    clickedMarker: {
        width: 58,
        height: 58,
        borderRadius: 58 / 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderColor: '#F15A31',
        borderStyle: 'solid',
        borderWidth: 5,
    },
    clearMarker: {
        width: 58,
        height: 58,
        borderRadius: 58 / 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderColor: 'transparent',
        borderStyle: 'solid',
        borderWidth: 5,
    },
});
