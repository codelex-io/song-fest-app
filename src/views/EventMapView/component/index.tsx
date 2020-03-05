import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Animated, Alert } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { MyLocation } from './MyLocation';
import { EventItem } from '../types';
import { ScrollViewHandle } from './EventScroll';
import { EventMarker } from './EventMarker';
import { colors } from '@styles';
import { LongSearch } from '@components';
import { ArrowButton } from './ArrowButton';
import Carousel from 'react-native-snap-carousel';
import { EventCard } from './EventCard';

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
    // const scrollViewRef = useRef<ScrollViewHandle>(null);
    const mapViewRef = useRef<MapView>(null);
    let _carousel: any;
    const [animation] = useState<Animated.AnimatedValue>(new Animated.Value(0));
    const [isScrollOpen, setScrollOpen] = useState<boolean>(false);

    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: isScrollOpen ? 0 : 290,
            duration: 500,
        }).start();
    };

    useEffect(() => {
        startAnimation()
    }, [isScrollOpen])

    const transformStyle = {
        transform: [{ translateY: animation, },],
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

    const onCarouselItemChange = (currentActiveCardIndex: number) => {
        let location = items[currentActiveCardIndex].location
        if (mapViewRef.current) {
            mapViewRef.current.animateToRegion(
                {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.002,
                    longitudeDelta: 0.002,
                },
                1000,
            );
        }
    }

    const onMapMarkerClick = (item: EventItem, index: number) => {
        onSelectEvent(item);
        setScrollOpen(true);
        startAnimation();
        _carousel.snapToItem(index)
    }

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
                        onPress={() => onMapMarkerClick(item, index)}
                        isSelected={item.isSelected}
                        coordinates={item.location}
                    />
                ))}
            </MapView>

            <Animated.View style={[styles.eventsContainer, transformStyle]}>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.helperButton} onPress={animateToLocation}>
                        <MyLocation />
                    </TouchableOpacity>

                    <ArrowButton open={isScrollOpen} onPress={() => {
                        setScrollOpen(!isScrollOpen)
                        startAnimation()
                    }} style={styles.helperButton} />
                </View>

                <Carousel
                    ref={(c: any) => _carousel = c}
                    data={items}
                    renderItem={({ item, index }) =>
                        <EventCard
                            item={item}
                            onFavourite={() => onFavourite(item)}
                            onNavigate={() => onNavigate(item)}
                            onReadMore={() => onReadMore(item)}
                            itemIndex={index + 1}
                            totalItems={items.length}
                            backgroundColor={colors.findColorByIndex(index)}
                        />}
                    onSnapToItem={(cardIndex) => onCarouselItemChange(cardIndex)}

                    sliderWidth={width}
                    itemWidth={width - 32}
                    activeSlideAlignment="center"
                    removeClippedSubviews={false}
                />
            </Animated.View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject
    },
    map: {
        ...StyleSheet.absoluteFillObject
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
        backgroundColor: colors.yellow,
        padding: 10,
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
