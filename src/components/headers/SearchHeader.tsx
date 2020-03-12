import React, { useState } from 'react';
import { View } from 'react-native';
import { TouchableOpacity, ScrollView, TextInput } from 'react-native-gesture-handler';
import { Icon, IconType } from '@components';
import { colors } from '@styles';
import { styles } from './styles';
import { SharedStackNavList } from 'src/navigation/stacks/SharedStack';

export interface SearchInterface {
    payload: string;
    isActive: boolean;
}

const SearchHeader: React.FC<SharedStackNavList<'Search'>> = ({ route, navigation }) => {
    const [input, setInput] = useState('');

    const bgColor = route.params ? route.params.color : colors.blue

    const handleSubmit = () => {
        setInput('');
        navigation.navigate('Feed', { payload: input });
    };

    const inputAccessoryViewID = 'searchHeaderInput';
    return (
        <View style={styles.insetsContainer}>
            <ScrollView keyboardDismissMode="interactive">
                <View style={[styles.header, { backgroundColor: bgColor }]}>
                    <TouchableOpacity style={styles.iconBox} onPress={() => navigation.goBack()}>
                        <Icon type={IconType.ChevronLeft} fill={colors.white} />
                    </TouchableOpacity>

                    <TextInput
                        autoFocus
                        keyboardType="ascii-capable"
                        maxLength={200}
                        style={styles.text}
                        inputAccessoryViewID={inputAccessoryViewID}
                        onChangeText={text => setInput(text)}
                        value={input}
                        onSubmitEditing={handleSubmit}
                        selectionColor={colors.white}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default SearchHeader;
