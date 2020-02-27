import React, { useState, useRef } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Animated } from 'react-native';
import MapView from 'react-native-maps';
import { MyLocation } from './MyLocation';
import { FilterButton } from './FilterButton';
import { ArrowButton } from './ArrowButton';
import { EventItem } from '../types';
import { EventScroll, ScrollViewHandle } from './EventScroll';
import { SearchBar } from './SearchBar';
import { EventMarker } from './EventMarker';
import { typography } from '@styles';

const width = Dimensions.get('window').width;

interface Props {
    loading: boolean;
    items: EventItem[];
    onSelectEvent: (event: EventItem) => void;
    onFavourite: (item: EventItem) => void;
    onNavigate: (item: EventItem) => void;
}

const EventMapView: React.FC<Props> = ({ items, onSelectEvent, onFavourite, onNavigate }) => {
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
    const transformStyle = {
        transform: [
            {
                translateY: animation,
            },
        ],
    };
    const eventCardPostion = (index: number) => {
        return {
            x: index * (width - 34),
            y: 0,
            animated: true,
        };
    };
    return (
        <View style={styles.container}>
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
                ref={mapViewRef}
            >
                {items.map((item, index) => (
                    <EventMarker
                        key={item.id}
                        onPress={() => {
                            onSelectEvent(item);
                            setScrollOpen(true);
                            startAnimation();
                            scrollViewRef.current && scrollViewRef.current.scrollTo(eventCardPostion(index));
                        }}
                        isSelected={item.isSelected}
                        coordinates={item.location}
                    />
                ))}
            </MapView>
            <View style={styles.eventsContainer}>
                <Animated.View style={transformStyle}>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity>
                            <MyLocation />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FilterButton />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setScrollOpen(!isScrollOpen);
                                startAnimation();
                            }}
                        >
                            <ArrowButton open={isScrollOpen} />
                        </TouchableOpacity>
                    </View>
                    <EventScroll
                        items={items}
                        onFavourite={item => onFavourite(item)}
                        onNavigate={item => onNavigate(item)}
                        ref={scrollViewRef}
                    />
                </Animated.View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        width: width,
        height: '100%',
        fontFamily: typography.normal,
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
        justifyContent: 'space-between',
        marginBottom: 16,
    },
});

export default EventMapView;
