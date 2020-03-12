import React, { useState } from 'react';
import { View } from 'react-native';
import { TouchableOpacity, ScrollView, TextInput } from 'react-native-gesture-handler';
import { Icon, IconType } from '@components';
import { colors } from '@styles';
import { styles } from './styles';
import { SharedStackParamsList } from 'src/navigation/stacks/SharedStack';
import { StackNavigationProp } from '@react-navigation/stack';

export interface SearchInterface {
    payload: string;
    isActive: boolean;
}

interface Props {
    navigation: StackNavigationProp<SharedStackParamsList, 'Search'>;
}

const SearchHeader: React.FC<Props> = ({ navigation }) => {
    const [input, setInput] = useState('');

    const handleSubmit = () => {
        setInput('');
        navigation.navigate('Feed', { payload: input });
    };

    const inputAccessoryViewID = 'searchHeaderInput';
    return (
        <View style={styles.insetsContainer}>
            <ScrollView keyboardDismissMode="interactive">
                <View style={[styles.header, { backgroundColor: colors.blue }]}>
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
