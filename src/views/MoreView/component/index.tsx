import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card } from './Card';
import { colors } from '@styles';
import { Items, ItemType } from '../content';

interface Props {
    navigate: (route: string) => void;
}

const MoreView: React.FC<Props> = ({ navigate }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.inner}>
                {Items.map((item: ItemType) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        icon={item.icon}
                        backgroundColor={item.backgroundColor}
                        onOpen={() => item.onOpen(navigate)}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    inner: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 4,
        paddingHorizontal: 8,
    },
});

export default MoreView;
