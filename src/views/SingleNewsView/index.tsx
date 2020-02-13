import React, { useState } from 'react';
import Markdown from 'react-native-markdown-display';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { IconType } from '@components';
import { typography, colors } from '@styles';
import { Label } from '../MarkdownEvent/Label';
import BackButton from '../MarkdownEvent/BackButton';
import { IconButtons } from '../MarkdownEvent/IconButtons';
import NavigationAware from '../../navigation/NavigationAware';
import { FETCH_NEWS_CONTENT } from './graphql/queries';
import { useQuery } from '@apollo/react-hooks';
import { Data } from './graphql/types';

let SingleNewsView = ({ navigation }: NavigationAware) => {
    const [newsId, setNewsId] = useState('');
    const [newsContent, setNewsContent] = useState({});

    () => {};
    console.log(
        useQuery<Data>(FETCH_NEWS_CONTENT, { variables: { newsId }, pollInterval: 1000 }),
    );
    if (newsId === null) {
        console.log('No item id recieved!');
        return (
            <View style={{ alignItems: 'center', paddingTop: 50 }}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}
                >
                    Atainojiet, lapu nevar ielādēt. :(
                </Text>
            </View>
        );
    } else {
        let data: Data = useQuery<Data>(FETCH_NEWS_CONTENT, { variables: { newsId }, pollInterval: 1000 });
        // let data = {} as Data;
        // // let data: Data, loading = useQuery<Data>(FETCH_NEWS_CONTENT, { variables: { newsId }, pollInterval: 1000 });
        // let dataResolution = new Promise((resolve, reject) => {
        //     let dataHolder = useQuery<Data>(FETCH_NEWS_CONTENT, { variables: { newsId }, pollInterval: 1000 });
        //     if (typeof data != 'undefined') {
        //         resolve(dataHolder);
        //     } else {
        //         reject(console.log('Error'));
        //     }
        // });

        // dataResolution
        //     .then(result => {
        //         data = result as Data;
        //     })
        //     .catch(message => {
        //         console.log(message);
        //     });

        setNewsContent(data);
        console.log(newsContent);
        // if (loading) {
        //     return (
        //         <View style={{ alignItems: 'center', paddingTop: 50 }}>
        //             <Text
        //                 style={{
        //                     fontSize: 20,
        //                     fontWeight: 'bold',
        //                 }}
        //             >
        //                 Lapa lādējās...
        //             </Text>
        //         </View>
        //     );
        // } else {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={{ uri: newsContent?.newsItems[0].image?.url }}
                            resizeMode="cover"
                        />
                    </View>
                    <View>
                        <Text style={styles.title}>{newsContent?.newsItems[0].title}</Text>
                    </View>
                    <View style={styles.timeDateContainer}>
                        {/* <Label iconType={IconType.Calendar} title={data.date} /> */}
                        {/* <Label iconType={IconType.Clock} title={data.date} /> */}
                    </View>
                    <View style={styles.row}>
                        <IconButtons onShare={() => null} onFavourite={() => null} onNavigate={() => null} />
                    </View>
                    <View style={styles.markdownContainer}>
                        <Markdown style={markdownstyles}>{newsContent?.newsItems[0].content}</Markdown>
                    </View>
                    <BackButton />
                </ScrollView>
            </View>
        );
    }
};

export default SingleNewsView;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginTop: 20,
        marginBottom: 30,
        flex: 1,
        height: 56,
        justifyContent: 'flex-start',
        textAlign: 'left',
        flexDirection: 'column',
    },
    header: {
        height: 50,
        alignItems: 'stretch',
    },
    timeDateContainer: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        fontFamily: typography.bold,
    },
    place: {
        color: colors.mediumGrey4D,
    },
    timeDate: {},
    imageContainer: {
        height: 180,
    },
    image: {
        width: '100%',
        height: 180,
    },
    markdownContainer: {},
    row: {
        flexDirection: 'row',
    },
});

const markdownstyles = StyleSheet.create({
    text: {
        fontFamily: typography.normal,
        fontSize: 16,
    },
});
