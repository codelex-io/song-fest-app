import React, { useState, useRef, useEffect, useLayoutEffect, useContext, Fragment } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Animated, LayoutChangeEvent } from 'react-native';
import MapView from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
import { MyLocation } from './MyLocation';
import { EventItem } from '../types';
import { EventMarker } from './EventMarker';
import { colors } from '@styles';
import { LongSearch, Header, Empty } from '@components';
import { EventCard } from './EventCard';
import { getCurrentPosition } from '@domain/location';
import { LocalizationContext } from '@localization/LocalizationContext';
import StatusBar from '@components/headers/StatusBar';
import { StackNavigationProp } from '@react-navigation/stack';
import { SharedStackParamsList } from 'src/navigation/stacks/SharedStack';
import { AnyType } from '@domain/AnyType';
import { SearchInterface } from '@components/headers/SearchHeader';
import { ArrowButton } from './ArrowButton';

const WIDTH = Dimensions.get('window').width;

interface Props {
    loading: boolean;
    items: EventItem[];
    onFavourite: (item: EventItem) => void;
    onNavigate: (item: EventItem) => void;
    onSearch: (color: string) => void;
    searchInput: SearchInterface;
    onResetSearch: () => void;
    navigateToArticle: (item: EventItem) => void;
    navigation: StackNavigationProp<SharedStackParamsList, 'Feed'>;
}

