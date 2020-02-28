import React, { useRef, useImperativeHandle, forwardRef, RefForwardingComponent, PropsWithChildren } from 'react';
import { StyleSheet, ScrollView, Dimensions, ScrollViewProps } from 'react-native';
import { EventCard } from './EventCard';
import { EventItem } from '../types';
import { colors } from '@styles';

const width = Dimensions.get('window').width;

export interface ScrollViewHandle {
    scrollTo(options: ScrollToOptions): void;
}
interface ScrollToOptions {
    x?: number;
    y?: number;
    animated?: boolean;
}
interface Props extends ScrollViewProps {
    items: EventItem[];
    onFavourite: (item: EventItem) => void;
    onNavigate: (item: EventItem) => void;
}

const EventScroll: RefForwardingComponent<ScrollViewHandle, PropsWithChildren<Props>> = (props, ref) => {
    const scrollViewRef = useRef<ScrollView>(null);
    useImperativeHandle(ref, () => ({
        scrollTo: (options: ScrollToOptions) => {
            scrollViewRef.current && scrollViewRef.current.scrollTo(options);
        },
    }));
    return (
        <ScrollView
            horizontal={true}
            scrollEventThrottle={16}
            scrollEnabled={true}
            contentContainerStyle={styles.container}
            decelerationRate={0}
            snapToInterval={width - 34}
            snapToAlignment={'center'}
            ref={scrollViewRef}
        >
            {props.items.map((item, index) => (
                <EventCard
                    key={item.id}
                    backgroundColor={colors.findColorByIndex(index)}
                    item={item}
                    itemIndex={index + 1}
                    totalItems={props.items.length}
                    onFavourite={() => props.onFavourite(item)}
                    onNavigate={() => props.onNavigate(item)}
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        zIndex: 8,
        paddingBottom: 12,
        paddingLeft: 16,
    },
});

const ForwardedRefScroll = forwardRef(EventScroll);
export { ForwardedRefScroll as EventScroll };
