import React, { useState, useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Animated, Alert, LayoutChangeEvent } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { MyLocation } from './MyLocation';
import { EventItem } from '../types';
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
    const mapViewRef = useRef<MapView>(null);
    let _carousel: any;

    const [parentViewHeight, setParentViewHeight] = useState<number | undefined>(undefined)
    const [sliderHeight, setSliderHeight] = useState<number | undefined>(undefined)
    const [buttonsHeight, setButtonsHeight] = useState<number | undefined>(undefined)
    const [animationHeight, setAnimationHeight] = useState<Animated.AnimatedValue | undefined>(undefined);

    const [isScrollOpen, setScrollOpen] = useState<boolean>(false);

    useEffect(() => {
        if (parentViewHeight !== undefined &&
            sliderHeight !== undefined &&
            buttonsHeight !== undefined) {
            setAnimationHeight(new Animated.Value(parentViewHeight))
        }
    }, [parentViewHeight, sliderHeight, buttonsHeight])

    useEffect(() => {
        if (parentViewHeight !== undefined &&
            sliderHeight !== undefined &&
            buttonsHeight !== undefined &&
            animationHeight !== undefined) {
            startAnimation()
        }
    }, [animationHeight])

    const startAnimation = () => {
        if (parentViewHeight !== undefined &&
            sliderHeight !== undefined &&
            buttonsHeight !== undefined &&
            animationHeight !== undefined) {
            Animated.timing(animationHeight, {
                toValue: isScrollOpen ? parentViewHeight - sliderHeight : parentViewHeight - buttonsHeight,
                duration: 500,
            }).start()
        }
    };

    useEffect(() => {
        startAnimation()
    }, [isScrollOpen])

    const transformStyle = animationHeight === undefined ?
        { top: '100%' } : { top: animationHeight }

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
        <View
            style={styles.parentContainer}
            onLayout={(event) => setParentViewHeight(Math.ceil(event.nativeEvent.layout.height))}
        >
            <View style={styles.container}>
                <LongSearch
                    backgroundColor={colors.green}
                    onPress={() => {
                        onSearch()
                        setScrollOpen(false)
                    }}
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
                    mapPadding={{
                        top: 0,
                        right: 0,
                        bottom: isScrollOpen && parentViewHeight && sliderHeight && buttonsHeight ?
                            Math.floor((parentViewHeight - sliderHeight) / 2 + buttonsHeight) : 0,
                        left: 0
                    }}
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

                <Animated.View
                    style={[
                        styles.belowMap,
                        transformStyle
                    ]}
                    onLayout={(event: LayoutChangeEvent) => setSliderHeight(Math.ceil(event.nativeEvent.layout.height))}
                >
                    <Animated.View style={[
                        styles.eventsContainer,
                    ]}>
                        <View
                            style={styles.buttonsContainer}
                            onLayout={(event) => setButtonsHeight(Math.ceil(event.nativeEvent.layout.height) + 16)}
                        >

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
                            sliderHeight={500}
                            itemWidth={width - 48}
                            activeSlideAlignment="center"
                            removeClippedSubviews={false}

                            containerCustomStyle={{ flex: 1 }}
                        />
                    </Animated.View>
                </Animated.View>
            </View >
            <View>
                <Text>nothing</Text>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        overflow: 'hidden',
    },
    container: {
        ...StyleSheet.absoluteFillObject
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    belowMap: {
        position: 'absolute',
    },
    eventsContainer: {
        flex: 1,
    },
    buttonsContainer: {
        marginHorizontal: 24,
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
