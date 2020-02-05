import React, { Component } from 'react';
import { StyleSheet, Share, View, Text } from 'react-native';

export default class ShareOption extends Component {
    onShare = async () => {
        const uri =
            'https://www.nacgavilet.lv/jaunumi/cela-uz-xii-latvijas-skolu-jaunatnes-dziesmu-un-deju-svetkiem-meistarklases-rigas-doma-kora-skola-pulcesies-dirigenti-no-visas-latvijas/';

        Share.share({
            title: 'Share',
            url: uri,
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text} onPress={this.onShare}>
                    Share
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FF0080',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 36,
        paddingHorizontal: 24,
        paddingVertical: 16,
        backgroundColor: '#e6005c',
        borderRadius: 12,
        overflow: 'hidden',
    },
});