const EventMapComponent: React.FC<Props> = ({
    items,
    onFavourite,
    onNavigate,
    onSearch,
    searchInput,
    onResetSearch,
    navigateToArticle,
    navigation,
}) => {
    const mapViewRef = useRef<MapView>(null);
    let carousel: AnyType;

    const [selectedId, setSelectedId] = useState<string>('');
    const [parentViewHeight, setParentViewHeight] = useState<number | undefined>(undefined);
    const [sliderHeight, setSliderHeight] = useState<number | undefined>(undefined);
    const [buttonsHeight, setButtonsHeight] = useState<number | undefined>(undefined);
    const [animationHeight, setAnimationHeight] = useState<Animated.AnimatedValue | undefined>(undefined);
    const [isScrollOpen, setScrollOpen] = useState<boolean>(false);
    const [isMapLoaded, setIsMapLoaded] = useState<boolean>(false);
    const { translations } = useContext(LocalizationContext);

    useEffect(() => {
        if (parentViewHeight !== undefined) {
            setAnimationHeight(new Animated.Value(parentViewHeight));
        }
    }, [parentViewHeight]);

    useEffect(() => {
        if (
            parentViewHeight !== undefined &&
            sliderHeight !== undefined &&
            buttonsHeight !== undefined &&
            animationHeight !== undefined
        ) {
            startAnimation();
        }
    }, [animationHeight]);

    const startAnimation = () => {
        if (
            parentViewHeight !== undefined &&
            sliderHeight !== undefined &&
            buttonsHeight !== undefined &&
            animationHeight !== undefined
        ) {
            Animated.timing(animationHeight, {
                toValue: isScrollOpen ? parentViewHeight - sliderHeight : parentViewHeight - buttonsHeight,
                duration: 500,
            }).start();
        }
    };

    useEffect(() => {
        if (items[0]) {
            setSelectedId(items[0].id);
        }
    }, []);

    useLayoutEffect(() => {
        if (isMapLoaded && items[0]) {
            animateToItemLocation(items[0]);
            setSelectedId(items[0].id);
        }
    }, [searchInput.payload, isMapLoaded]);

    useEffect(() => {
        startAnimation();
    }, [isScrollOpen]);

    const transformStyle = animationHeight === undefined ? { top: '100%' } : { top: animationHeight };

    const animateToUserLocation = () => {
        getCurrentPosition({
            title: translations.getString('LOCATION_PERMISSIONS_TITLE'),
            details: translations.getString('LOCATION_PERMISSIONS_DETAILS'),
        }).then(coordinates => {
            if (!coordinates) {
                return;
            }
            mapViewRef.current?.animateToRegion(
                {
                    latitude: coordinates.latitude,
                    longitude: coordinates.longitude,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.09,
                },
                1000,
            );
        });
    };

    const animateToItemLocation = (item: EventItem) => {
        mapViewRef.current?.animateToRegion(
            {
                latitude: item.location.latitude,
                longitude: item.location.longitude,
                latitudeDelta: 0.009,
                longitudeDelta: 0.009,
            },
            1000,
        );
    };

    const onCarouselItemChange = (currentActiveCardIndex: number) => {
        const location = items[currentActiveCardIndex].location;
        setSelectedId(items[currentActiveCardIndex].id);
        if (mapViewRef.current) {
            mapViewRef.current.animateToRegion(
                {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.009,
                    longitudeDelta: 0.009,
                },
                1000,
            );
        }
    };

    const onMapMarkerClick = (item: EventItem, index: number) => {
        setScrollOpen(true);
        startAnimation();
        carousel.snapToItem(index);
        setSelectedId(item.id);
    };

    return (
        <View
            style={styles.parentContainer}
            onLayout={event => {
                setParentViewHeight(Math.ceil(event.nativeEvent.layout.height));
            }}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <StatusBar />
                    <Header title={translations.getString('MAP')} navigation={navigation} />
                    <LongSearch
                        backgroundColor={colors.green}
                        onPress={() => {
                            onSearch(colors.green);
                        }}
                        searchInput={searchInput.payload}
                        onResetSearch={onResetSearch}
                    />
                </View>
                {items.length === 0 && searchInput.isActive ? (
                    <View style={styles.emptyContainer}>
                        <Empty />
                    </View>
                ) : (
                    <Fragment>
                        <MapView
                            onLayout={() => {
                                if (items[0]) {
                                    animateToItemLocation(items[0]);
                                }
                                setIsMapLoaded(true);
                            }}
                            initialRegion={{
                                latitude: 56.951637,
                                longitude: 24.113347,
                                latitudeDelta: 0.009,
                                longitudeDelta: 0.009,
                            }}
                            showsUserLocation={true}
                            style={styles.map}
                            ref={mapViewRef}
                            mapPadding={{
                                top: 0,
                                right: 0,
                                bottom:
                                    isScrollOpen && parentViewHeight && sliderHeight && buttonsHeight
                                        ? Math.floor((parentViewHeight - sliderHeight) / 2)
                                        : 0,
                                left: 0,
                            }}
                        >
                            {items.map((item, index) => (
                                <EventMarker
                                    key={item.id}
                                    onPress={() => onMapMarkerClick(item, index)}
                                    isSelected={selectedId === item.id}
                                    coordinates={item.location}
                                />
                            ))}
                        </MapView>

                        <Animated.View
                            style={[styles.belowMap, transformStyle]}
                            onLayout={(event: LayoutChangeEvent) => {
                                setSliderHeight(Math.ceil(event.nativeEvent.layout.height));
                            }}
                        >
                            <Animated.View style={[styles.eventsContainer]}>
                                <View
                                    style={styles.buttonsContainer}
                                    onLayout={event => {
                                        setButtonsHeight(Math.ceil(event.nativeEvent.layout.height) + 16);
                                    }}
                                >
                                    <TouchableOpacity style={styles.helperButton} onPress={animateToUserLocation}>
                                        <MyLocation />
                                    </TouchableOpacity>

                                    <ArrowButton
                                        open={isScrollOpen}
                                        onPress={() => {
                                            setScrollOpen(!isScrollOpen);
                                            startAnimation();
                                        }}
                                        style={styles.helperButton}
                                    />
                                </View>

                                <Carousel
                                    ref={(c: AnyType) => (carousel = c)}
                                    data={items}
                                    renderItem={({ item, index }) => (
                                        <EventCard
                                            item={item}
                                            onFavourite={() => onFavourite(item)}
                                            onNavigate={() => onNavigate(item)}
                                            navigateToArticle={() => navigateToArticle(item)}
                                            itemIndex={index + 1}
                                            totalItems={items.length}
                                            backgroundColor={colors.findColorByIndex(index)}
                                        />
                                    )}
                                    onSnapToItem={cardIndex => onCarouselItemChange(cardIndex)}
                                    sliderWidth={WIDTH}
                                    itemWidth={WIDTH - 22}
                                    removeClippedSubviews={false}
                                    containerCustomStyle={{ flex: 1 }}
                                    inactiveSlideScale={1}
                                    inactiveSlideOpacity={1}
                                />
                            </Animated.View>
                        </Animated.View>
                    </Fragment>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        overflow: 'hidden',
        backgroundColor: colors.white,
    },
    container: {
        ...StyleSheet.absoluteFillObject,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    header: {
        position: 'absolute',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    belowMap: {
        position: 'absolute',
    },
    eventsContainer: {
        flex: 1,
        paddingBottom: 16,
    },
    buttonsContainer: {
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 16,
    },
    helperButton: {
        marginRight: 8,
        backgroundColor: colors.yellow,
        padding: 10,
    },
    emptyContainer: {
        top: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default EventMapComponent;
