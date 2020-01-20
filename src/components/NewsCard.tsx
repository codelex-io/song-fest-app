/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface NewsCardProps {
    info: {
        date: string;
        title: string;
    }[];
}

export class NewsCard extends React.Component<NewsCardProps> {
    render() {
        const { info } = this.props;
        return <View style={styles.container}>
               <View style={styles.pictureContainer}>
                    <Text> {info[0].date}</Text>
               </View>
               <View style={styles.lowerContainer}>
                     <Text> {info[0].title}</Text>
               </View>
            
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 8,
        flexDirection: 'column',
    },
    pictureContainer: {
        flex: 1,
        backgroundColor: 'grey',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
    },
    lowerContainer: {
        flex: 1,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        backgroundColor: '#086BB5',
    }
});
