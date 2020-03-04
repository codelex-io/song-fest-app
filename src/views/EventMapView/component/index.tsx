import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Animated, Alert } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { MyLocation } from './MyLocation';
import { EventItem } from '../types';
import { EventScroll, ScrollViewHandle } from './EventScroll';
import { EventMarker } from './EventMarker';
import { colors } from '@styles';
import { LongSearch } from '@components';

const width = Dimensions.get('window').width;

interface Props {
    loading: boolean;
    items: EventItem[];
    onSelectEvent: (event: EventItem) => void;
    onFavourite: (item: EventItem) => void;
    onNavigate: (item: EventItem) => void;
    onSearch: () => void;
    searchInput: string;
    onResetSearch: () => void;
    onReadMore: (item: EventItem) => void;
}

const EventMapComponent: React.FC<Props> = ({
    items,
    onSelectEvent,
    onFavourite,
    onNavigate,
    onSearch,
    searchInput,
    onResetSearch,
    onReadMore,
}) => {
    const scrollViewRef = useRef<ScrollViewHandle>(null);
    const mapViewRef = useRef<MapView>(null);
    const [animation] = useState<Animated.AnimatedValue>(new Animated.Value(0));
    const [isScrollOpen, setScrollOpen] = useState<boolean>(false);


    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: isScrollOpen ? 0 : 290,
            duration: 500,
        }).start();
    };
    useEffect(() => {
        console.log('scroll triggered', isScrollOpen ? 'opened' : 'closed')
        startAnimation()
    }, [isScrollOpen])

    const transformStyle = {
        transform: [{ translateY: animation, },],
    };

    const eventCardPosition = (index: number) => {
        return {
            x: index * (width - 34),
            y: 0, animated: true,
        };
    };

    const animateToLocation = () => {
        Geolocation.getCurrentPosition(
            position => {
                mapViewRef.current?.animateToRegion(
                    {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: 0.002,
                        longitudeDelta: 0.002,
                    },
                    1000,
                );
            },
            error => {
                showLocationErrorAlert(error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
    };

    return (
        <View style={styles.container}>
            <LongSearch
                backgroundColor={colors.green}
                onPress={onSearch}
                searchInput={searchInput}
                onResetSearch={onResetSearch}
                customStyles={{
                    position: 'absolute',
                    right: 0,
                    left: 0,
                    zIndex: 1,
                }}
            />
            <MapView
                initialRegion={{
                    latitude: 56.951637,
                    longitude: 24.113347,
                    latitudeDelta: 0.0008,
                    longitudeDelta: 0.00921,
                }}
                showsUserLocation={true}
                style={styles.map}
                ref={mapViewRef}
            >
                {items.map((item, index) => (
                    <EventMarker
                        key={item.id}
                        onPress={() => {
                            onSelectEvent(item);
                            setScrollOpen(true);
                            startAnimation();
                            scrollViewRef.current && scrollViewRef.current.scrollTo(eventCardPosition(index));
                        }}
                        isSelected={item.isSelected}
                        coordinates={item.location}
                    />
                ))}
            </MapView>
            <View style={styles.eventsContainer}>
                <Animated.View style={transformStyle}>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.helperButton} onPress={animateToLocation}>
                            <MyLocation />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.helperButton}
                            onPress={() => {
                                setScrollOpen(!isScrollOpen);
                                startAnimation();
                            }}
                            style={styles.helperButton as any} />
                    </View>
                    <EventScroll
                        items={items}
                        onFavourite={item => onFavourite(item)}
                        onNavigate={item => onNavigate(item)}
                        ref={scrollViewRef}
                        onReadMore={(item: EventItem) => onReadMore(item)}
                    />
                </Animated.View>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        alignSelf: 'stretch',
        width: width,
        flex: 1,
    },
    eventsContainer: {
        position: 'absolute',
        bottom: 0,
        width: width,
    },
    buttonsContainer: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 16,
    },
    helperButton: {
        marginRight: 8,
    },
});

const showLocationErrorAlert = (message: string) => {
    Alert.alert(
        'Nav iespējams noteikt atrašanās vietu',
        'Lūdzu pārbaudiet vai ir ieslēgts GPS un lietotnei ir atļauta atrašanās vietas piekļuve. ' + message,
        [{ text: 'OK', },],
        { cancelable: false },
    );
};

export default EventMapComponent;
