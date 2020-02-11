import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { Header } from '../../../components/Header';
import { MyLocation } from './MyLocation';
import { FilterButton } from './FilterButton';
import { ArrowButton } from './ArrowButton';
import { EventItem } from '../types';
import { EventScroll } from './EventScroll';
import { SearchBar } from './SearchBar';
import { EventMarker } from './EventMarker';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

interface Props {
    events: EventItem[];
    onSelectEvent: (event: EventItem) => void;
}

const EventMapView: React.FC<Props> = ({ events, onSelectEvent }) => {
    const [isScrollOpen, setScrollOpen] = useState<boolean>(false);
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
                {events.map(item => (
                    <EventMarker
                        key={item.id}
                        onPress={() => onSelectEvent(item)}
                        isSelected={item.isSelected}
                        coordinates={item.coordinates}
                    />
                ))}
            </MapView>
            <View style={styles.eventsContainer}>
                <View style={styles.buttonsContainer}>
                    <MyLocation />
                    <FilterButton />
                    <TouchableOpacity onPress={() => setScrollOpen(!isScrollOpen)}>
                        <ArrowButton />
                    </TouchableOpacity>
                </View>
                {isScrollOpen && <EventScroll events={events} />}
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
    eventsContainer: {
        position: 'absolute',
        bottom: 5,
        width: width,
    },
    buttonsContainer: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default EventMapView;
