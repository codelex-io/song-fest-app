import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '@styles';

export default class Loading extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size="large" color={colors.orange} />
            </View>
        );
    }
}
