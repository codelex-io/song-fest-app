import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '@styles';

export default class Loading extends Component {
    render() {
        return (
            <View>
                <ActivityIndicator size="small" color={colors.randomColor()} />
            </View>
        );
    }
}
